import { Component, OnInit, Input } from '@angular/core';
import { MessageComponentComponent } from '../message-component/message-component.component';
import { CommonModule } from '@angular/common';

interface Message {
  author: string;
  text: string;
}

@Component({
  selector: 'app-message-thread-container',
  standalone: true,
  imports: [MessageComponentComponent, CommonModule],
  templateUrl: './message-thread-container.component.html',
  styleUrls: ['./message-thread-container.component.css']
})
export class MessageThreadContainerComponent implements OnInit {
 @Input() messages: Message[] = [];
  ngOnInit(): void {
    
  }
}