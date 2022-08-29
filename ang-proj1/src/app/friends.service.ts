import { Injectable } from '@angular/core';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  private friends:Friend[];

  constructor() {
    this.friends=[];
  }

  getAll():Friend[]{
    return [...this.friends];
  }

  add(friend:Friend):void{
    this.friends.push(friend);
  }
}
