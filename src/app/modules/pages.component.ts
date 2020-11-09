import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '@core/services/local-storage.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  role: string;
  constructor(
    private router: Router,
    private lsService: LocalStorageService
  ) {
    this.role = lsService.get('role');
  }

  ngOnInit(): void {
  }

}
