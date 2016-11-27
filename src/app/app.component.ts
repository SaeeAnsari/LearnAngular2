import { Component , ElementRef} from '@angular/core';
import { Observable} from 'rxjs';
declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   ngAfterViewInit() {
        var obj = $('#search');
        var keyups = Observable.fromEvent(obj, "keyup");
    
          keyups.subscribe(data=> console.log(data));
    }

  title = 'app works!';
}
