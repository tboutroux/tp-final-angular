import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormatPipe } from '../../pipes/format-pipe.pipe';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormatPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'tp01_ANGULAR_ePsi';
}
