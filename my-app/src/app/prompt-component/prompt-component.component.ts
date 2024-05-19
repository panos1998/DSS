import { Component, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PromptComponentServiceService } from '../../../services/prompt-component-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import * as tf from '@tensorflow/tfjs';


@Component({
  selector: 'app-prompt-component',
  standalone: true,
  imports: [SelectButtonModule, ButtonModule, CommonModule, HttpClientModule],
  providers:[HttpClient,HttpClientModule],
  templateUrl: './prompt-component.component.html',
  styleUrl: './prompt-component.component.css'
})
export class PromptComponentComponent implements OnInit {
  
  @Output() clickedOpenCamera: EventEmitter<any> = new EventEmitter();
  
  @ViewChild('fileInput') fileInput: ElementRef;
  uploadedImageUrl: string;
  
  constructor (
    private promptService: PromptComponentServiceService){}
  
   addedImage: boolean;
  value: any;
  currentOptions: SelectItem[] = [];
  
  ngOnInit(): void {
   this.uploadedImageUrl = '';
   this.addedImage = false;
  }
  async uploadImage() {
    try {
      if (this.addedImage) {
        console.log("I upload an image");
  
        // Create a FormData instance
        const formData = new FormData();
  
        // Append the file to the FormData instance
        const fileInput = this.fileInput.nativeElement;
        if (fileInput.files && fileInput.files.length > 0) {
          formData.append('file', fileInput.files[0]);
        }
  
        // Send the FormData instance in a POST request
        this.promptService.uploadImage(formData).subscribe(json=> {
          console.log(json);
          // const urlCreator = window.URL || window.webkitURL;
          // const imageUrl = urlCreator.createObjectURL(blob);
          // this.uploadedImageUrl = imageUrl;
          const payload: any = {
            type:"responseSent",
            data: json
          };
          console.log(payload);
          this.clickedOpenCamera.emit(payload);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  onOpenCamera() {
    // console.log(response);
    
    this.fileInput.nativeElement.click();
  }
  handle(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (this.isValidImage(file)) {
        this.readFile(file);
        const payload: any = {
          type:"ImageSent",
          data: ""
        };
        this.clickedOpenCamera.emit(payload);
      } else {
        console.error('Selected file is not an image.');
      }
    }
  }
  isValidImage(file: File): boolean {
    console.log(file.type);
    return file.type.startsWith('image/');
  }

  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = async (e: any) => {
      const imageSrc = e.target.result;
      const img = new Image();
      img.src = imageSrc;
      img.onload = async () => {
        this.addedImage = true;
      };
      
    };
   
    reader.readAsDataURL(file);
  }
}
