import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'
import { URL_API } from "./app.api";

@Injectable()
export class OfertasService {

	public ofertas: Array<Oferta> = []

	constructor(private http: Http) {

	}

	public getOfertas(): Promise<Oferta[]> {

		return this.http.get(`${URL_API}?destaque=true`)
			.toPromise()
			.then((resposta: any) => resposta.json())
	}

	public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {

		return this.http.get(`${URL_API}?categoria=${categoria}`)
			.toPromise()
			.then((resposta: any) => resposta.json())

	}

	public getOfertasDiversao(): Promise<Oferta[]> {

		return this.http.get(`${URL_API}?categoria=diversao`)
			.toPromise()
			.then((resposta: any) => resposta.json())

	}

	public getById(id: string): Promise<Oferta> {

		return this.http.get(`${URL_API}?id=${id}`)
			.toPromise()
			.then((resposta: any) => resposta.json()[0])

	}

}