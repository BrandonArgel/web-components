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
			:host {
				display: inline-block;
			}
			
			:host(.blue) {
				color: blue;
			}
			
			:host([yellow]) {
				background-color: yellow;
			}
			
			:host([yellow]) h1 {
				color: yellow;
			}
			
			:host-context(article.card) {
				color: red;
				background-color: #efefef;
				display: block;
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
