import { Component } from '@angular/core';
import { PicturesService } from '../picture/PicturesService';
import { Picture } from "../picture/pictures";

@Component({
  selector: 'app-picture-page',
  templateUrl: './picture-page.component.html',
  styleUrls: ['./picture-page.component.css'],
  providers: [PicturesService]
})
export class PicturePageComponent {
  pictureInfo:Picture[]
  temp:any

  constructor(private picturesService: PicturesService){
    this.pictureInfo = picturesService.getPicture();
    this.temp = this.picturesService.getById(1);
  }
}
