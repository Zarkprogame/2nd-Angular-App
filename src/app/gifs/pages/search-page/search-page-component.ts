import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page-component',
  imports: [GifListComponent],
  templateUrl: './search-page-component.html',
})
export default class SearchPageComponent {

  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string){

    this.gifService.searchGifs(query)
    .subscribe((resp) => {
      this.gifs.set(resp);
    })
  }
}
