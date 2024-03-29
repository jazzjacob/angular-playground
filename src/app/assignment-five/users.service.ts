import { Injectable, Output, EventEmitter } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.onAction();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.onAction();
  }

  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private counterService: CounterService) { }

  test() {
    //console.log('UsersService works!');
  }
}
