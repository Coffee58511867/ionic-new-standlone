import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule , ReactiveFormsModule, Validators} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {RouterModule} from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule]
})
export class LoginPage implements OnInit {

  Register! : FormGroup;

  constructor(public fireAuth : AngularFireAuth,
    public formBuilder:  FormBuilder,
    public router: Router,
    public authService: AuthService,
    ) { }

  ngOnInit() {
    this.Register = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  login(email: any, password: any){
   this.authService.SignIn(email,password)
   .then((res)=> {
    if(res.user){
      console.log(res.user);
      this.router.navigate(['/dashboard1']);
      console.log(res.user.email)
      const id = res.user.uid;
      localStorage.setItem('userID', id);

    }

   })
   .catch((err)=> {
    console.log(err.message);
    window.alert(err.message);
   })
  }
}
