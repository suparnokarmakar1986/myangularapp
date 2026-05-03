import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  sidebarToggle = output<void>();

  toggleSidebar() {
    this.sidebarToggle.emit();
  }
}
