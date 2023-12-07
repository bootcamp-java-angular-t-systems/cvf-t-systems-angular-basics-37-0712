import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {
  title="UD37";
  display: string = '';
  operationComponents: string[] = [];

  calculateResult(): void {
    this.operationComponents.push(this.display);
    var finalOperation = this.operationComponents.join('');
    let resultString = eval(finalOperation).toString();
    let truncatedResult = parseFloat(resultString).toFixed(3);
    this.display = truncatedResult;
    this.operationComponents = [];
  }

  printNumber(number: string): void {
    this.display += number;
  }
  
  deleteOne(): void {
    this.display = this.display.slice(0, -1);
  }

  deleteAll(): void {
    this.display = "";
    this.operationComponents = [];
  }

  addOperand(operand: string): void {
    this.operationComponents.push(this.display);
    this.operationComponents.push(operand);
    this.display = "";
  }
}