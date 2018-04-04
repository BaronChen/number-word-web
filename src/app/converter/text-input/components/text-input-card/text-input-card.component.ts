import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input-card',
  templateUrl: './text-input-card.component.html',
  styleUrls: ['./text-input-card.component.scss']
})
export class TextInputCardComponent implements OnInit {

  @Input()
  text: string;

  textInputForm: FormGroup;
  
  private _error:string;
  
  @Input()
  set error(value:string) {
    this._error = value;
    if (this.textInputForm) {
      if (this.hasError) {
        this.textInputForm.controls['text'].setErrors({'incorrect': true});
        this.textInputForm.controls['text'].markAsTouched();
      }else{
        this.textInputForm.controls['text'].setErrors(null);
        this.textInputForm.controls['text'].markAsUntouched();
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
  textChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.textInputForm = new FormGroup ({
      text: new FormControl()
    });
  }

  onTextChange(value: string) {
    this.textChange.emit(value);
  }

}
