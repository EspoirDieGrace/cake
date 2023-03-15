import {Component, OnInit, Renderer2} from '@angular/core';
import {Event, NavigationStart, Router} from '@angular/router';
import {RouteName} from "./core/enums/route-name.enum";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    dynamicClassName = 'home-page'

    constructor(private router: Router, private renderer: Renderer2) {
    }

    ngOnInit(): void {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                // Remove mobile menu style on navigation
                this.renderer.removeClass(document.body, 'menu-opened');

                if (event.url === RouteName.Base) {
                    this.dynamicClassName = 'home-page'
                } else {
                    this.dynamicClassName = 'dashboard-page'
                }
            }

            // if (this.base === 'home') {
            //     body.classList.add('home-page');
            //     body.classList.remove('dashboard-page');
            // } else if (this.base === 'chats' || this.base === 'freelancer-chats') {//
            //     body.classList.add('chat-page');
            //     body.classList.remove('dashboard-page');
            // } else if (this.base === 'blog-list' || this.base === 'blog-grid' || this.base === 'blog-details' || this.base === 'project' || this.base === 'developer' || this.base === 'post-project') {
            //     body.classList.remove('dashboard-page');
            // } else {
            //     body.classList.add('dashboard-page');
            //     body.classList.remove('home-page');
            // }
        });
    }
}
