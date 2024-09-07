import { Component, input, Input, OnInit} from '@angular/core';
import { form_input_format } from '../registration/input_format';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-prdf',
  standalone: true,
  imports: [],
  templateUrl: './prdf.component.html',
  styleUrl: './prdf.component.scss'
})
export class PrdfComponent implements OnInit
{
  constructor(private router:Router)
  {

  }
  ngOnInit()
  {
    console.log(this.user_id);
  }

  @Input() form_inp!:form_input_format;
  @Input() user_role!:string;
  @Input() user_id!:string;
  goinghome()
  {
    this.router.navigate(['']);
    console.log(this.user_id);
  }
}
