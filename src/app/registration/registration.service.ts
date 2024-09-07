import { Injectable } from '@angular/core';
import { form_input_format } from './input_format';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { post_reply_format } from './post_reply_format';
import { catchError } from 'rxjs';
import { RegistrationComponent } from './registration.component';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService 
{
  userId="";
  is_data_sent_successfully:Boolean=false;
  isError:Boolean=false;
  constructor(private http:HttpClient) 
  { 

  }
  send_data_to_backend(x:form_input_format,user_type:string)
  {
    if(user_type=="Auctioneer")
    {
      const xx$=this.http.post<post_reply_format>
      ("http://127.0.0.1:8080/create_auctioneer",x).pipe(
        catchError((err)=>
        {
          console.log(err);
          this.is_data_sent_successfully=false;
          this.isError=true;
          return [];
        })
      )
      if(!this.isError)
      {
        this.is_data_sent_successfully=true;
        xx$.subscribe((data)=>
          {
            if(data.Message=="Success")
            {
              this.is_data_sent_successfully=true;
              this.userId=data.Id;
            }
          })
          return this.userId;
      }
      else
      {
        return "";
      }
    }
    else
    {
      const xx$=this.http.post<post_reply_format>
      ("http://127.0.0.1:8080/create_bidder",x).pipe(
        catchError((err)=>
        {
          console.log(err);
          this.is_data_sent_successfully=false;
          this.isError=true;
          return [];
        })
      )
      if(!this.isError)
        {
          this.is_data_sent_successfully=true;
          xx$.subscribe((data)=>
            {
              if(data.Message=="Success")
              {
                this.is_data_sent_successfully=true;
                this.userId=data.Id;
              }
            })
            return this.userId;
        }
        else
        {
          return "";
        }
    }
  }
}
