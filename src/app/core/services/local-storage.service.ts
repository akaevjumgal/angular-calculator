import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  save(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  find(key: string) {
    return localStorage.getItem(key);
  }
}
