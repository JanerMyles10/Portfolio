import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-project',
  imports: [CommonModule,Header],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {

}
