import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {ForumsService} from '../services/forums.service';
import {Forum} from '../services/data';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit, OnDestroy {
  forum: Forum;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private forumsService: ForumsService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.forum = this.forumsService.forum(params['forum_alias']);
      if (!this.forum) {
        this.router.navigate(['/not-found']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
