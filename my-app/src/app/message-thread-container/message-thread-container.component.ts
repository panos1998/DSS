import { Component } from '@angular/core';
import { MessageComponentComponent } from '../message-component/message-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-thread-container',
  standalone: true,
  imports: [MessageComponentComponent, CommonModule],
  templateUrl: './message-thread-container.component.html',
  styleUrl: './message-thread-container.component.css'
})
export class MessageThreadContainerComponent {

}
