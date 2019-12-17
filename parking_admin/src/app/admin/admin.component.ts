import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public user;
  constructor(private auth: AuthenticationService,private router: Router, 
    private route: ActivatedRoute) {
      this.user = auth.user;
  }

  ngOnInit() {
  }
  
  logout(){
      this.auth.logout();
      this.router.navigate(['login']);
  }
}
