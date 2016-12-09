import { Component, OnInit } from '@angular/core';
import {PostService} from './post.service';
import {HttpModule} from '@angular/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [PostService,HttpModule ]
})
export class ServicesComponent implements OnInit {

  constructor(private _postService: PostService) { 
    this._postService.getPosts()
    .subscribe(posts=> console.log(posts));
  }

  ngOnInit() {
  }

}
