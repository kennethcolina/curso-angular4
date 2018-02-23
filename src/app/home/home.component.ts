import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

	public ofertas: Oferta[]

	constructor(private ofertasService: OfertasService) { }

	ngOnInit() {

		let success = (ofertas: Oferta[]) => {
			this.ofertas = ofertas
			console.log(ofertas)
		}

		let error = (erro: any) => console.log(erro)

		this.ofertasService.getOfertas()
			.then(success, error)

	}



}