import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
    isLoggedIn$ = new BehaviorSubject<boolean>(false);
    role$ = new BehaviorSubject<string | null>(null);

    getIsLoggedIn = (): Observable<boolean> => this.isLoggedIn$.asObservable();
    setIsLoggedIn = (data: boolean): void => this.isLoggedIn$.next(data);

    getRole = () => this.role$.asObservable();
    setRole = (data: string) => this.role$.next(data);

}
