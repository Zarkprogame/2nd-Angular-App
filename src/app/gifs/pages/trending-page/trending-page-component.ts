import { Component, computed, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list";
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page-component',
  imports: [GifListComponent],
  templateUrl: './trending-page-component.html',
})
export default class TrendingPageComponent {

  gifService = inject(GifService);
}
