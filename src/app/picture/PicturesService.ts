export class Productservice{
    pictures:any[] = [
        {
        id:1,
        img: '../../assets/pictures/387541@2x.jpg',
        name: 'Враження. Схід сонця',
        year: 1872,
        place: 'Музей Мармоттан-Моне (Париж,Франція)'
      },
      {
        id:2,
        img: '../../assets/pictures/600px-Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg',
        name: 'Жінка з парасолькою',
        year: 1875,
        place: 'Національна галерея мистецтва (Вашингтон,США)'
      },
      {
        id:3,
        img: '../../assets/pictures/700px-Monet_-_Monets_Garten_in_Giverny.jpg',
        name: 'Іриси в саду',
        year: 1900,
        place: 'Музей Орсе(Париж)'
      },
      {
        id:4,
        img: '../../assets/pictures/Claude_Monet_Seerosen_um_1915_Neue_Pinakothek-4.jpg',
        name: 'Водяні лілії',
        year: 1914,
        place: 'Франція'
      },
      {
        id:5,
        img: '../../assets/pictures/700px-Claude_Monet,_1867,_Regatta_at_Sainte-Adresse,_Metropolitan_Museum_of_Art.jpg',
        name: 'Тераса в Сент-Адрес',
        year: 1857,
        place: 'Музей Метрополітен (США, Нью-Йорк)'
      },
      {
        id:6,
        img: '../../assets/pictures/Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg',
        name: 'Сорока',
        year: 1868,
        place: 'Музей Орсе (Париж)'
      }

    ]
    getPicture():any[]{
      return this.pictures
    }
}