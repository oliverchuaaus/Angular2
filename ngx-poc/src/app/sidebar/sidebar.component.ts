import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menuitem.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() items: MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}
