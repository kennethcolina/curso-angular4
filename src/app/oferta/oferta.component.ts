import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { ActivatedRoute } from '@angular/router'
import { Oferta } from '../shared/oferta.model';

@Component({
	selector: 'app-oferta',
	templateUrl: './oferta.component.html',
	styleUrls: ['./oferta.component.css'],
	providers: [ OfertasService]
})
export class OfertaComponent implements OnInit {

	oferta: Oferta

	constructor(private route: ActivatedRoute, private ofertaService: OfertasService) { }

	ngOnInit() {

		this.ofertaService.getById(this.route.snapshot.params['id'])
			.then((oferta: Oferta) => this.oferta = oferta),
				erro => console.log(erro)

	}

}
