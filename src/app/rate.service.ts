import { Injectable } from '@angular/core';

import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(
    private http : HttpClient
  ) { }
  getdata(){
    return this.http.get("http://data.fixer.io/api/latest?access_key=1e1c03c8640f897e3728e6a3245918a3")
  }
}
