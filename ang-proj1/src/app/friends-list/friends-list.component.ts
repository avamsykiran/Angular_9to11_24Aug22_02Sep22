import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FriendsService } from '../friends.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  friends:Friend[];
  friend:Friend;

  constructor(private fss: FriendsService) {
    this.friends=this.fss.getAll();
    this.friend={friendName:'',age:0};
  }

  ngOnInit(): void {
  }

  add(){
    this.fss.add(this.friend);
    this.friends=this.fss.getAll();
    this.friend={friendName:'',age:0};
  }
}
