import { ElementRef, Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService 
{
  constructor()
   { }
   authenticate(username:string,password:string,user_type:string):string
   {
      if (username==="admin" && password==="admin")
      {
        return "Success";
      }
      else{
        return "Failure";
      }
   }
}
