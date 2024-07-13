import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-app-hymnal',
  templateUrl: './app-hymnal.component.html',
  styleUrl: './app-hymnal.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppHymnalComponent {
  // routeAnimationState: string = '';

  // constructor(private cdr: ChangeDetectorRef) {}

  // ngOnInit(): void {
  //   this.routeAnimationState = 'HomePage';
  //   this.cdr.detectChanges(); // Trigger change detection
  // }

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }
}
