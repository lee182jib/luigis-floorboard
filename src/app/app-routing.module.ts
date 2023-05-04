import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

const routes: Routes = [
  { path: 'home', component: GalleryComponent },
  { path: 'detail/:id', component: AlbumDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
