import { LitElement, html, css } from 'lit';
import "./borzoi-card";

export class DogRoster extends LitElement {
    static get tag() {
        return 'dog-roster';
    }
    static get properties() {
        return {
          dogs: { type: Array },
          type: { type: String },
        }
    }

    constructor() {
        super();
        this.dogs = [];
        this.type = 'Borzoi';
        this.updateRoster();
    }

    updateRoster() {
        const address = new URL('../api/roster.js', import.meta.url).href;
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.dogs = data;
        });
    }
    
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
    `;
    }

    render() {
        return html`
        <h2>${this.type}</h2>
        <div class="wrapper">
            ${this.dogs.map(dog => html`
            <div class="item">
                <borzoi-card image="${dog.image}" topLabel="${dog.topLabel}" bottom="${dog.bottom}" detail="${dog.detail}"></borzoi-card>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(DogRoster.tag, DogRoster);