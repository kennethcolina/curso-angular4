import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable'
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/switchMap'

@Component({
	selector: 'app-topo',
	templateUrl: './topo.component.html',
	styleUrls: ['./topo.component.css'],
	providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

	ofertas: Observable<Oferta[]>

	private subjectPesquisa: Subject<string> = new Subject<string>()

	constructor(private ofertaService: OfertasService) { }

	ngOnInit() {
		this.ofertas = this.subjectPesquisa // retorno de um Oferta[]
			.debounceTime(500)
			.distinctUntilChanged()
			.switchMap((termo: string) => {
				console.log('requisicao http para api')

				if(termo.trim() === '') {
					return Observable.of<Oferta[]>([])
				}

				return this.ofertaService.pesquisaOfertas(termo)
			})
			.catch((err: any) => {
				return Observable.of<Oferta[]>([])
			})

		//this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas))
	}

	pesquisa(termoDaBusca: string): void {
		this.subjectPesquisa.next(termoDaBusca)
    }

    limpaPesquisa(): void {
       this.subjectPesquisa.next('')
    }

}
