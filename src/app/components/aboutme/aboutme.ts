import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutme',
  imports: [RouterModule,Header,CommonModule],
  templateUrl: './aboutme.html',
  styleUrl: './aboutme.css'
})
export class Aboutme {
  showHobbies = false;
}
