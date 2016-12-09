import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {UserInterface} from './user';

@Component({
  selector: 'userViewEdit',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

public userForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {

    this.userForm = this._fb.group({
      name: ['Saeed', [Validators.required, Validators.minLength(5)]],
      email: ['saedansari@gmail.com', Validators.required]
    });
    
  }

  save(model: UserInterface)
  {
    console.log(model);
  }
}
