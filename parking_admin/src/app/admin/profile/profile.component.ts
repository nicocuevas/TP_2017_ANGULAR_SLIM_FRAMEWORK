import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserGroup } from '../../models/user-group';
import { User } from '../../models/user';

import { UserGroupService } from '../../service/user-group.service';
import { UserService } from '../../service/user.service';
import { AuthenticationService } from '../../service/authentication.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public id;
  public groups;
  public user: User;
  public formView: FormGroup;
  public showForm;
  public file: any;

  constructor(private userService: UserService, private groupService: UserGroupService,
    private auth: AuthenticationService, private fb: FormBuilder,
    public snackBar: MdSnackBar, private router: Router, private route: ActivatedRoute, 
    private location: Location) {
    this.showForm = false;
    this.groups = this.groupService.groups;
    this.user = new User();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = this.auth.user.id;
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
                console.log('Could not load User.');
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
