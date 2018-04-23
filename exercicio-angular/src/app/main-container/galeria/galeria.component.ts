import { Component, OnInit } from '@angular/core';
import { Foto } from './Foto';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imagens: Foto[] = [];
  expandirFoto: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  public abreImagem() {
    this.imagens = [
      {
        thumb : 'https://img00.deviantart.net/5ab6/i/2018/088/5/f/hanannie_day___18_by_yamio-dc7ca76.png',
        descricao : '',
        titulo : '',

      },
      {
        thumb : 'https://orig00.deviantart.net/43fc/f/2018/112/a/3/tower_by_shuangwen-dc9iqkj.jpg',
        descricao : '',
        titulo : '',
      },
      {
        thumb : 'https://pre00.deviantart.net/02b9/th/pre/f/2018/112/f/6/happy_earth_day___by_squchan-dc9jd3l.jpg',
        descricao : '',
        titulo : '',
      },
      {
        thumb : 'https://pre00.deviantart.net/1ced/th/pre/f/2018/112/e/5/you_got_a_star___remake__by_theawesomluigi-dc9jmz1.png',
        descricao : '',
        titulo : '',

      }]
    if (this.expandirFoto) this.expandirFoto = false;
    else if (!this.expandirFoto) this.expandirFoto = true;
  }

}
