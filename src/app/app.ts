import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myangularapp');
  protected sidebarMobileOpen = signal(false);

  onSidebarToggle() {
    this.sidebarMobileOpen.update(v => !v);
  }

  onMobileClose() {
    this.sidebarMobileOpen.set(false);
  }
}
