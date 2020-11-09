import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { Subscription, Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';
import { SwalService } from '../../../core/services/swal.service';
import { User } from '@shared/models/user.model';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})

export class UserDetailComponent implements OnInit {
  @ViewChild('imageUser') inputImageUser: ElementRef;
  url: string;
  isRequired = false;
  displayedColumns: string[] = ['day', 'timeStart', 'timeEnd'];
  user: User;
  @Input() userId: number;
  isProfessional = false;
  userSubscription: Subscription = new Subscription();
  imageUpload: File;
  imageTemp: string | ArrayBuffer;
  form: FormGroup;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  constructor(
    private router: Router,
    private userService: UserService,
    public authService: AuthService,
    private swalService: SwalService,
    private storage: AngularFireStorage
  ) {
    this.form = new FormGroup({
      id: new FormControl(null),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      is_verified: new FormControl(false, [Validators.required]),
      role: new FormControl('1', [Validators.required])
    });
    if (router.url.indexOf('/new') !== -1) {
      this.form.addControl('password', new FormControl(null, Validators.required));
      this.form.addControl('confirmPassword', new FormControl(null, Validators.required));
      this.isRequired = true;
    } else {
      this.form.addControl('password', new FormControl(null));
      this.form.addControl('confirmPassword', new FormControl(null));
    }
    this.form.updateValueAndValidity();
    // this.form.get('timeslot').setValue(this.dataSource.data);
  }
  onSelectionChange(evt) {
    this.isProfessional = (evt.value === 'profesional');
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
  onUpload(e) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges()
      .pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }
  addTimeSlot(i) {
    return new FormGroup({
      day: new FormControl(i),
      timeStart: new FormControl(null),
      timeEnd: new FormControl(null)
    });
  }
  ngOnInit() { }
  onClear() {
    this.form.reset();
  }

  onSubmit() {
    // const user = {
    //   email: this.form.get('email').value,
    //   password: this.form.get('password').value
    // };
    debugger
    this.authService.registerUser(this.form.value)
      .then((res) => {
        this.authService.isAuth().subscribe((user: any) => {
          if (user) {
            user.updateProfile({
              displayName: '',
              photoURL: this.inputImageUser.nativeElement.value
            }).then(() => {
              this.swalService.success('Atención', 'El usuario fue guardado', false, true, 3000);
              this.router.navigate(['/users']);
            }).catch((error) => this.swalService.success(':: Error', error, false, true, 3000));
          }
        });
      }).catch(err => console.log('err', err.message));
  }
  // changeImage() {
  //   this._userService
  //     .changeImage(this.imageUpload, !this.userId ? this.form.get('id').value : this.authService.user.id)
  //     .then(() => {
  //       this.imageUpload = null;
  //       Swal.fire(
  //         'Atención',
  //         'Se ha actualizado la imagen del usuario',
  //         'success'
  //       );
  //     });
  // }
}
// export interface TimeSlotElement {

//   day: number;
//   timeStart: string;
//   timeEnd: string;
// }

// let ELEMENT_DATA: TimeSlotElement[] = [
//   { day: 1, timeStart: null, timeEnd: null },
//   { day: 2, timeStart: null, timeEnd: null },
//   { day: 3, timeStart: null, timeEnd: null },
//   { day: 4, timeStart: null, timeEnd: null },
//   { day: 5, timeStart: null, timeEnd: null },
//   { day: 6, timeStart: null, timeEnd: null },
//   { day: 7, timeStart: null, timeEnd: null },

// ];
