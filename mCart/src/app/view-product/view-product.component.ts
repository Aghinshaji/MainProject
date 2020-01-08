import { Component, OnInit, inject, Inject } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
valfromsession;
dress;
brand;
prize;
products;
cart=[];
prd;
total=0
  constructor(private httpclient:HttpClient,@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }

  ngOnInit() {
    this.valfromsession=this.storage.get("user");
    this.products=[];
    this.httpclient.get("http://localhost:8000/data").subscribe(data=>{
      this.products=data;
    })
   
  }
  Addtocart(){
    this.storage.set("user",[this.dress,this.brand,this.prize])

  }
  



}
