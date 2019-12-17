import { Component, OnInit } from '@angular/core';
import { LotService } from '../../service/lot.service';
import { MdSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Lot } from '../../models/lot';

@Component({
  selector: 'app-lots',
  templateUrl: './lots.component.html',
  styleUrls: ['./lots.component.css']
})
export class LotsComponent implements OnInit {

  public lots;
  public lot;
  public selectedLot;
  public formView: FormGroup;
  public pagination;
  public page : number = 1;

  constructor(private lotService: LotService,private fb: FormBuilder, public snackBar: MdSnackBar,) {
      this.lots = this.lotService.lots;
      this.lot = new Lot();
  }

  ngOnInit() {
    this.lotService.getList({offset:0, limit:8, orderby:null, where:null});
    this.lotService.pagination.subscribe(value => {this.pagination = value;console.log(value);});
    this.buildForm();
  }

  setPage(page){
    this.lotService.getList(
      {
        offset:page-1, 
        limit:this.pagination.limit,
        orderby:null,
        where:null
      });
  }

  selectLot(lot){
    this.selectedLot = lot;
    this.formView.setValue({
        'reference': this.selectedLot.reference,
        'description': this.selectedLot.description,
        'available': this.selectedLot.available,
        'reserved': this.selectedLot.reserved
    });
  }

  save(){
    this.lot = this.formView.value;
    this.lotService.update(this.selectedLot.id, this.lot)
            .subscribe(data => {
              let snackBarRef = this.snackBar.open(
                data.message,"OK",{
                duration: 2000,
              });
              if(data.response==='ok'){
                this.formView.reset();
                snackBarRef.afterDismissed().subscribe(() => {
                  this.ngOnInit();
                  this.back();
                });
              }
            },
              error => console.log('Object not updated.'),
              () => console.log("done")
            );
  }

  back(){
    this.selectedLot = null;
  }

  buildForm(): void {
    this.formView = this.fb.group({
      'reference': ['', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30)
        ]
      ],
      'description':['', [
          Validators.minLength(4),
          Validators.maxLength(30)
        ]],
      'available': '',
      'reserved': ''
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
    'reference': ''
  };

  validationMessages = {
    'firstName': {
      'required':  'required field',
      'minlength': 'must be at least 4 characters long.',
      'maxlength': 'cannot be more than 24 characters long.'
    },
    'description':{
      'minlength': 'must be at least 4 characters long.',
      'maxlength':     'cannot be more than 24 characters long.'
    }
  };

}
