import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashbourd';
  sidebar:boolean=true

  //creating toggle in parent
  toggling(){
    this.sidebar=!this.sidebar
  }
}
