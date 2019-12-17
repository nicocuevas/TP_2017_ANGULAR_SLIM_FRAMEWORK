import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserGroup } from '../../models/user-group';
import { User } from '../../models/user';

import { UserGroupService } from '../../service/user-group.service';
import { UserService } from '../../service/user.service';



@Component({
  selector: 'app-user-add',
  template: `
   <div class="card">
    <h4 class="card-header">Edit User</h4>
    <div class="card-body">
      <div>
      <span class="app-toolbar-filler"></span>
      <button md-button></button>
      </div>
        <md-spinner *ngIf="!showForm" class="app-spinner"></md-spinner>
        <div *ngIf="showForm" class="col-md-12">
             <div class="row">
                <div class="col-md-4">
                  <img src="../../assets/images/user.jpg" class="img-fluid" alt="...">
                </div>
                <div class="col-md-4">
                  <label>Please Select an image</label>
                  <input type="file" id="file" (change)="setPhoto($event)" class="form-control-file">
                  <button md-raised-button (click)="savePhoto($event)" color="primary" >Save</button>
                </div>
              </div>
           </div>
        <form *ngIf="showForm" [formGroup]="formView">
          <!-- form inputs -->
          <div class="row">
           <div class="col-md-2">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" class="form-control"
                       formControlName="firstName" required >
                 <div *ngIf="formErrors.firstName" class="alert alert-danger">
                  {{ formErrors.firstName }}
                  </div>
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" class="form-control"
                       formControlName="lastName" required >
                 <div *ngIf="formErrors.lastName" class="alert alert-danger">
                  {{ formErrors.lastName }}
                  </div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="text" id="email" class="form-control"
                       formControlName="email" required >
                 <div *ngIf="formErrors.email" class="alert alert-danger">
                  {{ formErrors.email }}
                  </div>
              </div>
              <div class="form-group">
                <label for="phoneNumber">Phone</label>
                <input type="text" id="phoneNumber" class="form-control"
                       formControlName="phoneNumber" required >
                 <div *ngIf="formErrors.phoneNumber" class="alert alert-danger">
                  {{ formErrors.phoneNumber }}
                  </div>
              </div>
           </div>

           <div class="col-md-2">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" class="form-control"
                       formControlName="username" required >
                 <div *ngIf="formErrors.username" class="alert alert-danger">
                  {{ formErrors.username }}
                  </div>
              </div>
              
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control"
                       formControlName="password" required >
                 <div *ngIf="formErrors.password" class="alert alert-danger">
                  {{ formErrors.password }}
                  </div>
              </div>
              <div class="form-group">
                  <label for="userGroups">Role</label>
                  <select class="form-control" formControlName="userGroups" required>
                    <option *ngFor="let group of groups|async" [value]="group.id">{{ group.name }}</option>
                  </select>
                  <div *ngIf="formErrors.userGroups" class="alert alert-danger">
                  {{ formErrors.userGroups }}
                  </div>
              </div>
              <div class="form-check">
                <md-checkbox formControlName="active">Is Active ?</md-checkbox>
                <md-checkbox formControlName="lockUser">Suspend</md-checkbox>
              </div>
            </div>
            <!-- end form inputs -->
          </div>

          <div class="row">
            <div class="col-md-8">
              <div class="form-group">
               <button class="pull-right" md-raised-button color="accent" [disabled]="!formView.valid" (click)="save()">Save</button>
               <button class="pull-left" md-raised-button color="primary" (click)="back()">Cancel</button>
              </div>
            </div>
          </div>
        </form>
      
   </div>
</div>
  `,
  styles: []
})
export class UserEditComponent implements OnInit {
  public id;
  public groups;
  public user: User;
  public formView: FormGroup;
  public showForm;
  public file: any;

  constructor(private userService: UserService, private groupService: UserGroupService,
    private fb: FormBuilder,
    public snackBar: MdSnackBar,
    private router: Router, private route: ActivatedRoute, 
    private location: Location) {
    this.showForm = false;
    this.groups = this.groupService.groups;
    this.user = new User();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = +params['id'];
       this.groupService.getList();
       this.buildForm();
       this.userService.get(this.id).subscribe(data => {
              this.formView.setValue({
                'firstName': data.firstName,
                'lastName':data.lastName,
                'email':data.email,
                'phoneNumber':data.phoneNumber,
                'username':data.username,
                'password':data.password,
                'active':data.active,
                'lockUser':data.lockUser,
                'userGroups':data.userGroups[0].id
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
    this.user = this.formView.value;
    this.userService.update(this.id, this.user)
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
              error => console.log('Could not create the user.'),
              () => console.log("done")
            );
  }
  

  setPhoto($e){
    this.file = $e.target.files[0];
  }

  savePhoto(){
    this.userService.upload(this.id,this.file);
  }

  back(){
    this.location.back();
  }
  
  buildForm(): void {
    console.log(this.user);
    this.formView = this.fb.group({
      'firstName': [this.user.firstName, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30)
        ]
      ],
      'lastName':[this.user.lastName, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30)
        ]],
      'email':[this.user.email,[Validators.required]],
      'phoneNumber':[this.user.phoneNumber,[Validators.required]],
      'username':[this.user.username,[Validators.required]],
      'password':[this.user.password,[Validators.required]],
      'active': '',
      'lockUser': '',
      'userGroups':[this.user.userGroups,[Validators.required]]
    });

    this.formView.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onValueChanged(data?: any) {
    console.log(data);
    console.log(this.formView);
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
    'email': '',
    'phoneNumber': '',
    'username': '',
    'password': '',
    'userGroups': ''
  };

  validationMessages = {
    'firstName': {
      'required':  'required field',
      'minlength': 'must be at least 4 characters long.',
      'maxlength': 'cannot be more than 24 characters long.'
    },
    'lastName':{
      'required': 'required field',
      'minlength': 'must be at least 4 characters long.',
      'maxlength':     'cannot be more than 24 characters long.'
    },
    'email':{'required':'required field'},
    'phoneNumber':{'required':'required field'},
    'username':{'required':'required field'},
    'password':{'required':'required field'},
    'userGroups':{'required':'required field'}
  };
}
