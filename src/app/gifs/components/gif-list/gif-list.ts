import { Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item";

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.html',
})
export class GifListComponent {
  urlList = input.required<string[]>();
}
