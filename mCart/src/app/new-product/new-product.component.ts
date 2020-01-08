import { Component, OnInit } from '@angular/core';
// import {SampleService} from '../sample.service'; //yesterday 4th dec
import {HttpClient} from '@angular/common/http' //import


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
msg;
message;
dress;
brand;
prize:Number = 0;
  // constructor(private ss:SampleService) { }
  constructor(private http:HttpClient) { }

  ngOnInit() {
    // this.msg=this.ss.showmsg();
  }
    AddProduct(){ 
      var url="http://localhost:8000/insert";
      var data={dress:this.dress, brand:this.brand,prize:this.prize};
      this.http.post(url, data).subscribe(data=>{
        console.log(data);
        this.message = data;
      })

    }
    
    }
    
    



