import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }


  Add(X:number, Y:number){
  return (X+Y)
}


}