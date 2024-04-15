import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountComponent } from './Count/Count.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StateManagement';
}
