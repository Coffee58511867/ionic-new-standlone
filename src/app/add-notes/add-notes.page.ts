import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.page.html',
  styleUrls: ['./add-notes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule , RouterModule]
})
export class AddNotesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
