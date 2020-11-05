import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import urljoin from 'url-join';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string;
  constructor(
  ) {
    // this.url = urljoin(environment.apiUrl, '/api/user');
  }
  newUser() {
    // return this.post(this.url, user)
    //   .pipe(
    //     map((response: any) => {
    //       return response.user;
    //     })
    //   )
    //   .pipe(
    //     catchError(err => {
    //       Swal.fire('Error', err, 'error');
    //       return throwError(err);
    //     })
    //   );
  }
  changeImage() {
    // return this._fileUploadService
    //   .fileUpload(file, 'users', id)
    //   .then((response: any) => {
    //     if (id === this._authService.user.id) {
    //       this._authService.user.img = response.user.img;
    //       Swal.fire('Imagen actualizada', this._authService.user.firstname, 'success');
    //       this._authService.saveStorage(id.toString(), this._authService.token, this._authService.user, this._authService.menu);
    //     }
    //     return true;
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }
  uploadImage() {
    // return this._fileUploadService
    //   .fileUpload(file, name, id)
    //   .then((response: any) => {
    //     this._authService.saveStorage(id.toString(), this._authService.token, this._authService.user, this._authService.menu);
    //     return true;
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }
}
