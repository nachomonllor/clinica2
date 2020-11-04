import { NgModule } from '@angular/core';
import { DomseguroPipe } from './domseguro.pipe';
import { TimeAgoPipe } from './time-ago.pipe';
import { SearchPipe } from './search.pipe';
import { NoimagePipe } from './noimage.pipe';
import { ImagePipe } from './image.pipe';
import { SpacePipe } from './space.pipe';
const pipes = [
  DomseguroPipe,
  SearchPipe,
  ImagePipe,
  NoimagePipe,
  TimeAgoPipe,
  SpacePipe
];
@NgModule({
  imports: [],
  declarations: pipes,
  exports: pipes
})
export class PipesModule { }
