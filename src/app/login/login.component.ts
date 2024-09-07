import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { LoginService } from './login.service';
import { RegistrationService } from '../registration/registration.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit
{
  user_type!: string;
  @ViewChild("warnd1",{static:true})abcd!:ElementRef;
  @ViewChild("warnd1l",{static:true})abcdl!:ElementRef;
  @ViewChild("secondd",{static:true})abcd1!:ElementRef;
  @ViewChild("seconddw",{static:true})abcd2!:ElementRef;
  @ViewChild("seconddwl",{static:true})abcd3!:ElementRef;
  @ViewChild("uinp",{static:true})username!:ElementRef;
  @ViewChild("upass",{static:true})password!:ElementRef;
  routes: any;
  
  constructor(private renderer:Renderer2,
    private loginService:LoginService,regService:RegistrationService,
  private router:Router)
  {

  }
  ngOnInit()
  {
   
  }
  set_user(user:string)
  {
    this.user_type=user
    this.renderer.setStyle(this.abcd.nativeElement,"visibility","hidden");
    this.renderer.setStyle(this.abcdl.nativeElement,"visibility","hidden");
  }
  set_action(action:string)
  {
    if (this.user_type==undefined)
    {
      this.renderer.setStyle(this.abcd.nativeElement,"visibility","visible");
      this.renderer.setStyle(this.abcdl.nativeElement,"visibility","visible");
      this.abcdl.nativeElement.innerHTML=" Warning! Please Select User Type";
    }
    else
    {
      if (action==="RU")
      {
        this.router.navigate([`registration/${this.user_type}`]);
      }
      else if(action==="SI")
      {
        this.renderer.setStyle(this.abcd1.nativeElement,"visibility","visible");
      }
    }
  }
  reset()
  {
    this.renderer.setStyle(this.abcd3.nativeElement,"visibility","hidden");
    this.renderer.setStyle(this.abcd2.nativeElement,"visibility","hidden");
    this.username.nativeElement.value="";
    this.password.nativeElement.value="";
  }
  submit()
  {
    const x=this.username.nativeElement.value;
    const y=this.password.nativeElement.value;
    const z=this.loginService.authenticate(x,y,this.user_type);
    if(z!="Success")
    {
      this.renderer.setStyle(this.abcd2.nativeElement,"visibility","visible");
      this.renderer.setStyle(this.abcd3.nativeElement,"visibility","visible");
      this.abcd3.nativeElement.innerHTML="Invalid Credentials";
    }
    
  }

}
