import {Component, OnInit} from '@angular/core';

import {faBars} from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    faBars = faBars;
    hidden: boolean;

    constructor() {
    }

    ngOnInit() {
        this.hidden = true;
    }

    public toggleNav = () => {
        this.hidden = !this.hidden;
    }
}
