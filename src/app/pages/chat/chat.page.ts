import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/angular/standalone';
import { UsersService } from 'src/app/service/users.service';
import { DbService } from 'src/app/service/db.service';
import { Subscription } from 'rxjs';
import { Chat } from 'src/app/models/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ChatPage implements OnInit {
  userService: UsersService = inject(UsersService);
  db: DbService = inject(DbService);
  value: string = '';
  subcripcion?: Subscription;
  listMessages: Chat[] = [];
  spinner: boolean = false;
  bg: string = 'bg2';

  enviarMsj() {
    if (this.value !== '' && this.userService.correo) {
      this.db.addChat(this.value, this.userService.correo);
      this.value = '';
    }
  }

  convertirFecha(fecha: number) {
    return new Date(fecha).toLocaleString();
  }

  ngOnInit(): void {
    this.subcripcion = this.db
      .getChats()
      .valueChanges()
      .subscribe((next) => {
        this.listMessages = next as Chat[];
        this.spinner = true;
      });
  }

  ngAfterViewChecked(): void {
    const scroll = document.getElementById('scroll');
    if (scroll !== null) {
      scroll.scrollTo({
        top: scroll.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  ngOnDestroy(): void {
    this.subcripcion?.unsubscribe();
  }
}
