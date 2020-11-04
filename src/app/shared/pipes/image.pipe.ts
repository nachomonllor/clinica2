import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env';
import urljoin from 'url-join';
@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  imgUrl: string;
  transform(img: string, tipo: string = 'user'): any {
    this.imgUrl = urljoin('', '/img');
    if (!img) {
      return this.imgUrl + '/user/xxx';
    }
    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (tipo) {
      case 'user':
        this.imgUrl += '/users/' + img;
        break;
      case 'medico':
        this.imgUrl += '/medicos/' + img;
        break;
      case 'hospital':
        this.imgUrl += '/hospitales/' + img;
        break;
      default:
        console.log('tipo de imagen no existe, usuario, medico, hospital');
        this.imgUrl += '/user/xxx';
    }
    return this.imgUrl;
  }
}
