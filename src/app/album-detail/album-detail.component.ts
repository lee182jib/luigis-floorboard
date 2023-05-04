import { Component } from '@angular/core';


import { DiscogsService } from '../discogs.service';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  release: any;

  constructor(
    private discogService: DiscogsService) {}

  ngOnInit() {
    this.discogService.getRelease(20285482).subscribe((data) => {
      this.release = data
    })
  }
}
