import { Component } from '@angular/core';
import { PicturesService } from '../picture/PicturesService';
import { Picture } from "../picture/pictures";
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-picture-page',
  templateUrl: './picture-page.component.html',
  styleUrls: ['./picture-page.component.css'],
  providers: [PicturesService]
})
export class PicturePageComponent {
  temp:any
  id: any;
  private querySubscription: Subscription | undefined;
  constructor(private route: ActivatedRoute, private picturesService: PicturesService){
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
          this.temp = this.picturesService.getById(queryParam['id']); 
      }
    );
  }
}
