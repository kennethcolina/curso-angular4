import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component'
import { Pedido } from './shared/pedido.model'

export class OrdemCompraService {

    constructor() {

    }

    public efetivarCompra(pedido: Pedido) {
        console.log("Chegamos até aqui!");
    }

}