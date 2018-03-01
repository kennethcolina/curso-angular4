import { Http, Response, Headers } from '@angular/http'
import { Pedido } from './shared/pedido.model'
import { Observable } from 'rxjs/Observable';
import { URL_API } from './app.api'
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class OrdemCompraService {

    constructor(private http: Http) {

    }

    efetivarCompra(pedido: Pedido): Observable<number> {

        let headers = new Headers()
        headers.append('Content-type', 'application/json')

        return this.http.post(`${URL_API}pedidos`,
            JSON.stringify(pedido), { headers: headers })
            .map((resposta: Response) => resposta.json().id )
    }

}