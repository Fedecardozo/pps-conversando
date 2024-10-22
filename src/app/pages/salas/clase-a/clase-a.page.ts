import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSpinner,
} from '@ionic/angular/standalone';
import { ChatPage } from '../../chat/chat.page';

@Component({
  selector: 'app-clase-a',
  templateUrl: './clase-a.page.html',
  styleUrls: ['./clase-a.page.scss'],
  standalone: true,
  imports: [
    IonSpinner,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ChatPage,
  ],
})
export class ClaseAPage implements OnInit {
  spinner: boolean = true;
  constructor() {}

  ngOnInit() {}

  cambiarEstado(estado: boolean) {
    this.spinner = estado;
  }
}
