import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule]
})
export class RegisterPage implements OnInit {

  Register! : FormGroup;

  constructor(public fireAuth : AngularFireAuth,
    public formBuilder:  FormBuilder,
    public router: Router
    ) { }

  ngOnInit() {
    this.Register = this.formBuilder.group({
      names : ['', Validators.required],
      location : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      phoneNumber : ['', [Validators.required, Validators.minLength(8)]],
      password : ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  register(email: any, password: any){
   this.fireAuth.createUserWithEmailAndPassword(email,password)
   .then((res)=> {
    console.log(res)
    this.router.navigate(['/login']);

   })
   .catch((err)=> {
    console.log(err);
    window.alert(err);
   })
  }

}
