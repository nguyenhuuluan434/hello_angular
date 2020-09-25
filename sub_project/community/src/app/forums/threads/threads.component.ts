import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ForumsService} from '../services/forums.service';
import {Thread} from '../services/data';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit, OnDestroy {
  threads: Thread[];
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private forumsService: ForumsService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.threads = this.forumsService.forum(params['forum_alias']).threads;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
