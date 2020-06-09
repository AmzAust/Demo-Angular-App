import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gotcharacter',
  templateUrl: './gotcharacter.component.html',
  styleUrls: ['./gotcharacter.component.css']
})
export class GOTCharacterComponent implements OnInit {
  GOTCharacter = [];
  GOTCharacterFirstName = ['Jon', 'Arya', 'Cersei', 'Daenerys'];
  GOTCharacterLastName = ['Snow', 'Stark', 'Lannister', 'Targaryen'];
  i = 0;
  stopSwitch;
  stopSwitchStatus = true;
  twoWayData = 'Tyrion';

  @Input() imageUrlChild;

  stopSwitchFirstAndLast() {
    clearInterval(this.stopSwitch);
    this.stopSwitchStatus = true;
  }

  switchFirstAndLastName() {
    this.stopSwitch = setInterval(() => {
      if (this.i % 2 === 0) {
        this.GOTCharacter = this.GOTCharacterFirstName;
        console.log('if');
      } else {
        this.GOTCharacter = this.GOTCharacterLastName;
        console.log('else');
      }
      this.i++;
    }, 3000);
    this.stopSwitchStatus = false;
  }

  constructor() {
    this.GOTCharacter = this.GOTCharacterFirstName;
   }

  ngOnInit(): void {
    console.log(this.imageUrlChild);
  }

}
