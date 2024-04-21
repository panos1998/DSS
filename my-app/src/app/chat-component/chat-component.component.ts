import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PromptComponentComponent } from '../prompt-component/prompt-component.component'
import { MessageThreadContainerComponent } from '../message-thread-container/message-thread-container.component'


@Component({
  selector: 'app-chat-component',
  standalone: true,
  imports: [CardModule, PromptComponentComponent,MessageThreadContainerComponent],
  templateUrl: './chat-component.component.html',
  styleUrl: './chat-component.component.css'
})
export class ChatComponentComponent {

}
