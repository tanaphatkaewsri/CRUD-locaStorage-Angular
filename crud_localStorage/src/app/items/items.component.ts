import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { DataService } from '../data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  constructor(private dataService: DataService) {}

  // items = this.dataService.getAllData();

  items: any[] = [];

  item: any = '';
  check: boolean = true;
  control_item: FormControl = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.items = this.dataService.getAllItems();
    console.log('before: ', this.items);
  }

  submitForm() {
    // console.log('invalid ', this.control_item.invalid);
    // console.log('touch ', this.control_item.touched);

    if (!this.control_item.invalid) {
      this.item = this.control_item.value;
      console.log('OK, Data is: ', this.item);
      // this.dataService.addItems('items', this.item);
      this.dataService.addItem(this.item);
      this.items = this.dataService.getAllItems();
      console.log('after: ', this.items);

      this.control_item.setValue('');
      this.check = true;
    } else {
      this.check = false;
      console.log('Please Fill Data');
    }
    // this.dataService.getAllData();
  }

  updateItem(item: any) {
    console.log('update click', item);
    this.control_item.setValue(item);
  }

  deleteItem(item: any) {
    console.log('delete click', item);
  }
}
