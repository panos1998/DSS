import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.css']
})
export class MessageComponentComponent implements OnInit {
  @Input() subject: string = "";
  @Input() text: string = "";
  style: any = {};
  icon: string = "";

  // constructor() {
  //   this.setStyleAndIcon();
  // }
  ngOnInit() {
    this.setStyleAndIcon();
  }
  setStyleAndIcon() {
    this.style = this.setStyle(this.subject);
    this.icon = this.setIcon(this.subject);
  }

  setStyle(subject: string) {
    if (subject === "dss") {
      return {
        'width': '85%',
        'border-radius': '8px 15px 8px 15px',
        'background': 'rgba(220, 252, 231, 0.39)',
        'margin-bottom': '3px',

        'backdrop-filter': 'blur(20px)',
        '-webkit-backdrop-filter': 'blur(20px)',
        'padding': '0.25rem',
      };
    } else {
      return {
        'width': '85%',
        'border-radius': '15px 8px 15px 8px',
        'background-color': 'var(--green-100)',
        'margin-bottom': '3px',
        'margin-top': '1px',
        'padding':'0.25rem'

      };
    }
  }

  setIcon(subject: string) {
    return subject === "dss" ? 'fa-solid fa-hospital' : 'fa-solid fa-user-doctor';
  }
}
