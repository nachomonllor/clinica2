import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-patient',
  templateUrl: './sidebar-patient.component.html',
  styles: [
  ]
})
export class SidebarPatientComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
  }
  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
