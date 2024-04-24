import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PromptComponentComponent } from '../prompt-component/prompt-component.component'
import { MessageThreadContainerComponent } from '../message-thread-container/message-thread-container.component'
import { SelectButtonModule } from 'primeng/selectbutton';
import { SelectItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-chat-component',
  standalone: true,
  imports: [CardModule, PromptComponentComponent,MessageThreadContainerComponent, SelectButtonModule, ButtonModule],
  templateUrl: './chat-component.component.html',
  styleUrl: './chat-component.component.css'
})
export class ChatComponentComponent {
  currentOptions: SelectItem[];
  constructor(){
    this.currentOptions = [];
    this.currentOptions.push({label:'New York', value:'New Yorke'});
    this.currentOptions.push({label:'Rome', value:'Rome'});
    this.currentOptions.push({label:'London', value:'London'});
    this.currentOptions.push({label:'Istanbul', value:'Istanbul'});
  }
 

}
