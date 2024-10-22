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
  selector: 'app-clase-b',
  templateUrl: './clase-b.page.html',
  styleUrls: ['./clase-b.page.scss'],
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
export class ClaseBPage implements OnInit {
  spinner: boolean = true;
  constructor() {}

  ngOnInit() {}

  cambiarEstado(estado: boolean) {
    this.spinner = estado;
  }
}
