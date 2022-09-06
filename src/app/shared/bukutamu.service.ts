import { Injectable } from '@angular/core';
import { Bukutamu } from '../models/Bukutamu';

@Injectable({
  providedIn: 'root'
})
export class BukutamuService {

  constructor() { }

  simpanBuku(bukuTamu: Bukutamu): string {
    console.log(bukuTamu);
    return "sukses"
  }
}
