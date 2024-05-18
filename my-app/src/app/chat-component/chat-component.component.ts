import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PromptComponentComponent } from '../prompt-component/prompt-component.component'
import { MessageThreadContainerComponent } from '../message-thread-container/message-thread-container.component'
import { SelectButtonModule } from 'primeng/selectbutton';
import { Message } from '../Interfaces/Message';
import { ButtonModule } from 'primeng/button';
import {WebcamModule} from 'ngx-webcam';

@Component({
  selector: 'app-chat-component',
  standalone: true,
  imports: [CardModule, PromptComponentComponent, MessageThreadContainerComponent, SelectButtonModule,
  ButtonModule, WebcamModule],
  templateUrl: './chat-component.component.html',
  styleUrl: './chat-component.component.css'
})
export class ChatComponentComponent implements OnInit {
  messages: Message[] = [];
  ngOnInit(): void {
    this.messages = [
      {
        author: "dss",
        text: "Hello, I am your DSS. Let's tackle the skin cancer detection!"
      },
      {
        author: "user",
        text: "Nice to meet you, DSS."
      }
    ];

  }
  receiveEvent(event: any) {
    console.log("Received the click event :)", event);
  }


}
