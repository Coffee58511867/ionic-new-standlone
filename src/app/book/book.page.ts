import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookService } from '../Services/book.service';
import { error } from 'console';


@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule
  ],
  providers: [BookService]
})
export class BookPage implements OnInit {
  Submit!: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
     private bookingServices: BookService
  ) {}

  ngOnInit() {
    this.Submit = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      country: ['', Validators.required],
      role: 'Doctor',
      phoneNumbers: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
    });
  }

  submit() {
    console.log(this.Submit.value);
    this.bookingServices.book(this.Submit.value).then((res) => {
     console.log("DONE")
    }).catch((err) => {
      console.log(err)
    })
  }
}
