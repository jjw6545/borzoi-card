import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/meme-maker/meme-maker.js";


class borzoiCard extends LitElement {
  static properties = {
    title: { type: String },
    image: { type: String },
    topLabel: { type: String },
    detail: { type: String },
    bottom: { type: String },
    cardColor: { type: String, reflect: true, attribute: "card-color" },
    opened: { type: Boolean, reflect: true },
  };



  static styles = css`


    .wrapper {
      display: inline-block;
    }
    .card {
      width: 350px;
      text-align: center;
      background: pink;
  
      
      margin-top: 16px;
      margin-bottom: 16px;
      margin-left: 16px;
      margin-right: 16px;
      
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 8px;
      padding-right: 8px;
      
      border: 2px solid red;
      border-radius: 16px;
      box-shadow: 4px 4px;

      display: inline-block;

    }

    .facts {
      font: 22px Comic Sans MS;
      color: var(--borzoi-card-facts-color, white);
      display: block;
      text-align: left;
      color: white;
      text-shadow: 2px 2px #000000;

      margin-top: 16px;
      margin-left: 16px;
      margin-right: 16px;
      margin-bottom: 16px;
    }

    .header {
      font: 32px Comic Sans MS;
      color: white;
      text-shadow: 2px 2px #000000;
      line-height: 0px;
    }

    .buttons{
      padding: 5px;
      color: blue;
    }
   
    .buttons:hover{
     background-color: red;
    }
   
    .buttons:focus {
     background-color: blue; 
    }

    .image {
      border: 8px solid blue;
      
    }

    summary {
      font: 18px Comic Sans MS;
      color: white;
      text-shadow: 2px 2px #000000;
      line-height: 0px;
    }

    @media (max-width: 800px) and (min-width: 500px) {
      .button {
        display: none;
      }
    }

    @media (max-width: 500px) {
      .card {
        transform: scale(0.8);
      }
    }

  `;


  constructor() {
    super();
    this.title = "Borzoi";
    this.image =
      "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B700%2C759%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F08%2F05%2Fborzoi-is-big-tiktok-535986771-2000.jpg";
    this.topLabel = "Dog Facts";
    this.bottom = "More Info";
    this.detail = "Real Facts";
    this.opened = false;
  }


  toggleEvent(e) {
    const state =
      this.shadowRoot.querySelector("details").getAttribute("open") === ''
        ? true
        : false;
    this.opened = state;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'opened') {
        this.dispatchEvent(
          new CustomEvent('open-changed', {
            composed: true,
            bubbles: true,
            canelable: false,
            detail: {
              value: this[propName]
            },
          })
        );
      }
    });
  }





  render() {
    return html`
      <div class="wrapper">
        <div class="card">
          <h2 class="header">${this.title}</h2>
          <meme-maker
            class="image"
            alt=${this.topLabel}
            image-url=${this.image}
            top-text=${this.topLabel}
          ></meme-maker>
          <h2 class="facts">${this.bottom}</h2>

          <details class="facts" .open="${this.opened}" @toggle="${this.toggleEvent}">
          <summary>${this.detail}</summary>
          <div>
            <slot></slot>
          </div>
        </details>


        </div>
      </div>
    `;
  }
}

customElements.define("borzoi-card", borzoiCard);