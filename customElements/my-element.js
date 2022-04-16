const template = document.createElement("div");
template.innerHTML = `
  <style>
    p {
      color: blue;
    }

    span {
      color: red;
    }
  </style>
  <p>Hello, my name is <span>{{name}}</span>.</p>
  <p>I am <span>{{age}}</span> years old.</p>
`;

class myElement extends HTMLElement {
	constructor() {
    // Siempre llamar primero a super en el constructor
		super();

    // La funcionalidad del elemento se escribe aquí
		this.p = document.createElement("p");
	}

	connectedCallback() {
		this.p.textContent = "Hello World!";
		this.appendChild(this.p);
    this.append(template)
	}
}

// Definimos el nombre del elemento y añadimos el nuevo elemento
customElements.define("my-element", myElement);
