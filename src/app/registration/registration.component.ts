import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LogoComponent } from "../logo/logo.component";
import { RegFormComponent } from '../reg-form/reg-form.component';
import { ActivatedRoute } from '@angular/router';
import { form_input_format } from './input_format';
import { RegistrationService } from './registration.service';
import { register } from 'module';
import { PrdfComponent } from '../prdf/prdf.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [HeaderComponent, LogoComponent,RegFormComponent,PrdfComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit
{
  userid!:string;
  user_type!:string;
  is_successfully_submitted:Boolean=false;
  formatted_data!:form_input_format;
  constructor(private route:ActivatedRoute,private rs:RegistrationService)
  {

  }
  ngOnInit()
  {
   const x=this.route.snapshot.paramMap.get("user_type");
   if (x=="AU")
   {
    this.user_type="Auctioneer"
   }
   else{
    this.user_type="Bidder"
   }
  }
  jsonreceived(event:string)
  {
    this.formatted_data=Object.assign(new form_input_format,JSON.parse(event));
    this.userid=this.rs.send_data_to_backend(this.formatted_data,this.user_type);
    if(this.rs.is_data_sent_successfully)
    {
      this.is_successfully_submitted=true;
    }
    else
    {
      this.is_successfully_submitted=false;
    }
  }
}
