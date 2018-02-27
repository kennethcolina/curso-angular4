import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Rx';

@Component({
	selector: 'app-oferta',
	templateUrl: './oferta.component.html',
	styleUrls: ['./oferta.component.css'],
	providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

	public oferta: Oferta
	// private tempoObservableSubscription: Subscription
	// private meuObservableSubscription: Subscription

	constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {

	}

	ngOnInit() {

		this.route.params.subscribe((parametros: Params) => {
			this.ofertasService.getOfertaPorId(parametros.id)
				.then(( oferta: Oferta ) => {
					this.oferta = oferta
				})
		})

		this.route.params.subscribe(
			(parametro: any) => console.log(parametro),
			(erro) => console.log(erro),
			() => console.log('processamento foi classificado como concluído!')
		)

	}

	// 	let tempo = Observable.interval(500)

	// 	this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => console.log(intervalo))

	// 	let meuObservableTeste = Observable.create((observer: Observer<number>) => {
	// 		observer.next(3)
	// 		observer.next(4)
	// 		observer.complete()
	// 	})15

	// 	this.meuObservableSubscription = meuObservableTeste.subscribe(
	// 		(resultado: number) => console.log(resultado+10),
	// 		(erro: string) => console.log(erro),
	// 		() => console.log('Stream de eventos foi finalizada')
	// 	)

	// }

	// ngOnDestroy() {
	// 	this.tempoObservableSubscription.unsubscribe()
	// 	this.meuObservableSubscription.unsubscribe()
	// }

}
