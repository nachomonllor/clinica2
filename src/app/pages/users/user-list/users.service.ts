import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../../shared/models/users.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private db: AngularFirestore
  ) {
  }
  getUsers(): Observable<User[]> {
    return this.db.collection('users')
    .snapshotChanges()
    .pipe(
      map(snaps => {
        return snaps.map(snap => {
          return  {
            id: snap.payload.doc.id,
            ...snap.payload.doc.data() as {}
          } as User;
        });
      })
    );

  }

}
