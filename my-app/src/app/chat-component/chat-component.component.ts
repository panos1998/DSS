import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PromptComponentComponent } from '../prompt-component/prompt-component.component'
import { MessageThreadContainerComponent } from '../message-thread-container/message-thread-container.component'
import { SelectButtonModule } from 'primeng/selectbutton';
import { Message } from '../Interfaces/Message';
import { ButtonModule } from 'primeng/button';
import {WebcamModule} from 'ngx-webcam';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-chat-component',
  standalone: true,
  imports: [CardModule, PromptComponentComponent, MessageThreadContainerComponent, SelectButtonModule,
  ButtonModule, WebcamModule],
  templateUrl: './chat-component.component.html',
  styleUrl: './chat-component.component.css'
})

export class ChatComponentComponent implements OnInit {
  uploadedImageUrl: string;
  messages: Message[] = [];
  constructor(
    private renderer: Renderer2, private el: ElementRef
  ){

  }
  ngOnInit(): void {
    this.uploadedImageUrl = '';
    this.messages = [
      {
        author: "dss",
        text: "Hello   👋   👋   👋   👋, I am your DSS. Let's tackle the skin cancer detection!"
      },
      // {
      //   author: "user",
      //   text: "Nice to meet you, DSS."
      // }
    ];

  }
  receiveEvent(event: any) {
    console.log("Received the click event :)", event);
    if(event.type ==="ImageSent"){
      // this.uploadedImageUrl = '';
      // this.uploadedImageUrl = event;
      // const link = this.renderer.createElement('a');
      // this.renderer.setAttribute(link, 'href', event);
      // this.renderer.setAttribute(link, 'download', 'image.jpg'); // set the download attribute
      // this.renderer.appendChild(this.el.nativeElement, link);
      // link.click(); // simulate a click on the link
      // this.renderer.removeChild(this.el.nativeElement, link);
      this.messages.push({
        author:"user",text:"Image submitted successfully"
      }); // remove the link after the download s
      setTimeout(()=>{
        this.messages.push({
          author:"dss",text:"Awaiting image processing and evaluation..."
        }) // remove the link after the download s
      },1500);
      

  } else if(event.type = "responseSent"){
    let result = "Your probability for each disease are: ";
    Object.keys(event.data).forEach((key: any) =>{
      result = result + "  "+key+":"+event.data[key];
    })
    this.messages.push({
      author:"dss",
      text: result
    })
   console.log(event.data, "from receiver");
  }

  }
}
