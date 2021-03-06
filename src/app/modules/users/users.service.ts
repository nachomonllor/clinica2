import { Injectable, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@shared/models/user.model';
import { convertSnaps } from '../../core/services/db-utils';
import { AuthService } from '../../core/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  @ViewChild('imageUser') inputImageUser: ElementRef;
  constructor(
    private router: Router,
    private authService: AuthService,
    private db: AngularFirestore
  ) {
  }
  getUsers(): Observable<User[]> {
    return this.db.collection('users')
    .snapshotChanges()
    .pipe(
      map(snaps => {
        return convertSnaps<User>(snaps);
        // return snaps.map(snap => {
        //   return  {
        //     id: snap.payload.doc.id,
        //     ...snap.payload.doc.data() as {}
        //   } as User;
        // });
      })
    );
  }


}
