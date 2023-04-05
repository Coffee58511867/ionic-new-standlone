import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class BookPage implements OnInit {

  Submit!: FormGroup;
  constructor(public formBuilder: FormBuilder,
    public bookingServices: BookService,
    ) { }

  ngOnInit() {
    this.Submit = this.formBuilder.group({
      name : ['', Validators.required],
      date : ['', Validators.required],
      phoneNumbers : ['', [Validators.required, Validators.pattern("[0-9]{8}")]]
    })
  }

  submit(){
console.log(this.Submit.value)
  }

}
