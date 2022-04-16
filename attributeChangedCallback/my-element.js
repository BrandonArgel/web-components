class myElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	static get observedAttributes() {
		return ["title", "content", "image"];
	}

	attributeChangedCallback(attr, oldVal, newVal) {
		// console.log(attr, oldVal, newVal);
		if (oldVal !== newVal) {
			this[attr] = newVal;
		}
	}

	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `
			<section>
				<h1>${this.title}</h1>
				<div>
					<p>${this.content}</p>
					<img src="${this.image}" />
				</div>
			</section>
      ${this.getStyles()}
    `;
		return template;
	}

	getStyles() {
		return `
			<style>
				h1 {
					color: red;
				}

				p {
					color: blue;
				}
		`;
	}

	render() {
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
	}

	connectedCallback() {
		this.render();
	}
}

customElements.define("my-element", myElement);
