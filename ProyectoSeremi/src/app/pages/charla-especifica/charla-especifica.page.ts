import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Charla } from 'src/app/models/charla';
import { CharlasService } from 'src/app/services/charlas.service';

@Component({
  selector: 'app-charla-especifica',
  templateUrl: './charla-especifica.page.html',
  styleUrls: ['./charla-especifica.page.scss'],
  standalone: false
})
export class CharlaEspecificaPage implements OnInit {

  charla!: Charla | undefined;

  constructor(private route: ActivatedRoute, private charlasService: CharlasService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.charla = this.charlasService.obtenerCharlaPorId(id);
    }
  }

}
