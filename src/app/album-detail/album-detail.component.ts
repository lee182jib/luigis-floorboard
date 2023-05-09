import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DiscogsService } from '../discogs.service';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  release: any;
  id: string;

  constructor(
    private discogService: DiscogsService,
    private route: ActivatedRoute
  ) {
    this.id = '';
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    console.log(this.id)
    this.discogService.getRelease(this.id).subscribe((data) => {
      this.release = data
    })
  }
}
