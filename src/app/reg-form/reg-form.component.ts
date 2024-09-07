import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule,FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-reg-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './reg-form.component.html',
  styleUrl: './reg-form.component.scss'
})
export class RegFormComponent 
{
  countries=[{id:1,label:"USA"},{id:2,label:"INDIA"},{id:2,label:"GERMANY"},{id:2,label:"FINLAND"}];
  states=[{id:1,label:"KARNATAKA"},{id:2,label:"TAMILNADU"},{id:2,label:"KERALA"},{id:2,label:"ANDRAPRADESH"},
    {id:1,label:"DENVER"},{id:2,label:"WASHINGTON"},{id:2,label:"COLORADO"},{id:2,label:"CALIFORNIA"}
  ]
  city=[{id:1,label:"BANGALORE"},{id:2,label:"CHENNAI"},{id:2,label:"TRICHI"},{id:2,label:"HYDERABAD"},
    {id:1,label:"SALT LAKE CITY"},{id:2,label:"NEWYORK"},{id:2,label:"NEW JERSEY"},{id:2,label:"CALIFORNIA"}
  ]
  @Output() newItemEvent = new EventEmitter<string>();
  regform=new FormGroup({
  firstName:new FormControl("",Validators.required),
  lastName:new FormControl("",Validators.required),
  email:new FormControl("",[Validators.email,Validators.required]),
  phone:new FormControl("",[Validators.minLength(10),Validators.maxLength(10),Validators.required]),
  city:new FormControl("",Validators.required),
  state:new FormControl("",Validators.required),
  country:new FormControl(this.countries[1],Validators.required),
  code:new FormControl("",[Validators.minLength(6),Validators.maxLength(6),Validators.required]),
  })
  
  constructor()
  {

  }
  onSubmit()
  {
    const resource1 = JSON.stringify(this.regform.value);
    this.newItemEvent.emit(resource1);
  }
  
}
