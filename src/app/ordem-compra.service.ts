<<<<<<< HEAD
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component'
import { Pedido } from './shared/pedido.model'

export class OrdemCompraService {

    constructor() {

    }

    public efetivarCompra(pedido: Pedido) {
        console.log("Chegamos até aqui!");
=======
import { Http, Response, Headers } from '@angular/http'
import { Pedido } from './shared/pedido.model'
import { Observable } from 'rxjs/Observable';
import { URL_API } from './app.api'
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class OrdemCompraService {

    constructor(private http: Http, private headers: Headers) {

    }

    efetivarCompra(pedido: Pedido): Observable<any> {

        let headers = new Headers()
        headers.append('Content-Type', 'application/json')

        return this.http.post(`${URL_API}oderm-compra`,
            JSON.stringify(pedido), { headers: this.headers })
            .map((resposta: Response) => console.log( resposta.json()) )
>>>>>>> 8f5292f1d345f8336049581a4ca06c5cda5511d2
    }

}