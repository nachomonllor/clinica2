import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import * as _ from 'lodash';
import { Subscription, BehaviorSubject } from 'rxjs';

import { UserService } from '../user.service';
import { validRoles } from '@shared/utils/enums';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '@env';
import Swal from 'sweetalert2';
import { AuthService } from '@core/auth/auth.service';
import * as moment from 'moment';
import { SwalService } from '../../../core/services/swal.service';
import { User } from '@shared/models/user.model';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})

export class UserDetailComponent implements OnInit {
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

  constructor(
    private swalService: SwalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form = new FormGroup({
      id: new FormControl(null),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      is_verified: new FormControl(false, [Validators.required]),
      role: new FormControl('1', [Validators.required]),
     
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
    this.isProfessional = (+evt.value === validRoles.Professional);
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
  addTimeSlot(i) {
    return new FormGroup({
      day: new FormControl(i),
      timeStart: new FormControl(null),
      timeEnd: new FormControl(null)
    });
  }
  ngOnInit() {
   
  }
  onClear() {
    this.form.reset();
  }

  onSubmit() {

  }




  // changeImage() {
  //   this._userService
  //     .changeImage(this.imageUpload, !this.userId ? this.form.get('id').value : this._authService.user.id)
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
