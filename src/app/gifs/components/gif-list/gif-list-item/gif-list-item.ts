import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
})
export class GifListItemComponent {
  imageUrl = input.required<string>();
}
