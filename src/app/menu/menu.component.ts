import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pageNav=[{name:"home",path:"menu/home"},{name:"profile",path:"menu/profile"},{name:"detail",path:"menu/detail"}]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNav(item){
    this.router.navigateByUrl(item.path)
  }
}
