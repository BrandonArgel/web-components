class myElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `
			<section>
				<h1>
					<slot name="title"></slot>
				</h1>
				<div>
					<p>
						<slot name="content"></slot>
					</p>
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
