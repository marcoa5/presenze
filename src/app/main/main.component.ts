import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { blue, CustomValidators } from './cValidators';
import * as  moment  from 'moment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  form;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email : ['',[Validators.required, Validators.email, blue()]],
      password : ['',[Validators.required, Validators.minLength(6)]],
      password1 : ['',[Validators.required, Validators.minLength(6)]],
      nome: ['',[Validators.required]],
      cognome: ['',[Validators.required]],
      data: ['', [Validators.required]],
    },{validator: CustomValidators.contP})  
  }
  si = false;
  hide = true;
  ngOnInit(): void {}

copia(g: FormGroup){
  let a = g.get('email').value;
  let b = g.get('password').value;
  let c = g.get('password1').value;
  let d = g.get('nome').value;
  let e = g.get('cognome').value;
  let f = g.get('data').value;
  console.log(d, " ", e);
  console.log(a);
  console.log(b);
  console.log(moment(f).format("YYYYMMDD"))

}

c(g: FormGroup){
  if(this.si===false){
    let a = g.get('email').invalid;
    let b = g.get('password').invalid;
    if (a || b ) {return true} else{return false}
  } else {
    let a = g.get('email').invalid;
    let b = g.get('password').invalid;
    let c = g.get('password1').invalid;
    let d = g.get('nome').invalid;
    let e = g.get('cognome').invalid;
    let f = g.get('data').invalid;
  if (a || b || c || d || e || f){return true} else {return false}
}
}



}
