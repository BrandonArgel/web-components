class MyCustomElement extends HTMLElement {
  constructor() {
    super()
    console.log('Hola desde el constructor - Memoria')
  }

  connectedCallback() {
    console.log('Hola desde el DOM')
  }

  disconnectedCallback() {
    console.log('Adios desde el DOM')
  }
}

customElements.define('my-custom-element', MyCustomElement);

document.querySelector('my-custom-element').remove()