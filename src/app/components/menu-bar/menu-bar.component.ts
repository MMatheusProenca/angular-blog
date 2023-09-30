import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/theme.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }
  toggleTheme() {
    if (this.themeService.getTheme() === 'claro') {
      this.themeService.setTheme('escuro');
    } else {
      this.themeService.setTheme('claro');
    }
  }
}
