import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {StorageServiceModule} from 'angular-webstorage-service'
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import{SignupComponent} from './signup/signup.component'
import { NewProductComponent } from './new-product/new-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import {HomeProductComponent} from './home-product/home-product.component';
import {LoginProductComponent} from './login-product/login-product.component';
import {SampleService} from './sample.service';
import {CalcService} from './calc.service';
import { TestComponent } from './test/test.component';
import { FooterComponent } from './footer/footer.component';
import { MobileComponent } from './mobile/mobile.component';



const routes:Routes=[
                 
            {path:"", component:LoginProductComponent},
            {path:"signup", component:SignupComponent},
           {path:'home',component:HomeProductComponent,
children:[
           {path:"new", component:NewProductComponent},
           {path:"view", component:ViewProductComponent},
            {path:"dele", component:TestComponent},
            {path:"mobi", component:MobileComponent}

]},


                  




                   
                  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeProductComponent,
    LoginProductComponent,
    SignupComponent,
    NewProductComponent,
    ViewProductComponent,
    TestComponent,
    SignupComponent,
    FooterComponent,
    MobileComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule, StorageServiceModule

  ],
  providers: [SampleService, CalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
