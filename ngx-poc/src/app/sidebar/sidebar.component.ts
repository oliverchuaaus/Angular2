import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menuitem.model';
import { BsDropdownConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [{provide: BsDropdownConfig, useValue: {autoClose: true}}]
})
export class SidebarComponent implements OnInit {
  @Input() items: MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}
