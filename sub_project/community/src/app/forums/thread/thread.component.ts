import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ForumsService} from '../services/forums.service';
import {Thread} from '../services/data';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit, OnDestroy {
  thread: Thread;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private forumsService: ForumsService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      /*get param of parent*/
      /*Uses the snapshot to access the parent parameters*/
      /*this route we have access to the parent route information*/
      /*because the currently active route information doesn’t contain all the parameters we need*/
      /*the snapshot property to dig into the parent route*/
      const forumAlias = this.route.snapshot.parent.params['forum_alias'];
      /*Loads the specific thread from the service*/
      this.thread = this.forumsService.thread(forumAlias, params['thread_alias']);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
