
import { Component , ElementRef, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {User} from './user';

@Component({
  selector: 'my-app',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder) { 
    
  }

  ngOnInit() {

    this.myForm = this._fb.group({
      name: ['John', [<any>Validators.required, <any>Validators.minLength(5)]],
      address: this._fb.group({
        street: ['', <any>Validators.required],
        postcode: ['']
      })
    });
  }

  save(model: User, isValid: boolean){
    this.submitted = true;
    console.log(model, isValid);
  }
}
