import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {



  //from parent
  @Input() bg:string=''
  @Input() icon:string=''
  @Input() content:string=''
  @Input() total:string=''


}
