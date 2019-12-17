import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserAuditService } from '../../service/user-audit.service';
import { UserAudit } from '../../models/user-audit';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users-audit',
  templateUrl: './users-audit.component.html',
  styleUrls: ['./users-audit.component.css']
})
export class UsersAuditComponent implements OnInit {

  public userAudits;
  public pagination;
  public page : number = 1;
  public audit : any = null;

  constructor(private userAuditService: UserAuditService, private router: Router, 
    private route: ActivatedRoute) {

    }

  ngOnInit() {
      this.userAudits = this.userAuditService.userAudits;
      this.userAuditService.getList({
          offset:0,
          limit:8,
          orderby:{field: "createdAt", type:"desc"},
          where:null
      });
      this.userAuditService.pagination.subscribe(value => this.pagination = value);
  }

  showDetail(audit){
    audit.meta = JSON.parse(audit.meta);
    this.audit = audit;
  }

  back(){
    this.audit = null;
  }

  add(){
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  setPage(page){
    this.userAuditService.getList({
        offset:page-1,
        limit:this.pagination.limit,
        orderby:{field: "createdAt", type:"desc"},
        where:null
    });
  }

}
