import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  greeting: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser(1).subscribe((user) => {
      this.greeting = `Good ${this.greetingTime}, ${user.firstName}`;
    });
  }

  private get greetingTime() {
    return new Date().toLocaleTimeString().slice(-2) === 'PM'
      ? 'Evening'
      : 'Morning'; /** TODO: add a better parser for afternoon greeting as well */
  }
}
