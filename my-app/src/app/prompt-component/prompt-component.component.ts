import { Component, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import * as tf from '@tensorflow/tfjs';


@Component({
  selector: 'app-prompt-component',
  standalone: true,
  imports: [SelectButtonModule, ButtonModule, CommonModule],
  templateUrl: './prompt-component.component.html',
  styleUrl: './prompt-component.component.css'
})
export class PromptComponentComponent implements OnInit {
  @Output() clickedOpenCamera: EventEmitter<any> = new EventEmitter();
  @ViewChild('fileInput') fileInput: ElementRef;
  model: tf.LayersModel;
  value: any;
  currentOptions: SelectItem[] = [];
  ngOnInit(): void {
   this.loadModel()
  }
  async loadModel() {
    try{
     this.model = await tf.loadLayersModel('https://github.com/panos1998/dss/blob/chat2/my-app/src/assets/nn_models/model.json');
    }catch(error){console.log(error);}
  }
  onOpenCamera() {
    // console.log("camera event emmited");
    this.clickedOpenCamera.emit("Sent payload");
    this.fileInput.nativeElement.click();
  }
  handle(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (this.isValidImage(file)) {
        this.readFile(file);
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
        const tensor = this.processImage(img);
        const prediction = await this.model.predict(tensor) as tf.Tensor;
        prediction.print(); // Handle the prediction result
      };
    };
    reader.readAsDataURL(file);
  }
  processImage(image: HTMLImageElement): tf.Tensor {
    const tensor = tf.browser.fromPixels(image)
      .resizeNearestNeighbor([28, 28]) // Resize to 28x28 pixels
      .toFloat()
      .div(tf.scalar(255.0)) // Normalize the pixel values
      .flatten() // Flatten to 1D vector [28 * 28 * 3]
      .expandDims(0); // Add a batch dimension [1, 28 * 28 * 3]
    return tensor;
  }
}
