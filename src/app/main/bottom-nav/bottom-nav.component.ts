import { Component } from '@angular/core';
import { MainService } from '../../_services/main/main.service';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss'],
})
export class BottomNavComponent {
  constructor(public mainService: MainService) {}
}
