import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FileHandlerService } from '../file-handler.service.js';
import { SlideComponent } from '../slide/slide.component.js';
import { SlidesHandlerService } from '../slides-handler.service.js';

@Component({
  selector: 'se-overview',
  imports: [SlideComponent, RouterLink],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  file = inject(FileHandlerService);
  deck = inject(SlidesHandlerService);
  selFile = this.file.select;

  async handleDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // console.log('drop', event);
    const items = event.dataTransfer?.items;
    if (items && items.length > 0) {
      const item = items[0];
      const handle = await item.getAsFileSystemHandle();
      // console.log('handle', handle);
      this.file.setHandle(handle as any);
    }
    return;
  }

  $id = computed(() => this.file.$state().name);

  $needToAskPermission = computed(() => this.$id() !== '' && this.file.$state().permission() === false);

  askPermission = () => {
    this.file.askPermission();
  };

  addSlide = () => this.deck.addSlide(this.deck.$slides().length, '# New Slide');
  save = () => this.deck.save(true);
}
