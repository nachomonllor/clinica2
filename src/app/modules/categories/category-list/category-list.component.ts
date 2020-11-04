import { environment } from '@env';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fromEvent, merge, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';


import Swal from 'sweetalert2';
// import { CategoryDetailComponent } from '../category-detail/category-detail.component';

import { ActivatedRoute, Router } from '@angular/router';
// import { HttpService } from '../../../../services/http.service';
import { UserService } from '../../users/user.service';
// import { NotificationService } from '../../../../services/notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { routerTransition } from '@modules/route-animation';
import { SwalService } from '@core/services/swal.service';
import { CategoriesService } from '../categories.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  url: string;
  dataSource: MatTableDataSource<Category>;
  displayedColumns: string[] = [
    'name',
    'active',
    'actions',
  ];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('input', { static: true }) input: ElementRef;
  filter: string;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private swalService: SwalService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    debugger
    this.categoriesService.loadAllCategories().subscribe(categories => {
      this.dataSource = new MatTableDataSource<Category>(categories);
    });
    // this._httpService.get(this.url).subscribe(categories => {
    //   this.dataSource = categories;
    // });
  }
  onCreate() {
    // const dialogRef = this.dialog.open(
    //   CategoryDetailComponent,
    //   this.dialogConfig(),
    // );
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.ngOnInit();
    //   }
    // });
  }
  onEdit(row) {
    // const dialogRef = this.dialog.open(
    //   CategoryDetailComponent,
    //   this.dialogConfig(row),
    // );
    // dialogRef.afterClosed().subscribe((result) => {
    //   this.ngOnInit();
    // });
  }
  onDelete(id) {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Estás a punto de eliminar la categoría',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Eliminar!',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        // this._httpService.delete<Category>(`${this.url}/${id}`).subscribe(
        //   (resp: any) => {
        //     Swal.fire(
        //       'Atención',
        //       'La categoria ha sido Eliminada',
        //       'success',
        //     );
        //     this.ngOnInit();
        //   },
        //   (err) => {
        //     console.log(err);
        //     Swal.fire({
        //       title: 'Error Validación',
        //       text: err,
        //       icon: 'error',
        //       showConfirmButton: false,
        //       timer: 2000,
        //       animation: false,
        //     });
        //   },
        // );
      }
    });
  }
  onSearchClear() {
    if (this.input.nativeElement.value.length > 0) {
      this.input.nativeElement.value = '';
      this.ngOnInit();
    }
  }

  dialogConfig(data?) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '700px';
    dialogConfig.data = data || null;
    return dialogConfig;
  }

}
