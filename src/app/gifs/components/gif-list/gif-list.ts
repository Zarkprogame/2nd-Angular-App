import { Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item";
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.html',
})
export class GifListComponent {
  urlList = input.required<Gif[]>();
}
