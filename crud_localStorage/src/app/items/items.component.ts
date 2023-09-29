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
  }

  submitForm() {

    if (!this.control_item.invalid) {
      this.item = this.control_item.value;
      if (this.from_update) {
        this.dataService.updateItem(this.item, this.index);
        this.from_update = false;
      } else {
        this.dataService.addItem(this.item);
      }
      this.items = this.dataService.getAllItems();
      this.control_item.setValue('');
      this.check = true;
    } else {
      this.check = false;
    }
  }

  updateClick(item: any, index: any) {
    this.from_update = true;
    this.control_item.setValue(item);
    this.index = index;
  }

  deleteClick(index: any) {
    this.dataService.deleteItem(index);
    this.items = this.dataService.getAllItems();
  }
}
