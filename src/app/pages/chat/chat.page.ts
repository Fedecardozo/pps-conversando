import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonSpinner,
} from '@ionic/angular/standalone';
import { UsersService } from 'src/app/service/users.service';
import { DbService } from 'src/app/service/db.service';
import { Subscription } from 'rxjs';
import { Chat } from 'src/app/models/chat';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [
    IonSpinner,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ChatPage implements ViewWillEnter {
  userService: UsersService = inject(UsersService);
  db: DbService = inject(DbService);
  value: string = '';
  subcripcion?: Subscription;
  listMessages: Chat[] = [];
  @Output() spinner = new EventEmitter<boolean>();
  @Input() bg: string = 'bg1';
  @Input() sala: string = 'a';
  @Input() hide: boolean = true;

  enviarMsj() {
    if (this.value !== '' && this.userService.correo) {
      this.db.addChat(this.value, this.userService.correo, this.sala);
      this.value = '';
    }
  }

  convertirFecha(fecha: number) {
    return new Date(fecha).toLocaleString();
  }

  ionViewWillEnter(): void {
    this.subcripcion = this.db
      .getChats(this.sala)
      .valueChanges()
      .subscribe((next) => {
        this.listMessages = next as Chat[];
        this.spinner.emit(false);
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
