import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-obs',
  templateUrl: './create-obs.component.html',
  styleUrls: ['./create-obs.component.css']
})
export class CreateObsComponent implements OnInit {

  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        search: []
      }
    );

    var search = this.form.get('search');
    search.valueChanges.subscribe(x => console.log(x) );
  }

  ngOnInit() {

  }

}
