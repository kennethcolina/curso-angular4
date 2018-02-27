import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../../ofertas.service';

@Component({
	selector: 'app-onde-fica',
	templateUrl: './onde-fica.component.html',
	styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

	public ondeFica: string

	constructor(private route: ActivatedRoute, private ofertaService: OfertasService) {

		this.route.parent.params.subscribe((parametros: Params) => {
			ofertaService.getOndeFicaOfertaPorId(parametros.id)
			.then(resposta =>
				this.ondeFica = resposta,
				erro => console.log(erro)
			)
		})

	}

	ngOnInit() {
	}

}
