import { Component, OnInit } from '@angular/core';
import { RateService } from '../rate.service';

@Component({
  selector: 'app-cuurency',
  templateUrl: './cuurency.component.html',
  styleUrls: ['./cuurency.component.css']
})
export class CuurencyComponent implements OnInit {
  
  public convertedchoice: any;
  public ratekeys: any;
  public rateslist: any;
  public userchoice: any;
  public convertCurrency: any;
  public finalresult: any;
  public selectedValue: any;
  public selectedValue1: any;
  data = {
    currency : ''
  }
  currencyrates: any = {
    rates: {}
  }


  constructor(private rateservices: RateService) { }

  ngOnInit() {

    this.rateservices.getdata()
      .subscribe(
        (response) => {

          this.currencyrates = response;
          this.rateslist = this.currencyrates.rates;
          this.ratekeys = Object.keys(this.rateslist);
          }
        )
      }



  exchange(userinput, country, resultent) {
 console.log(userinput,country,resultent);

    // console.log(this.currencyrates.rates[country]);
    // console.log(this.currencyrates.rates[resultent]);

    this.userchoice = this.currencyrates.rates[country];
    this.convertedchoice = this.currencyrates.rates[resultent];
    if (userinput === undefined || this.userchoice === undefined || this.convertedchoice === undefined) {
      alert("please fill data")
    }
    else {
      this.convertCurrency = (this.convertedchoice * userinput) / this.userchoice
      console.log(this.convertCurrency);

    }
    
    
    
  }

  reset(){
  this.data.currency = '',
  this.selectedValue = '',
  this.selectedValue1 = '',
  this.convertCurrency = '';
}
  
}






