import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private jwtToken: string = null;

  constructor(private readonly storage: Storage) {}

  async getToken(): Promise<string> {
    if (this.jwtToken !== null) {
      return this.jwtToken;
    }
    const token = await this.storage.get('jwtToken');

    if (token !== null) {
      this.jwtToken = token;
    }
    return token;
  }

  async saveToken(token: string): Promise<void> {
    await this.storage.set('jwtToken', token);
    this.jwtToken = token;
  }

  async destroyToken() {
    await this.storage.set('jwtToken', null);
    this.jwtToken = null;
  }
}
