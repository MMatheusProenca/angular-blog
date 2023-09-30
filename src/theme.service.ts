import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme: string = 'escuro';

  constructor() {}

  setTheme(theme: string) {
    this.activeTheme = theme;
    document.body.className = '';
    document.body.classList.add(`tema-${theme}`);
  }

  getTheme(): string {
    return this.activeTheme;
  }
}