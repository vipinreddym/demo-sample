import { Component, OnInit } from '@angular/core';
import { RateService }from '../rate.service';

@Component({
  selector: 'app-cuurency',
  templateUrl: './cuurency.component.html',
  styleUrls: ['./cuurency.component.css']
})
export class CuurencyComponent implements OnInit {
  public rupe : any;
  showdata:any;
  data ={}
  curr:any={
rates:{}

  }
  rates:any = [
    {id: 1, name: "AED"},
    {id: 2, name: "AFN"},
    {id: 3, name: "ALL"},
    {id: 4, name: "INR"},
    {id: 5, name: "AUD"}
  ];
   selectedValue = null;
  
   constructor(private rateservices: RateService) { }

  ngOnInit() {

    this.rateservices.getdata()
    .subscribe(
      (response)=>{
        console.log(response);
        this.curr=response;
        console.log(this.curr.rates.INR);
      }
    
    )

  }
exchange(curency1,country){
console.log(country);

for(let con in this.curr.rates){
if(country==con){
  this. showdata=curency1*this.curr.rates[con]
}

  console.log(con);
} 
// ;
  


}


}