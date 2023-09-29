import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getAllItems(): any[] {
    const items = localStorage.getItem('items');
    const parse_items = items ? JSON.parse(items) : [];
    return parse_items;
  }

  addItem(item: any) {
    const items = this.getAllItems();
    items.push(item);
    const filter_items = this.removeDuplicate(items);
    localStorage.setItem('items', JSON.stringify(filter_items));
  }

  updateItem(value: any, index: any) {
    let items = this.getAllItems();
    items[index] = value;
    const filter_items = this.removeDuplicate(items);
    localStorage.setItem('items', JSON.stringify(filter_items));
  }

  deleteItem(index: any) {
    let items = this.getAllItems();
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
  }

  removeDuplicate(arr: any[]): any[] {
    return arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  }
}
