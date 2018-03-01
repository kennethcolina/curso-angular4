import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-ordem-compra',
	templateUrl: './ordem-compra.component.html',
	styleUrls: ['./ordem-compra.component.css'],
	providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

	idPedidoCompra: number
	@ViewChild('formulario') f: NgForm

	constructor(private ordemCompraService: OrdemCompraService) { }

	ngOnInit() {

	}

	confirmarCompra() {
		this.ordemCompraService.efetivarCompra(this.f.value)
			.subscribe((id: number) => this.idPedidoCompra = id)
	}

}
