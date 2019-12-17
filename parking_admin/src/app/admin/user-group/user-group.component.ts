import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserGroupService } from '../../service/user-group.service';
import { UserGroup } from '../../models/user-group';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-group',
  template: `
    <md-card>
    <h2>Users Group</h2>
    <ngx-datatable
        class="material"
        [rows]="groups | async"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'">
        <ngx-datatable-column name="Id" [width]="100"></ngx-datatable-column>
        <ngx-datatable-column name="Name" [width]="100"></ngx-datatable-column>
        <ngx-datatable-column name="Action">
          <ng-template let-row="row" ngx-datatable-cell-template>
            <button md-raised-button color="accent" (click)="edit(row['id'])"><i class="material-icons">mode_edit</i></button>
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
      <span class="app-action">
          <button md-fab (click)="add()"><md-icon>add circle</md-icon></button>
      </span>
    </md-card>
  `,
  styles: []
})
export class UserGroupComponent implements OnInit {
  
  public groups;

  constructor(private groupService: UserGroupService, private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.groups = this.groupService.groups;
      this.groupService.getList();
  }

  edit(id){
    this.router.navigate(['edit/', id], { relativeTo: this.route });
  }

  add(){
    this.router.navigate(['add'], { relativeTo: this.route });
  }

}
