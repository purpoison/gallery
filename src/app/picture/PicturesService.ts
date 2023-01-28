import { Injectable } from "@angular/core";
import { Picture } from "./pictures";

@Injectable({
  providedIn: 'root'
})

export class PicturesService{
  constructor(){}

    private pictures:Picture[] = [
        {
        id:1,
        img: '../../assets/pictures/387541@2x.jpg',
        name: 'Враження. Схід сонця',
        year: 1872,
        size: '48×63 см',
        location: 'Музей Мармоттан-Моне (Париж,Франція)'
      },
      {
        id:2,
        img: '../../assets/pictures/Claude_Monet_-_La_Vague_Verte.jpg',
        name: 'Зелена хвиля',
        year: 1866,
        size: '49 × 65 см',
        location: 'Музей Метрополітен (США, Нью-Йорк)'
      },
      {
        id:3,
        img: '../../assets/pictures/700px-Monet_-_Monets_Garten_in_Giverny.jpg',
        name: 'Іриси в саду',
        year: 1900,
        size: '70 х 60 см',
        location: 'Музей Орсе(Париж)'
      },
      {
        id:4,
        img: '../../assets/pictures/Claude_Monet_Seerosen_um_1915_Neue_Pinakothek-4.jpg',
        name: 'Водяні лілії',
        year: 1914,
        size: '86×91 см',
        location: 'Франція'
      },
      {
        id:5,
        img: '../../assets/pictures/700px-Claude_Monet,_1867,_Regatta_at_Sainte-Adresse,_Metropolitan_Museum_of_Art.jpg',
        name: 'Тераса в Сент-Адрес',
        year: 1857,
        size: '99×129 см',
        location: 'Музей Метрополітен (США, Нью-Йорк)'
      },
      {
        id:6,
        img: '../../assets/pictures/Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg',
        name: 'Сорока',
        year: 1868,
        size: '89 × 130 см',
        location: 'Музей Орсе (Париж)'
      }

    ]
    getPicture():Picture[]{
      return this.pictures;
    }
}