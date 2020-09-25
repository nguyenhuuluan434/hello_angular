import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  return = '';
  subscription: Subscription;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(params => {
      this.return = params['return'];
      if (!this.userService.isGuest()) {
        this.go();
      }
    });
  }

  login() {
    if (!this.username || !this.password) {
      return;
    }
    this.userService.login(this.username);
    this.go();
  }

  private go() {
    this.router.navigateByUrl(this.return);
  }
}
