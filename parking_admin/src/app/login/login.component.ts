import { Component, OnInit } from '@angular/core';
import { FormControl }       from '@angular/forms';
import { Router }       from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = new FormControl();
  user: any = {username:'admin',password:'password1'};
  submitted = false;
  showError = false;
  constructor(public authenticationService: AuthenticationService, private router: Router) { }
  ngOnInit() { 
    // reset login status
    this.authenticationService.logout();
  }

  
  onSubmit() {
     this.submitted = true;
     this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/admin']);
                } else {
                    this.showError = true;
                }
            },
             error => {
                this.showError = true;
              }
            );
  }
}
