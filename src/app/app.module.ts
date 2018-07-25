import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { CuurencyComponent } from './cuurency/cuurency.component';
import { RateService } from './rate.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    CuurencyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
