import { ChangeDetectionStrategy, Component, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageJsonService, WireItEntry } from '../../package.json.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ArrInputComponent } from './arr-input/arr-input.component';
import { getRaw } from 'messagepack/dist/types/buffer';
import { ObjectFromRawFormValue } from '@validointi/core';
import { ShowMessageComponent } from './show-message/show-message.component';
import { DepedenciesComponent } from './depedencies/depedencies.component';

@Component({
  selector: 'se-wireit',
  standalone: true,
  imports: [CommonModule, FormsModule, ArrInputComponent, ShowMessageComponent,DepedenciesComponent],
  template: `
  <header>
    <h3 contenteditable (blur)="nameEdit($event)">{{ name }}</h3>
    <div class="buttongroup">
      <button (click)="pjs.removeWireitScript(name)" title="downgrade to script">🗑️</button>
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
      <label class=row>
        <span>Service</span>
        <button
           (click)="toggleService()"
           type="button"
           [style.scale]=".7"
           [style.--_bg]="props.service ? 'var(--green-9)' : 'var(--color-error)'"
           >
           {{props.service ? '🟢' : '🔴'}}
           {{props.service ? "Enabled" : "disabled"}}
          </button>
          <input name="service" type="hidden" [ngModel]="props.service">
      </label>
      <label>
        <span>Files <button class="action" type="button" (click)="addFile()">➕</button></span>
        <div>
          <se-arr-input name="files" *ngFor="let file of props.files; let index = index" [index]="index" [value]=file (delete)="props.files.splice(index,1)"></se-arr-input>
        </div>
      </label>
      <label>
        <span>Output <button class="action" type="button" (click)="addOutput()">➕</button></span>
        <div>
          <se-arr-input name="output" *ngFor="let file of props.output; let index = index" [index]="index" [value]=file (delete)="props.output.splice(index,1)"></se-arr-input>
        </div>
      </label>
      <label>
        <span>PackageLocks <button class="action" type="button" (click)="addLock()">➕</button></span>
        <div>
          <se-arr-input name="packageLocks" *ngFor="let file of props.packageLocks; let index = index" [index]="index" [value]=file (delete)="props.packageLocks.splice(index,1)"></se-arr-input>
        </div>
      </label>
      <label >
        <span>Dependecies <button class="action" type="button" (click)="dep.addOne()">➕</button></span>
        <se-dependencies #dep [deps]="props.dependencies" [current]="name"></se-dependencies>
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

  addOutput = () => {
    this.props.output ??= [];
    this.props.output.push('');
  }
  addLock = () => {
    this.props.packageLocks ??= [];
    this.props.packageLocks.push('');
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

  toggleService = () => {
    if (this.props.service) {
      this.props.service = undefined;
    } else {
      this.props.service = true;
    }
  }

  save = () => {
    const props = ObjectFromRawFormValue(this.form.control.getRawValue()) as WireItEntry
    console.dir(props);
    this.pjs.updateWireItEntry(this.name, props );
  }

}
