import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { convertSnaps } from '../../services/db-utils';
import { User } from '../../../shared/models/user.model';
import { UserService } from '../../../modules/users/user.service';
import { LocalStorageService } from '@core/services/local-storage.service';
declare function init_plugins();
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  captchaResponse = '';
  form: FormGroup;
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private lsStorage: LocalStorageService
  ) {
    this.createForms();
  }

  ngOnInit(): void {
    init_plugins();
    this.recoverForm();
  }
  createForms() {
    this.form = new FormGroup({
      email: new FormControl('nachomonllor@hotmail.com', Validators.required),
      password: new FormControl('123456', Validators.required),
    });
    // this.form = new FormGroup({
    //   email: new FormControl('nachomonllorc@gmail.com', Validators.required),
    //   password: new FormControl('1\'ahigher', Validators.required),
    // });
  }
  recoverForm() {
    // ==============================================================
    // Login and Recover Password
    // ==============================================================
    $('#to-recover').on('click', () => {
      $('#loginform').slideUp();
      $('#recoverform').fadeIn();
    });
    $('#to-login').on('click', () => {
      $('#recoverform').slideUp();
      $('#loginform').fadeIn();
    });
  }
  onSubmit() {
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }
    this.authService.loginEmailUser(user.email, user.password).then((userData: any) => {
      //debugger
      this.userService.getUserInfo(userData.user.uid).subscribe((user: User) => {
        this.onLoginRedirect(user.role);
      })
    });
  }
  resolved(captchaResponse: string) {
    this.captchaResponse = captchaResponse;
    console.log(`Resolved response token: ${captchaResponse}`);
  }
  onLoginRedirect(role: string): void {
    this.lsStorage.set('role', role);
    this.router.navigate(['/dashboard']);
  }
}
