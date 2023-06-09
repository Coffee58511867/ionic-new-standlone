import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import Book from '../Model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  currentUser! : any;

  constructor(private ngFirestore: AngularFirestore,
    private router : Router,) { }

    book(booking: Book){
      return this.ngFirestore.collection('NewBookings').add(booking);
    }
    getBookings(){
      return this.ngFirestore.collection('NewBookings').snapshotChanges();
    }
    getLesothoBookings(){
      return this.ngFirestore.collection('NewBookings').ref.where('country', '==', 'Lesotho');
    }
    getFaculty(){
      return this.ngFirestore.collection('NewBookings').ref.where('role', '==', 'Faculty');
    }
    getDoctors(){
      return this.ngFirestore.collection('NewBookings').ref.where('role', '==', 'Doctor');
    }

    getBooking(id: any){
      return this.ngFirestore.collection('NewBookings').doc(id).valueChanges()
    }
    updateBooking(id: string, booking: Book){
      this.ngFirestore.collection('NewBookings').doc(id).update(booking)
      .then(() => {
        this.router.navigate(['/dashboard']);

      }).catch(error => console.log(error));
    }
    adminUpdateBooking(id: string, booking: Book){
      this.ngFirestore.collection('NewBookings').doc(id).update(booking)
      .then(() => {
        this.router.navigate(['/view-bookings']);

      }).catch(error => console.log(error));
    }
    deleteBooking(id : string){
      this.ngFirestore.doc('NewBookings/' +id).delete();
    }
}
