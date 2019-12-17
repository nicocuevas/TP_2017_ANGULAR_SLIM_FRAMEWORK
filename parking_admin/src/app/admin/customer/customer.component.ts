import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { VehicleService } from '../../service/vehicle.service';
import { Vehicle } from '../../models/vehicle';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer',
  template: `
  <div class="card">
  <h4 class="card-header">Customers</h4>
  <div class="card-body">
    <ngx-datatable
        class="material"
        [columnMode]="'flex'"
        [rows]=" vehicles | async "
        [headerHeight]="40"
        [rowHeight]="'auto'">
        <ngx-datatable-column name="id" [flexGrow]="1"></ngx-datatable-column>
        <ngx-datatable-column name="customer" [flexGrow]="1">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value.firstName}} {{value.lastName}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="plate" [flexGrow]="1"></ngx-datatable-column>
        <ngx-datatable-column name="brand" [flexGrow]="1">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value.name}}
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="vehicleType" [flexGrow]="1">
          <ng-template let-value="value" ngx-datatable-cell-template>
            {{value.name}}
          </ng-template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Action" [flexGrow]="1">
          <ng-template let-row="row" ngx-datatable-cell-template>
            <button md-raised-button color="accent" (click)="edit(row['id'])"><i class="material-icons">mode_edit</i></button>
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
      <ngb-pagination 
        class=""
        [collectionSize]="pagination.total_items" 
        [(page)]="page" 
        [pageSize]="pagination.limit"
        [rotate]="true" 
        [ellipses]="false" 
        [boundaryLinks]="true"
        (pageChange)="setPage(page)">
      </ngb-pagination>
       <span class="app-action">
          <button md-fab (click)="add()"><md-icon>add circle</md-icon></button>
        </span>
      </div>
</div>
  `,
  styles: []
})
export class CustomerComponent implements OnInit {

  public vehicles;
  public pagination;
  public page : number = 1;

  constructor(private vehicleService: VehicleService, private router: Router, 
    private route: ActivatedRoute) {

    }

  ngOnInit() {
      this.vehicles = this.vehicleService.vehicles;
      this.vehicleService.getList({
        offset:0,
        limit:8,
        orderby:{field: "createdAt", type:"desc"},
        where:null
      });
      this.vehicleService.pagination.subscribe(value => this.pagination = value);
  }

  edit(id){
    this.router.navigate(['edit/', id], { relativeTo: this.route });
  }

  add(){
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  
  setPage(page){
    this.vehicleService.getList({
      offset:page-1,
      limit:this.pagination.limit,
      orderby:null,
      where:null
    });
  }

}
