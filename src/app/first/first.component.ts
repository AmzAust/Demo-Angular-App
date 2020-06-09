import {Component} from '@angular/core';

@Component ({
    selector: 'app-first',
    templateUrl: 'first.component.html',
    styleUrls: ['first.component.css']
})

export class FirstComponent {
    headingTwo = 'I am a component';
    imageUrl = '../../assets/Github.png';

    changeValue() {
        this.headingTwo = 'This value has been changed';
    }

    returnString() {
        return 'Inter';
    }
}
