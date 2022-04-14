import { LitElement, html } from "lit-element";
import { styles } from "../styles/container-style";


class Container extends LitElement {

    static get styles() {
        return [
            styles
        ];
    }

    static get properties() {
        return {
            colorCode: { type: String }
        }
    }

    constructor() {
        super();
        this.colorCode = "";
    }
    inputEventLeft(event) {
        this.colorCode = event.target.value;
        this.dispatchEvent(new CustomEvent("input-event-left", { detail: this.colorCode, composed: true, bubbles: true }));

    }
    inputEventRight(event) {
        this.colorCode = event.target.value;
        this.dispatchEvent(new CustomEvent("input-event-right", { detail: this.colorCode, composed: true, bubbles: true }));
    }


    render() {
        return html`
            <input @input="${this.inputEventLeft}" type="color" class="color1" name="head" value="#5773FF">
            <input @input="${this.inputEventRight}" type="color" class="color2" name="head" value="#C83C3C">
            
        `
    }

}

customElements.define("container-component", Container);