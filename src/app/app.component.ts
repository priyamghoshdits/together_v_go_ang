import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./pages/shared/header/header.component";
import {FooterComponent} from "./pages/shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'together_v_go';
  constructor(
    private readonly router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
