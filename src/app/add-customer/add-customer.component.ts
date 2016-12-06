import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {customer} from './add-customer.interface';

@Component({
  selector: 'addCustomer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  public myForm: FormGroup;


  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
  }

  save(model: customer){
    console.log(model);
  }

}
