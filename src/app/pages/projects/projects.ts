import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

   projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with Angular, Bootstrap, and Material UI.',
      tech: ['Angular', 'Bootstrap', 'Material UI'],
      link: 'https://github.com/your-username/portfolio',
      image: 'assets/portfolio.png'
    },
    {
      title: 'Clous Kitchen App',
      description: 'An app to manage contacts with Spring Boot backend & Angular frontend.',
      tech: ['Angular', 'Spring Boot', 'MySQL'],
      link: 'https://github.com/your-username/contact-manager',
      image: 'assets/cloud_kitchen.png'
    },
    {
      title: 'Weather Forcaster App',
      description: 'Provides real-time weather updates based on user location.',
      tech: ['Angular', 'BootStarp', 'Material UI'],
      link: 'https://github.com/tyagirupal/weatherForcasting.git',
      image: 'assets/weather.jpg'
    }
  ];  

}
