import { Component } from '@angular/core';
import { PicturesService } from './PicturesService';
import { Picture } from './pictures';
import { PicturePageComponent } from '../picture-page/picture-page.component';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
  providers: [PicturesService]
})
export class PictureComponent {
  id:any;
  pictures:Picture[];
  constructor(private picturesService: PicturesService){
    this.pictures = picturesService.getPicture();
  }
}
