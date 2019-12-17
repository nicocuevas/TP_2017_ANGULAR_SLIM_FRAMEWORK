import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CompleterService, CompleterData } from 'ng2-completer';

import { Vehicle } from '../../models/vehicle';
import { VehicleType } from '../../models/vehicle-type';
import { Customer } from '../../models/customer';
import { Brand } from '../../models/brand';

import { CustomerService } from '../../service/customer.service';
import { VehicleService } from '../../service/vehicle.service';
import { VehicleTypeService } from '../../service/vehicle-type.service';
import { BrandService } from '../../service/brand.service';

@Component({
  selector: 'app-customer-edit',
  template: `
    <div class="card">
      <h4 class="card-header">Add Customer</h4>
      <div class="card-body">
      <div>
      <span class="app-toolbar-filler"></span>
      </div>
        <md-spinner *ngIf="!showForm" class="app-spinner"></md-spinner>
        <form *ngIf="showForm" [formGroup]="formView" >
          <!-- form inputs -->
          <div class="row">
           <div class="col-md-4">
              <h3>Owner Data</h3>
              <span class="app-toolbar-filler"></span>
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" class="form-control"
                       formControlName="firstName" >
                 <div *ngIf="formErrors.firstName" class="alert alert-danger">
                  {{ formErrors.firstName }}
                  </div>
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" class="form-control"
                       formControlName="lastName" >
                 <div *ngIf="formErrors.lastName" class="alert alert-danger">
                  {{ formErrors.lastName }}
                  </div>
              </div>
              <div class="form-group">
                <label for="phoneNumber">Phone</label>
                <input type="text" id="phoneNumber" class="form-control"
                       formControlName="phoneNumber" >
                 <div *ngIf="formErrors.phoneNumber" class="alert alert-danger">
                  {{ formErrors.phoneNumber }}
                  </div>
              </div>
           </div>

           <div class="col-md-4">
             <h3>Vehicle</h3>
             <span class="app-toolbar-filler"></span>
              <div class="form-group">
                <label for="plate">Plate</label>
                <input type="text" id="plate" class="form-control"
                       formControlName="plate" required >
                 <div *ngIf="formErrors.plate" class="alert alert-danger">
                  {{ formErrors.plate }}
                  </div>
              </div>
              <div class="form-group">
                <label for="brand">Brand</label>
                  <select class="form-control" formControlName="brand" required>
                    <option *ngFor="let group of brand|async" [value]="group.id">{{ group.name }}</option>
                  </select>
                  <div *ngIf="formErrors.brand" class="alert alert-danger">
                  {{ formErrors.brand }}
                  </div>
              </div>
              <div class="form-group">
                <label for="color">Color</label>
                <input type="color" id="color" class="form-control"
                       formControlName="color" required >
                 <div *ngIf="formErrors.color" class="alert alert-danger">
                  {{ formErrors.color }}
                  </div>
              </div>
              <div class="form-group">
                  <label for="vehicleType">Type</label>
                  <select class="form-control" formControlName="vehicleType" required>
                    <option *ngFor="let group of vehicleType|async" [value]="group.id">{{ group.name }}</option>
                  </select>
                  <div *ngIf="formErrors.vehicleType" class="alert alert-danger">
                  {{ formErrors.vehicleType }}
                  </div>
              </div>
            </div>
            <!-- end form inputs -->
          </div>

          <div class="row">
            <div class="col-md-8">
              <div class="form-group">
               <button class="pull-right" md-raised-button  color="accent" [disabled]="!formView.valid" (click)="save()">Save</button>
               <button class="pull-left" md-raised-button color="primary" (click)="back()">Cancel</button>
              </div>
            </div>
          </div>
        </form>
      <div>
      
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class CustomerEditComponent implements OnInit {
  public id;
  public customer: Customer;
  public vehicle: Vehicle;
  public vehicleType;
  public brand;
  public formView: FormGroup;
  public showForm;

  constructor(private customerService: CustomerService,
    private vehicleService: VehicleService,
    private vehicleTypeService: VehicleTypeService,
    private brandService: BrandService,
    private fb: FormBuilder,
    public snackBar: MdSnackBar,
    private router: Router, private route: ActivatedRoute, 
    private location: Location) {
    this.showForm = false;
    this.customer = new Customer();
    this.vehicle = new Vehicle();
    this.vehicleType = this.vehicleTypeService.vehiclesTypes;
    this.brand = this.brandService.brands;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.vehicleTypeService.getList();
      this.brandService.getList({offset:0, limit:100, orderby:null, where:null});
      this.buildForm();
      this.vehicleService.get(this.id).subscribe(data => {
                this.formView.setValue({
                  'firstName': data.customer.firstName,
                  'lastName': data.customer.lastName,
                  'phoneNumber': data.customer.phoneNumber,
                  'plate': data.plate,
                  'color': data.color,
                  'brand': data.brand.id,
                  'vehicleType':data.vehicleType.id
                });
                this.showForm = true;
              },
                error => {
                  console.log('Could not load Users.');
                  this.location.back();
                }
              );
    });
  }

  save(){
    let payload = this.formView.value;
    this.vehicleService.update(this.id, payload)
            .subscribe(data => {
              let snackBarRef = this.snackBar.open(
                data.message,"OK",{
                duration: 2000,
              });
              if(data.response==='ok'){
                this.formView.reset();
                snackBarRef.afterDismissed().subscribe(() => {
                  this.location.back();
                });
              }
            },
              error => console.log('Could not create the customer.'),
              () => console.log("done")
            );
  }



 
  back(){
    this.location.back();
  }
  
  buildForm(): void {
    this.formView = this.fb.group({
      'firstName': [this.customer.firstName, [
          Validators.minLength(4),
          Validators.maxLength(30)
        ]
      ],
      'lastName':[this.customer.lastName, [
          Validators.minLength(4),
          Validators.maxLength(30)
        ]],
      'phoneNumber':[this.customer.phoneNumber,[
        Validators.minLength(9),
        Validators.maxLength(30)
      ]],
      'plate':[this.vehicle.plate,[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(12)
        ]],
      'brand':[this.vehicle.brand,[Validators.required]],
      'color':[this.vehicle.color,[Validators.required]],
      'vehicleType':[this.vehicle.vehicleType,[Validators.required]],
    });

    this.formView.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onValueChanged(data?: any) {
    if (!this.formView) { return; }
    const form = this.formView;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'firstName': '',
    'lastName': '',
    'phoneNumber': '',
    'plate': '',
    'brand': '',
    'color': '',
    'vehicleType': '',
  };

  validationMessages = {
    'firstName': {
      'minlength': 'must be at least 4 characters long.',
      'maxlength': 'cannot be more than 24 characters long.'
    },
    'lastName':{
      'minlength': 'must be at least 4 characters long.',
      'maxlength':     'cannot be more than 24 characters long.'
    },
    'phoneNumber':{
       'minlength': 'must be at least 9 characters long.',
      'maxlength':     'cannot be more than 30 characters long.'
    },
    'plate':{
      'required': 'required field',
      'minlength': 'must be at least 3 characters long.',
      'maxlength':     'cannot be more than 12 characters long.'
    },
    'color':{'required':'required field'},
    'brand':{'required':'required field'},
    'vehicleType':{'required':'required field'},
  };

}
