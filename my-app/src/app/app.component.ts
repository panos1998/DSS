import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChatComponentComponent } from './chat-component/chat-component.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  ChatComponentComponent,ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my chatbot app';
}
