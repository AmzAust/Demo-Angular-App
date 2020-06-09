import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
  dcHeroes = ['Batman', 'Superman', 'Wonder Woman', 'Flash'];
  index = 0;
  toggleHeroFlag = true;
  selectedHero = '';
  myStyle = {};
  color = '';
  styleToggleFlag = true;
  currentCSSClass = 'styleRed';
  inputColor = 'red';

  setCSSClass() {
    if (this.currentCSSClass === 'styleRed') {
      this.currentCSSClass = 'styleWhite';
    } else {
      this.currentCSSClass = 'styleRed';
    }
    console.log(this.currentCSSClass);
  }

  setStyle() {
    this.myStyle = {
      'font-weight' : this.styleToggleFlag ?  'bold' : 'normal',
      'font-size' : this.styleToggleFlag ? '24px' : '15px',
       color : this.generateRandomColor()
    };
    this.styleToggleFlag = !this.styleToggleFlag;
  }

  generateRandomColor() {
    this.color = '#';
    const letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < 6; i++) {
      this.color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(this.color);
    return this.color;
  }

  selectHero(hero) {
    this.selectedHero = hero;
    console.log(hero);
  }

  toggleHero() {
    this.toggleHeroFlag = !this.toggleHeroFlag;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
