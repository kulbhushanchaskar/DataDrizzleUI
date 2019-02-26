import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private currentCoponentNotifier = new EventEmitter<string>();

  constructor() { }

  getCurrentComponentNotifier() {
    return this.currentCoponentNotifier;
  }

  broadCastCurrentCoponent(componentName: string) {
    this.currentCoponentNotifier.emit(componentName);
  }

}
