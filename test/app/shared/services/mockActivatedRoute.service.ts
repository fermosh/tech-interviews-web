import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subscription } from 'rxjs/Subscription';

export class MockParams {
  subscription: Subscription;
  error;

  constructor(private _parameters?: {[key: string]: any}) {
    this.subscription = new Subscription();
    spyOn(this.subscription, 'unsubscribe');
  }

  get params(): MockParams {
    return this;
  }

  subscribe(next: Function, error: Function): Subscription {
    if (this._parameters && !this.error) {
      next(this._parameters);
    }
    if (this.error) {
      error(this.error);
    }
    return this.subscription;
  }
}

export class MockActivatedRoute {
  constructor(public params: MockParams) {}
}
