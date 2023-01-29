import { Component } from '@angular/core';
import { PicturesService } from './PicturesService';
import { Picture } from './pictures';
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
  providers: [PicturesService]
})
export class PictureComponent {
  pictures:Picture[];

  constructor(private picturesService: PicturesService){
    this.pictures = picturesService.getPicture();
  }
}
