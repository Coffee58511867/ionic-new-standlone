import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookService } from '../Services/book.service';
import Book from '../Model/book';


@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.page.html',
  styleUrls: ['./view-bookings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViewBookingsPage implements OnInit {
  bookings!: Book[];
  booking2! : Book[];
  name3 : any;

  constructor(public bookingService: BookService,

    ) {}

  ngOnInit() {
    this.bookingService.getBookings().subscribe((res) => {
      this.bookings = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Book),
        };
      });
    });

    this.bookingService.getTodayBookings().onSnapshot((data) => {
      data.forEach((data) => {
        console.log(data.data())
        this.name3 = data.data();
        const studentName = this.name3.name;
        console.log(studentName);
      })
    })

    this.bookingService.getTodayBookings().onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map(d => d.data());
       console.log(data);
    })

  }

  deleteBooking(id: any) {
    console.log(id);
    if (window.confirm('Are you sure you want to delete this message ? ')) {
      this.bookingService.deleteBooking(id);
    }
  }

}
