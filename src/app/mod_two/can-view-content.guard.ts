import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanViewContentGuard implements CanActivate {

  private granted = false;

  canActivate() {
    if (!this.granted) {
      this.granted = confirm('Are you strong enuff to handle it?');
    }
    return this.granted;
  }
}
