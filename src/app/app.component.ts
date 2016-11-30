import { Component , ElementRef} from '@angular/core';
import { Observable} from 'rxjs';


declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//test
   ngAfterViewInit() {
        var obj = $('#search');
        var keyups = Observable.fromEvent(obj, "keyup")
        .map(e=> e.target.value)
        .filter(text=> text.length >= 3)
        .debounceTime(400)
        .distinctUntilChanged()
        .flatMap(searchTerm => {
          var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
          var promise = $.getJSON(url);
          return Observable.fromPromise(promise);          
        });

    
          let subscription = keyups.subscribe(data=> console.log(data));
          
    }

  title = 'app works!';
}
