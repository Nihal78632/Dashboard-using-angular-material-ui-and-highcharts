import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() toggle = new EventEmitter()





  //function to toggle
  togglesidebar(){
    //calling emit
    this.toggle.emit()

    //for resizing of graph
   setTimeout(()=>{ window.dispatchEvent(
      new Event('resize')
    )
  },100)


  }

}
