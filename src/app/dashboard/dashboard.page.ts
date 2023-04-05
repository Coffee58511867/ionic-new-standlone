import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule} from 'ng2-search-filter'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,Ng2SearchPipeModule ]

})

export class DashboardPage implements OnInit {

  searchItem! : any;
  Items = [
    {itemName : 'Airtime', amount: 50},
    {itemName : 'LEC', amount: 150},
    {itemName : 'Alliance', amount: 50},
    {itemName : 'Vodacom', amount: 500},
    {itemName : 'Metro', amount: 200},
    {itemName : 'Airtime', amount: 10},
    {itemName : 'Airtime', amount: 50},
    {itemName : 'LEC', amount: 150},
    {itemName : 'Alliance', amount: 50},
    {itemName : 'Vodacom', amount: 500},
    {itemName : 'Metro', amount: 200},
    {itemName : 'Airtime', amount: 10},
    {itemName : 'Airtime', amount: 50},
    {itemName : 'LEC', amount: 150},
    {itemName : 'Alliance', amount: 50},
    {itemName : 'Vodacom', amount: 500},
    {itemName : 'Metro', amount: 200},
    {itemName : 'Airtime', amount: 10},
  ]
  constructor() { }

  ngOnInit() {
  }

}
