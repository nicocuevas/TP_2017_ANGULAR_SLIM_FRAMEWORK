import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../../service/user.service';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users;

  constructor(private userService: UserService, private router: Router, 
    private route: ActivatedRoute) {}
  
  ngOnInit() {
      this.users = this.userService.users;
      this.userService.getList();
  }

  edit(id){
    this.router.navigate(['edit/', id], { relativeTo: this.route });
  }

  add(){
    this.router.navigate(['add'], { relativeTo: this.route });
  }

}
