import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';
import { Router, RouterOutlet, Event, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
  animations: [
      trigger('routeAnimations', [
        transition('* <=> *', [
          query(':enter, :leave', style({ position: 'absolute', width: '100%' }), {
            optional: true,
          }),
          group([
            query(
              ':leave',
              [
                style({ opacity: 1, transform: 'translateX(0)' }),
                animate(
                  '300ms ease',
                  style({ opacity: 0, transform: 'translateX(-50px)' })
                ),
              ],
              { optional: true }
            ),
            query(
              ':enter',
              [
                style({ opacity: 0, transform: 'translateX(50px)' }),
                animate(
                  '300ms ease',
                  style({ opacity: 1, transform: 'translateX(0)' })
                ),
              ],
              { optional: true }
            ),
          ]),
        ]),
      ]),
    ],
})
export class App implements OnInit {
  protected title = 'rupalPortfolio';

   constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
   ngOnInit(): void {
    AOS.init({ duration: 1000, once: true });
  }
   prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
