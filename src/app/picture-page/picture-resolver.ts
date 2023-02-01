import { Component, Injectable, OnInit } from '@angular/core';
import { PicturesService } from '../picture/PicturesService';
import { Picture } from "../picture/pictures";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PictureResolver  implements Resolve<Picture > {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Picture | Observable<Picture> | Promise<Picture> {
        throw new Error('Method not implemented.');
    }
}