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

  // getAllData(): any {
  //   const allData: any = {};
  //   for (let i = 0; i < localStorage.length; i++) {
  //     // console.log(i);
  //     let key = localStorage.key(i);
  //     if (key == null) {
  //       key = 'nothing';
  //     }
  //     const value = localStorage.getItem(key);
  //     allData[key] = value;
  //   }
  //   return allData;
  // }

  addItem(item: any) {
    const items = this.getAllItems();
    items.push(item);
    const filter_items = this.removeDuplicate(items);
    localStorage.setItem('items', JSON.stringify(filter_items));
  }

  updateItem(value: any, index: any) {
    let items = this.getAllItems();
    // console.log('value: ', value);
    // console.log('index: ', index);
    // console.log('after update:', items);
    items[index] = value;
    // console.log('before update:', items);
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

  // addItems(item: string, value: string): void {
  //   localStorage.setItem(item, value);
  // }
}
