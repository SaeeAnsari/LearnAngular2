import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

public obsForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.obsForm = this._fb.group({
      search: ['']
    });

    var search = this.obsForm.controls['search'];
    search.valueChanges
    .debounceTime(400)
    .map(str => (<string>str).replace(' ', '_'))
    .subscribe(x=> console.log(x));
  }

  ngOnInit() {
  }

}
