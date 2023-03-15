import {Component, HostListener, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {RouteName} from '../../enums/route-name.enum';
import {AuthService} from "../../services/auth.service";
import {Subject, takeUntil} from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    isLoggedIn = false;
    role: string | null = null;
    redirectTo: RouteName | null = null;
    user : any;

    private ngUnsubscribe$ = new Subject<void>();

    constructor(
        private router: Router,
        private renderer: Renderer2,
        private authService: AuthService
    ) {
    }

    get RouteName(): typeof RouteName {
        return RouteName;
    }

    @HostListener('window:scroll', []) onWindowScroll() {
        if (document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100) {
            document.getElementById('header')!.classList.add('sticky');
        } else {
            document.getElementById('header')!.classList.remove('sticky');
        }
    }

    guser(){
        if(this.user.id!==''){
            this.isLoggedIn = true
            this.role = this.user.privileges
          this.redirectTo = this.role === 'client' ? RouteName.Client : RouteName.Freelancer;
 
         }
    }

    ngOnInit(): void {

        let getuser = localStorage.getItem('user')!
        this.user = JSON.parse(getuser)
        console.log('get user from header', this.user)
        
        this.guser()
        // todo remove later

        // this.authService.getIsLoggedIn()
        //     .pipe(takeUntil(this.ngUnsubscribe$))
        //     .subscribe((r) => this.isLoggedIn = r);

        // this.authService.getRole()
        //     .pipe(takeUntil(this.ngUnsubscribe$))
        //     .subscribe((r) => {
        //         this.role = r;

        //         this.redirectTo = r === 'client' ? RouteName.Client : RouteName.Freelancer;
        //     });
    }

    openMobileMenu = (): void => {
        this.renderer.addClass(document.body, 'menu-opened');
    };

    closeMobileMenu() {
        this.renderer.removeClass(document.body, 'menu-opened');
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }
}
