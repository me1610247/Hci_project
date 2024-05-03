import { Component , OnInit } from '@angular/core';
import { IDEPARTMENT } from './department.interface';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  public departments:Array<IDEPARTMENT>=[{id:1,name:'car'},
  {id:2,name:'Mobile'},{id:3,name:'Tv'},
  {id:4,name:'Clothes'},{id:5,name:'Laptop'},{id:6,name:'Perfume'},
  {id:7,name:'Home'}];

  constructor(){}
  ngOnInit(): void {

  }
}
