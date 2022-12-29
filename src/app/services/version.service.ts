import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor() { }

  private version = '1.0.0';

  public getVersion(): string {
    return this.version;
  }
}
