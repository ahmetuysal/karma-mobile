import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  GetUserResponse,
  LoginRequest,
  LoginResponse,
  SignupRequest,
  User
} from '../../contract';
import { JwtService } from './jwt.service';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly jwtService: JwtService,
    private readonly stateService: StateService
  ) {}

  signOut(): void {
    this.purgeAuth();
  }

  hasCurrentUser(): boolean {
    return this.stateService.getCurrentUser() !== null;
  }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  async populate() {
    // If JWT detected, attempt to get & store user's info
    const token: string = await this.jwtService.getToken();
    console.log(`Token: ${token}`);
    if (token) {
      await this.updateCurrentUserUsingToken();
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  async setAuth(token: string): Promise<boolean> {
    // Save JWT sent from server in localstorage
    await this.jwtService.saveToken(token);
    // update the current user data using jwt token.
    return await this.updateCurrentUserUsingToken();
  }

  async purgeAuth() {
    // Remove JWT from localstorage
    await this.jwtService.destroyToken();
    // Set current user to null
    this.stateService.setCurrentUser(null);
  }

  async updateCurrentUserUsingToken(): Promise<boolean> {
    try {
      const response: HttpResponse<GetUserResponse> = await this.http
        .get<GetUserResponse>(`${environment.apiUrl}auth`, {
          observe: 'response',
          headers: await this.setHeaders()
        })
        .toPromise();

      if (response.body.user) {
        this.stateService.setCurrentUser(response.body.user);
        return true;
      } else {
        this.purgeAuth();
        return false;
      }
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
              `body was: ${JSON.stringify(error.error)}`
          );
          this.purgeAuth();
        }
        return false;
      } else {
        throw error;
      }
    }
  }

  async attemptAuth(loginRequest: LoginRequest): Promise<boolean> {
    try {
      const response: HttpResponse<LoginResponse> = await this.http
        .post<LoginResponse>(`${environment.apiUrl}auth/login`, loginRequest, {
          observe: 'response',
          headers: await this.setHeaders()
        })
        .toPromise();

      if (response.body.token) {
        return await this.setAuth(response.body.token);
      } else {
        // Remove any potential remnants of previous auth states
        this.purgeAuth();
        return false;
      }
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
              `body was: ${JSON.stringify(error.error)}`
          );
        }
        return false;
      } else {
        throw error;
      }
    }
  }

  async attemptSignup(signupRequest: SignupRequest): Promise<boolean> {
    const result: HttpResponse<object> = await this.http
      .post(`${environment.apiUrl}auth/signup`, signupRequest, {
        observe: 'response',
        headers: await this.setHeaders()
      })
      .toPromise();

    if (result instanceof HttpErrorResponse) {
      if (result.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', result.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${result.status}, ` +
            `body was: ${result.error}`
        );
      }
      return false;
    } else {
      return result.status === 201;
    }
  }

  private async setHeaders(): Promise<HttpHeaders> {
    const jwtToken = await this.jwtService.getToken();
    if (jwtToken) {
      return new HttpHeaders({
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      });
    } else {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      });
    }
  }
}
