import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormatTitlePipe } from './pipes/format-title.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, FormatTitlePipe, HeaderComponent, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
