import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  collapsed = input(false);
  mobileOpen = input(false);
  mobileClose = output<void>();

  closeSidebar() {
    this.mobileClose.emit();
  }
}
