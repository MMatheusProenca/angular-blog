import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
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
