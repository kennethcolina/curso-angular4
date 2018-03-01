import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'

@Component({
	selector: 'app-ordem-compra',
	templateUrl: './ordem-compra.component.html',
	styleUrls: ['./ordem-compra.component.css'],
	providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

    idPedidoCompra

	constructor(private ordemCompraService: OrdemCompraService) { }

	ngOnInit() {
		//this.ordemCompraService.efetivarCompra()
	}

}
