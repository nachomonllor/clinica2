import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SwalService } from '@core/services/swal.service';

declare function init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('imageUser') inputImageUser: ElementRef;
  email = '';
  password = '';
  isError = false;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  msgError = '';
  form: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService,
    private storage: AngularFireStorage,
    private swalService: SwalService) {
      this.createFormGroup();
  }
  ngOnInit(): void {
    init_plugins();
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
  onAddUser() {
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value,
    }
    this.authService.registerUser(user)
      .then((res) => {
        this.authService.isAuth().subscribe((user: any) => {
          console.log('usuario actual', user);
          if (user) {
            user.updateProfile({
              displayName: '',
              photoURL: this.inputImageUser.nativeElement.value
            }).then(() => {
              this.router.navigate(['admin/list-books']);
            }).catch((error) => console.log('error', error));
          }
        });
      }).catch(err => console.log('err', err.message));
  }
  createFormGroup() {
    this.form = new FormGroup(
      {
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        confirmPassword: new FormControl(null, Validators.required),
        role: new FormControl('paciente', Validators.required),
      },
      { validators: this.comparePasswords('password', 'confirmPassword') }
    );
  }
  comparePasswords(field1: string, field2: string) {
    // tslint:disable-next-line:no-shadowed-variable
    return (group: FormGroup) => {
      let pass1 = group.controls[field1].value;
      let pass2 = group.controls[field2].value;
      if (pass1 === pass2) {
        return null;
      }
      return {
        areEquals: true
      };
    };
  }
  onSubmit() {
    debugger
    this.authService.registerUser({...this.form.value, is_verified: false}).then(data => {
      this.swalService.success('Atención', 'El usuario ha sido guardado', false, true, 2000);
    }).catch(err => {
      this.swalService.error('Error', err.message, false, true, 2000);
    });
  }
  onLoginRedirect(): void {
    this.router.navigate(['/']);
  }
}
