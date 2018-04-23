import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imagens: string[] = ["i1", "i2", "i3", "i4", "i5"];
  expandirFoto: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  public abreImagem() {
    if (this.expandirFoto) this.expandirFoto = false;
    else if (!this.expandirFoto) this.expandirFoto = true;
  }

}
