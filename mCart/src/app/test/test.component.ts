import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
dress;
brand;
prize;
product;
showedit=false
  constructor(private http:HttpClient) { }

  ngOnInit() {
   
 } 
 connect(){
   var url="http://localhost:8000/data";
   this.http.get(url).subscribe(data=>{
     console.log(data);
     this.product=data;
   })
  }
delete(name,i){
  var data={pName:name}
  var url="http://localhost:8000/delete"
this.http.post(url,data).subscribe(res=>{
  console.log(res)
})

this.product.splice(i,1);
}
Edit(name,cmp,price){
  this.showedit=true;
  // this.Pname=name;
  // this.newc=cmp;
  // this.newp=price

}
update(){
//   this.showedit=false;
//   // this.router.navigate
// var url="http://localhost:8000/update"
// var data={Name:this.Pname,newComp:this.newc,newPrize:this.newp}
// this.http.post(url,data).subscribe(res=>{
//   console.log(res)
// })
}


}

// Pname;
// newc;
// newp;
// product;
// showedit=false
//   constructor(private http:HttpClient) { }

//   ngOnInit() {
   
//  } 
//  connect(){
//    var url="http://localhost:8000/data";
//    this.http.get(url).subscribe(data=>{
//      console.log(data);
//      this.product=data;
//    })
//   }
// delete(name,i){
//   var data={pName:name}
//   var url="http://localhost:8000/delete"
// this.http.post(url,data).subscribe(res=>{
//   console.log(res)
// })

// this.product.splice(i,1);
// }
// Edit(name,cmp,price){
//   this.showedit=true;
//   this.Pname=name;
//   this.newc=cmp;
//   this.newp=price

// }
// update(){
//   this.showedit=false;
//   // this.router.navigate
// var url="http://localhost:8000/update"
// var data={Name:this.Pname,newComp:this.newc,newPrize:this.newp}
// this.http.post(url,data).subscribe(res=>{
//   console.log(res)
// })
// }


// }


