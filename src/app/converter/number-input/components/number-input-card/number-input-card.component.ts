import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-number-input-card',
  templateUrl: './number-input-card.component.html',
  styleUrls: ['./number-input-card.component.scss']
})
export class NumberInputCardComponent implements OnInit {

  private _error: string;

  numberInputForm: FormGroup;

  @Input()
  number: string;

  @Input()
  set error(value:string) {
    this._error = value;
    if (this.numberInputForm) {
      if (this.hasError) {
        this.numberInputForm.controls['number'].setErrors({'incorrect': true});
        this.numberInputForm.controls['number'].markAsTouched();
      }else{
        this.numberInputForm.controls['number'].setErrors(null);
        this.numberInputForm.controls['number'].markAsUntouched();
      }
    }
  }

  get error() : string {
    return this._error;
  }

  get hasError():boolean {
    return this._error && this._error !== '';
  } 

  @Output() 
  numberChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 

  }

  ngOnInit() {
    this.numberInputForm = new FormGroup ({
      number: new FormControl()
    });
  }

  onNumberChange(value: string) {
    this.numberChange.emit(value);
  }

}
