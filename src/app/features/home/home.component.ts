import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {RouteName} from '../../core/enums/route-name.enum';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
    getLink = 'project'

    constructor(private router: Router) {
    }

    get RouteName(): typeof RouteName {
        return RouteName;
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
    }

    customOptions: OwlOptions = {
        loop: true,
        margin: 30,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            740: {
                items: 3
            },
            940: {
                items: 4
            }
        },
        nav: true
    }
    clinicsslides = [
        {
            img: 'assets/img/user/avatar-1.jpg',
            name: 'George Wells',
            department: 'UI/UX Designer',
            address: 'Alabama, USA',
            rating: '4.7',
            age: '32',
            tech1: 'Web Design',
            tech2: 'UI Design',
            tech3: 'Node Js',
            subscriptionPrice: '$25 Hourly'
        },
        {
            img: 'assets/img/user/avatar-2.jpg',
            name: 'Timothy Smith',
            department: 'PHP Developer',
            address: 'Illinois, USA',
            rating: '3.5',
            age: '25',
            tech1: 'Web Design',
            tech2: 'UI Design',
            tech3: 'Node Js',
            subscriptionPrice: 'Free'
        },
        {
            img: 'assets/img/user/avatar-3.jpg',
            name: 'Janet Paden',
            department: 'Graphic Designer',
            address: 'New York, USA',
            rating: '4.1',
            age: '30',
            tech1: 'Web Design',
            tech2: 'UI Design',
            tech3: 'Node Js',
            subscriptionPrice: '$27 Hourly'
        },
        {
            img: 'assets/img/img-03.jpg',
            name: 'James Douglas',
            department: 'iOS Developer',
            address: 'Florida, USA',
            rating: '4.3',
            age: '31',
            tech1: 'Web Design',
            tech2: 'UI Design',
            tech3: 'Node Js',
            subscriptionPrice: '$23 Hourly'
        },
        {
            img: 'assets/img/img-03.jpg',
            name: 'Richard Wilson',
            department: 'UI/UX Designer',
            address: 'Alabama, USA',
            rating: '4.7',
            age: '32',
            tech1: 'Web Design',
            tech2: 'UI Design',
            tech3: 'Node Js',
            subscriptionPrice: '$25 Hourly'
        },
        {
            img: 'assets/img/img-03.jpg',
            name: 'Richard Wilson',
            department: 'UI/UX Designer',
            address: 'Alabama, USA',
            rating: '4.7',
            age: '32',
            tech1: 'Web Design',
            tech2: 'UI Design',
            tech3: 'Node Js',
            subscriptionPrice: '$25 Hourly'
        },
        {
            img: 'assets/img/img-03.jpg',
            name: 'Richard Wilson',
            department: 'UI/UX Designer',
            address: 'Alabama, USA',
            rating: '4.7',
            age: '32',
            tech1: 'Web Design',
            tech2: 'UI Design',
            tech3: 'Node Js',
            subscriptionPrice: '$25 Hourly'
        },
        {
            img: 'assets/img/img-03.jpg',
            name: 'Richard Wilson',
            department: 'UI/UX Designer',
            address: 'Alabama, USA',
            rating: '4.7',
            age: '32',
            tech1: 'Web Design',
            tech2: 'UI Design',
            tech3: 'Node Js',
            subscriptionPrice: '$25 Hourly'
        }
    ];


    tetimonialOptions: OwlOptions = {
        loop: true,
        margin: 30,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1170: {
                items: 3
            }
        },
        nav: true
    }

    testimonialslides = [
        {
            img: 'assets/img/review/review-01.jpg',
            name: 'Davis Payerf',
            position: 'CEO',
            rating: '4.8'
        },
        {
            img: 'assets/img/review/review-02.jpg',
            name: 'Davis Payerf',
            position: 'PROJECT LEAD',
            rating: '5.0'
        },
        {
            img: 'assets/img/review/review-03.jpg',
            name: 'Davis Payerf',
            position: 'TEAM LEAD',
            rating: '5.0'
        },
        {
            img: 'assets/img/review/review-02.jpg',
            name: 'Davis Payerf',
            position: 'PROJECT LEAD',
            rating: '3.2'
        },
        {
            img: 'assets/img/review/review-01.jpg',
            name: 'Davis Payerf',
            position: 'CEO',
            rating: '4.8'
        }
    ]

    search = (): void => {
        if (this.getLink === 'project') {
            this.router.navigate([RouteName.Base, RouteName.Projects]).then();
            this.getLink = 'project'
        } else if (this.getLink === 'developer') {
            this.router.navigate([RouteName.Base, RouteName.Freelancers]).then();
            this.getLink = 'developer'
        }
    };
}
