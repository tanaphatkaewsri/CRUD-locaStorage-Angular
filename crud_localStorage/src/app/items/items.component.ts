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

  from_update: boolean = false;
  index: number = 0;

  item: any = '';
  check: boolean = true;
  control_item: FormControl = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.items = this.dataService.getAllItems();
    // console.log('before: ', this.items);
    // console.log('access array: ', this.items[0]); // we got him
  }

  submitForm() {
    // console.log('invalid ', this.control_item.invalid);
    // console.log('touch ', this.control_item.touched);

    if (!this.control_item.invalid) {
      this.item = this.control_item.value;
      // console.log('OK, Data is: ', this.item);
      // this.dataService.addItems('items', this.item);
      if (this.from_update) {
        this.dataService.updateItem(this.item, this.index);
        this.from_update = false;
      } else {
        this.dataService.addItem(this.item);
      }
      this.items = this.dataService.getAllItems();
      // console.log('after: ', this.items);
      this.control_item.setValue('');
      this.check = true;
    } else {
      this.check = false;
      // console.log('Please Fill Data');
    }
    // this.dataService.getAllData();
  }

  updateClick(item: any, index: any) {
    this.from_update = true;
    // console.log('update click', index);
    this.control_item.setValue(item);
    this.index = index;
    // this.item = this.control_item.value;
    // this.items = this.dataService.getAllItems();
  }

  deleteClick(index: any) {
    // console.log('delete item click', item);
    // console.log('delete index click', index);
    this.dataService.deleteItem(index);
    this.items = this.dataService.getAllItems();
  }
}
