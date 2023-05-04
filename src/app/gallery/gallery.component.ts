import { Component } from '@angular/core';
import { ALBUMS } from '../album-list';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  albums = ALBUMS;
}
