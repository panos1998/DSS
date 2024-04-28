import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule,  ReactiveFormsModule, FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-prompt-component',
  standalone: true,
  imports: [SelectButtonModule, ButtonModule, CommonModule],
  templateUrl: './prompt-component.component.html',
  styleUrl: './prompt-component.component.css'
})
export class PromptComponentComponent {
  currentOptions: SelectItem[];
  value: any;
    constructor () {
    this.currentOptions = [];
    // this.formGroup = new FormGroup({
    //   value: new FormControl("")
    // })
    this.value = null;
    this.currentOptions.push({label:'New York', value:'New Yorke'});
        this.currentOptions.push({label:'Rome', value:'Rome'});
        this.currentOptions.push({label:'London', value:'London'});
        this.currentOptions.push({label:'Istanbul', value:'Istanbul'});
  }

}
