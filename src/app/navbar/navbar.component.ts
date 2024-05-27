import { Component } from '@angular/core';
import { Channels } from '../data/channels';
import { Buttons } from '../data/youtube';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent {

  channels = Channels;
  buttons = Buttons
}