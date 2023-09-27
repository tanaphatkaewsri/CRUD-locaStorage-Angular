import { Component } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  item: any = '';
  control_item: FormControl = new FormControl('', [Validators.required]);

  submitForm() {
    console.log('add item:');
  }
}
