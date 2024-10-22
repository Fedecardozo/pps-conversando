import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonFabButton,
  IonFab,
} from '@ionic/angular/standalone';
import { UsersService } from '../service/users.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonFab,
    IonFabButton,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RouterLink,
  ],
})
export class HomePage {
  public router: Router = inject(Router);
  public auth: UsersService = inject(UsersService);
  constructor() {}

  async cerrarSesion() {
    await this.auth.cerrarSesion();
    this.router.navigateByUrl('/login');
  }
}
