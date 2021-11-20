import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,NavigationEnd}from '@angular/router';
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
id:string | null | undefined;
sub:any;
  constructor(private _activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.sub=this._activatedRoute.paramMap.subscribe(param=>{
      this.id=param.get('id');
    })
  }

}
