import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { User } from '../../contract';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser$: Observable<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(null);
    this.currentUser$ = this.currentUserSubject
      .asObservable()
      .pipe(distinctUntilChanged());
  }

  setCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }
}
