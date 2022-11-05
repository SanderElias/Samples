import { ChangeDetectionStrategy, Component, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageJsonService, WireItEntry } from '../../package.json.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ArrInputComponent } from './arr-input/arr-input.component';
import { getRaw } from 'messagepack/dist/types/buffer';
import { ObjectFromRawFormValue } from '@validointi/core';
import { ShowMessageComponent } from './show-message/show-message.component';

@Component({
  selector: 'se-wireit',
  standalone: true,
  imports: [CommonModule, FormsModule, ArrInputComponent, ShowMessageComponent],
  template: `
  <header>
    <h3 contenteditable (blur)="nameEdit($event)">{{ name }}</h3>
    <div class="buttongroup">
      <button (click)="downgrade()" title="downgrade to script">👎️</button>
      <button (click)="split()" title="create a duplicate">🖇️</button>
      <button (click)="save()" title="save changes">💾</button>
    </div>
  </header>
  <main>
    <form #form>
      <label>
        <span>Command</span>
        <input name="command" type="text" [(ngModel)]="props.command" >
      </label>
      <label>
        <span>Files <button class="action" type="button" (click)="addFile()">➕</button></span>
        <se-arr-input name="files" *ngFor="let file of props.files; let index = index" [index]="index" [value]=file (delete)="props.files.splice(index,1)"></se-arr-input>
      </label>
    </form>
    <!-- <pre>{{ props|json }}</pre> -->
  </main>
  <se-show-message [message]="message" (dismissed)="message=''"></se-show-message>

  `,
  styleUrls: ['./wireit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WireitComponent {
  @Input() name: string;
  @Input() props: WireItEntry;
  @ViewChild(NgForm) form;

  pjs = inject(PackageJsonService)
  message = '';

  downgrade = () => {
    this.pjs.downgrade(this.name);
  }

  addFile = () => {
    this.props.files ??= [];
    this.props.files.push('');
  }

  split = () => {
    this.pjs.addWireitScript(
      this.name + ".1",
      this.props
    )
  }

  nameEdit = async (event: FocusEvent) => {
    // console.log(event);
    const elm = event.target as HTMLHeadingElement;
    const newName = elm.textContent;
    if (newName !== this.name) {
      if (await this.pjs.renameWireit(this.name, newName)) {
        this.name = newName;
      } else {
        this.message = ("New name already exists, reverted to old name");
        elm.textContent = this.name;
      }

    }

  }

  save = () => {
    this.pjs.updateWireItEntry(this.name, this.props);
  }

}
