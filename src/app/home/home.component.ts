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


  // menu comlapsable 
  isCollapsed = false;

  toggleMenu() {
      this.isCollapsed = !this.isCollapsed;
  }
  menuItems = [
    { title: 'Humano', section: 'Humano' },
    { title: 'Elfo', section: 'Elfo' },
    { title: 'Enanos', section: 'Enanos' },
    { title: 'Medianos', section: 'Medianos' },
    { title: 'Draconidos', section: 'Draconidos' },
    { title: 'Gnomos', section: 'Gnomos' },
    { title: 'Semiorcos', section: 'Semiorcos' },
    { title: 'Semielfos', section: 'Semielfos' },
    { title: 'Tieflings', section: 'Tieflings' },
    { title: 'Aarakocra', section: 'Aarakocra' },
    { title: 'Goliaths', section: 'Goliaths' },
    { title: 'Genasi', section: 'Genasi' },
    { title: 'Tritones', section: 'Tritones' },
    { title: 'Yuan-ti', section: 'Yuan-ti' },
    { title: 'Tabaxi', section: 'Tabaxi' },
    { title: 'Lizardfolk', section: 'Lizardfolk' },
    { title: 'Firbolgs', section: 'Firbolgs' },
    { title: 'Kenkus', section: 'Kenkus' },
    { title: 'Tortles', section: 'Tortles' },
    { title: 'Shifters', section: 'Shifters' },
    { title: 'Warforged', section: 'Warforged' },
    { title: 'Changelings', section: 'Changelings' },
    { title: 'Kalashtar', section: 'Kalashtar' },
    { title: 'Aasimar', section: 'Aasimar' },
    { title: 'Minotauros', section: 'Minotauros' },
    { title: 'Centauros', section: 'Centauros' },
  ];
}
