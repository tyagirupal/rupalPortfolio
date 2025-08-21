import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About {
    @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
   
    skills: string[] = [
  'Angular',
  'React',
  'React Native',
  'Java',
  'Spring Boot',
  'MySQL',
  'Bootstrap',
  'Material UI',
  'Python',
  'Typescript',
  'Node.js',
  'AWS',
  'Google Cybersecurity',
  'Selenium (Basics)',
  'Jira (Basics)',
  'API Testing (Postman)',
  'Manual Testing',
  'Agile & Scrum',
  'SDLC/STLC',
  'Full-Stack Development'
];



  chipClass(skill: string): string {
    const s = skill.toLowerCase();
    if (['angular','react'].includes(s)) return 'chip-frontend';
    if (['java','spring boot','spring'].includes(s)) return 'chip-backend';
    return 'chip-tools';
  }

ngAfterViewInit(): void {
  new Typed(this.typedElement.nativeElement, {
    strings: [
      "I'm <span class='text-primary fw-bold'>Rupal Tyagi</span>, a <span class='text-success fw-bold'>Software Developer</span>",
      "<span class='text-info fw-bold'>Frontend Developer</span> | Angular | React",
      "<span class='text-warning fw-bold'>Backend Developer</span> | Java | Spring Boot",
      "<span class='text-danger fw-bold'>Passionate about Clean UI & Scalable Apps 🚀</span>"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
    contentType: 'html'
  });
}



}
