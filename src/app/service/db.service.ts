import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private firestore: AngularFirestore) {}
  addChat(message: string, correo: string) {
    const colChats = this.firestore.collection('chats');
    const fecha = Date.now();
    const documento = colChats.doc('' + fecha);
    documento.set({
      ...new Chat(documento.ref.id, fecha, correo, message),
    });
  }

  getChats() {
    const col = this.firestore.collection('chats');
    return col;
  }

  getCartas() {
    const col = this.firestore.collection('cartas');
    return col;
  }
}
