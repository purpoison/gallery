import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicturePageComponent } from './picture-page/picture-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PictureResolver } from './picture-page/picture-resolver';

const routes: Routes = [
  {path: '', component: GalleryComponent},
  {path: 'picture', component: PicturePageComponent},
  // {path: 'picture/:id', component: PicturePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
