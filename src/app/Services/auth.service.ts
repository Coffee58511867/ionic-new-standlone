import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(

    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
  ) { }

    // Login in with email/password
    SignIn(email: string, password: string) {
      return this.ngFireAuth.signInWithEmailAndPassword(email, password);
    }
    // Register user with email/password
    RegisterUser(email: string, password: string) {
      return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
    }
    // Email verification when new user register
    SendVerificationMail() {
      return this.ngFireAuth.currentUser.then((user: any) => {
        return user.sendEmailVerification().then(() => {
          this.router.navigate(['home']);
        });
      });
    }
      // Recover password
  PasswordRecover(passwordResetEmail: string) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'Password reset email has been sent, please check your inbox.'
        );
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      this.router.navigate(['home']);
    });
  }
}
