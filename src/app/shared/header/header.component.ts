import { Component, OnInit } from '@angular/core';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public loginIcon = faDoorOpen;
  constructor() {}

  ngOnInit(): void {}
}
