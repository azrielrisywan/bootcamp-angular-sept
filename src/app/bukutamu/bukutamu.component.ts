import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Bukutamu } from '../models/Bukutamu';
import { BukutamuService } from "../shared/bukutamu.service";

@Component({
  selector: 'app-bukutamu',
  templateUrl: './bukutamu.component.html',
})
export class BukutamuComponent implements OnInit {
  formKontak!: FormGroup;
  constructor(private formBuild: FormBuilder, private bukutamuService: BukutamuService) { }

  ngOnInit(): void {
    this.formKontak = this.formBuild.group({
      "nama": new FormControl(null, Validators.required),
      "alamat": new FormControl(null, Validators.required),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "noTelp": new FormControl(null, [Validators.required, Validators.pattern('[- +()0-9]+')]),
    })
  }

  simpan(): void {
    let bukuTamu = new Bukutamu();
    bukuTamu.nama = this.formKontak.controls['nama'].value;
    bukuTamu.alamat = this.formKontak.controls['alamat'].value;
    bukuTamu.email = this.formKontak.controls['email'].value;
    bukuTamu.noTelp = this.formKontak.controls['noTelp'].value;

    this.bukutamuService.simpanBuku(bukuTamu);
  }

}
