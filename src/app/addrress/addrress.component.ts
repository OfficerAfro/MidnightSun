import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addrress',
  templateUrl: './addrress.component.html',
  styleUrls: ['./addrress.component.scss']
})
export class AddrressComponent {

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
