import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  id:string = ""
  @Input()
  photoCover:string = ""
  @Input()
  title:string = ""
  @Input()
  category:string = ""
  @Input()
  date:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
