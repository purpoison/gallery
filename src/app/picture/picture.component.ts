import { Component } from '@angular/core';
import { PicturesService } from './PicturesService';
import { Picture } from './pictures';
import { PicturePageComponent } from '../picture-page/picture-page.component';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
  providers: [PicturesService]
})
export class PictureComponent {
  id:any;
  pictures:Picture[];
  constructor(private picturesService: PicturesService,
     private router: Router,
     private activatedRoute: ActivatedRoute){
    this.pictures = picturesService.getPicture();
  
  }
  routingPicture(pictureId:number){
    this.router.navigate(['picture'], {queryParams:{id: pictureId}})
  }
}
