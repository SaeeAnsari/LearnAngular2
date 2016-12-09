import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class PostService {

    private _url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private _http: Http) { }

    getPosts() {

        return this._http.get(this._url)
        .map(res => res.json());
    }

    createPost(post) {
        this._http.post(this._url, JSON.stringify(post))
        .map(res=> res.json());
    }
}