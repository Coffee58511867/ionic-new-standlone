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

  constructor(public bookingService: BookService) {}

  ngOnInit() {
    this.bookingService.getBookings().subscribe((res) => {
      this.bookings = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Book),
        };
      });
    });
  }

  deleteBooking(id: any) {
    console.log(id);
    if (window.confirm('Are you sure you want to delete this message ? ')) {
      this.bookingService.deleteBooking(id);
    }
  }

}
