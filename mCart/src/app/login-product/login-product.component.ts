import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-login-product',
  templateUrl: './login-product.component.html',
  styleUrls: ['./login-product.component.css']
})
export class LoginProductComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Login(){
    this.router.navigateByUrl("/home")

  }
}
