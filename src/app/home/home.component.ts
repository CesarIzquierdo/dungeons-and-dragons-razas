import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titulo = "Dungeons and dragons";

  imageObject: Array<object> = [{
    image: 'assets/img/slider/p1.jpg',
    thumbImage: 'assets/img/slider/p1_min.jpeg',
    alt: 'Imagen 1',
    title: 'Título de la imagen 1'
  },
  {
    image: 'assets/img/slider/p2.jpg',
    thumbImage: 'assets/img/slider/p2_min.jpeg',
    alt: 'Imagen 2',
    title: 'Título de la imagen 2'
  },
  {
    image: 'assets/img/slider/p3.jpg',
    thumbImage: 'assets/img/slider/p3_min.jpeg',
    alt: 'Imagen 3',
    title: 'Título de la imagen 3'
  },
  {
    image: 'assets/img/slider/p4.jpg',
    thumbImage: 'assets/img/slider/p4_min.jpeg',
    alt: 'Imagen 4',
    title: 'Título de la imagen 4'
  }
  ];

}
