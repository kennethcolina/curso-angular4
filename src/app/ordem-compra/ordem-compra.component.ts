import { Component, OnInit } from '@angular/core';
import { Pedido } from '../shared/pedido.model';
import { OrdemCompraService } from '../ordem-compra.service'
import 'rxjs/observable'

@Component({
	selector: 'app-ordem-compra',
	templateUrl: './ordem-compra.component.html',
	styleUrls: ['./ordem-compra.component.css'],
	providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

	endereco: string = ''
	numero: string = ''
	complemento: string = ''
	formaPagamento: string = ''

	constructor(private ordemCompraService: OrdemCompraService) { }

	ngOnInit() {
	}

	atualizaEndereco(endereco: string) {
		this.endereco = endereco
		console.log(this.endereco)
	}

	atualizaNumero(numero: string) {
		this.numero = numero
		console.log(this.numero)
	}

	atualizaComplemento(complemento: string) {
		this.complemento = complemento
		console.log(this.complemento)
	}

	atualizaFormaPagamento(formaPagamento: string) {
		this.formaPagamento = formaPagamento
		console.log(this.formaPagamento)
	}

	confirmarCompra() {

		let pedido = new Pedido(this.endereco, this.numero, this.complemento, this.formaPagamento)

		this.ordemCompraService.efetivarCompra(pedido)
			.subscribe()

	}

}
