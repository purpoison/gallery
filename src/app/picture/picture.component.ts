import { Component } from '@angular/core';
import { Productservice } from './PicturesService';
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {
  pictures:Productservice[]
  constructor(private picteresService: Productservice){
    this.pictures = picteresService.getPicture()
  }
}
