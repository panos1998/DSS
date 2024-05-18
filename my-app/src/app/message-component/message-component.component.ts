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
        'min-width': '85%',
        'width': '0',
        'border-radius': '25px 5px 25px 5px',
        'background': 'rgba(220, 252, 231, 0.39)',
        'margin-bottom': '3px',
        'margin-top': '1px',
        'margin-left': '18%',
        'backdrop-filter': 'blur(20px)',
        '-webkit-backdrop-filter': 'blur(20px)'
      };
    } else {
      return {
        'min-width': '85%',
        'width': '0',
        'border-radius': '25px 5px 25px 5px',
        'background-color': 'var(--green-100)',
        'margin-bottom': '3px',
        'margin-top': '1px',
        'margin-right': '18%'
      };
    }
  }

  setIcon(subject: string) {
    return subject === "dss" ? 'fa-solid fa-hospital' : 'fa-solid fa-user-doctor';
  }
}
