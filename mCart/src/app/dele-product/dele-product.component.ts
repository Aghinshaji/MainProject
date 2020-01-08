import { Component, OnInit, inject, Inject } from '@angular/core';
import {LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'

@Component({
  selector: 'app-dele-product',
  templateUrl: './dele-product.component.html',
  styleUrls: ['./dele-product.component.css']
})
export class DeleProductComponent implements OnInit {
uname;
valfromsession;
  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService) { }

  ngOnInit() {
 this.valfromsession=this.storage.get("user");
  }
set() {
this.storage.set("user",this.uname);
this.valfromsession
}
  
}
