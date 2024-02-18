/* MODAL-LIB */

export class ModalPedido {
    #modalPedido
    #openListeners = []
    constructor(){
        this.#modalPedido = document.getElementById("modalPedido");
        
        this.closeButton = document.getElementsByClassName("close").item(0);
        this.closeButton.onclick = (e) => { this.close(e) };
        window.onclick = (e) => { if( this.equals(e.target)) this.close(e) }
    }
    open(e) {
        this.#modal.style.display = "block";
    }
    close(e) {
        this.#modal.style.display = "none";
    }
    equals(htmlElement) {
        return htmlElement === this.#modalPedido;
    }
    addOpenEventTrigger(target, event) {
        const element = typeof target == 'string' ? document.querySelector(target) : target;
        if(element) {

            element[event] = (e) => { this.open(e); }
            this.#openListeners.push({ element, event });
        }
    }
}
