import { Component } from '@angular/core';
import { Header } from "../header/header";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
