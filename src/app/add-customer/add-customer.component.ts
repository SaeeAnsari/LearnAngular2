import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {Customer} from './customer.interface';

@Component({
  selector: 'addCustomer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  public myForm: FormGroup;


  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      addresses: this._fb.array([
        this.initAddress(),
      ])
    });
  }

  initAddress(){
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  addAddress(){
    const control = <FormArray>this.myForm.controls['address'];
    control.push(this.initAddress());
  }

  removeAddress(i: number){
    const control = <FormArray>this.myForm.controls['address'];
    control.removeAt(i);
  }

  save(model: Customer){
    console.log(model);    
  }
}
