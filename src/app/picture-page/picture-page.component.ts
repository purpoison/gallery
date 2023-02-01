import { Component, Injectable, OnInit } from '@angular/core';
import { PicturesService } from '../picture/PicturesService';
import { Picture } from "../picture/pictures";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { getLocalePluralCase } from '@angular/common';

// @Injectable({
//   providedIn: 'root'
// })
@Component({
  selector: 'app-picture-page',
  templateUrl: './picture-page.component.html',
  styleUrls: ['./picture-page.component.css'],
  providers: [PicturesService]
})
export class PicturePageComponent  implements OnInit{
  pictureInfo:Picture[]
  pictureSubs!: Subscription;
  temp:any
  id: any;
  private querySubscription: Subscription;
  constructor(private route: ActivatedRoute, private picturesService: PicturesService){
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
          this.id = queryParam['id'];
          console.log(this.id);   
      }
  );
    this.pictureInfo = picturesService.getPicture();
    this.temp = this.picturesService.getById(this.id);
  }

  ngOnInit(): void {

  }
}
