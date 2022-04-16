class myElement extends HTMLElement {
	constructor() {
		super();
	}

	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `
      <ul>
				<li>
					1
				</li>
				<li>
					2
					<ul>
						<li>
							2.1
							<ul>
								<li>
									2.1.1
								</li>
								<li>
									2.1.2
								</li>
								<li>
									2.1.3
								</li>
							</ul>	
						</li>
						<li>
							2.2
						</li>
						<li>
							2.3
						</li>
					</ul>
				</li>
				<li>
					3
				</li>
				<li>
					4
				</li>
				<li>
					5
				</li>
			</ul>
      ${this.getStyles()}
    `;
		return template;
	}

	getStyles() {
		return `
			<style>
				ul {
					margin-left: 1em;
					padding: 0;
				}
		`;
	}

	render() {
		this.appendChild(this.getTemplate().content.cloneNode(true));
	}

	connectedCallback() {
		this.render();
	}
}

customElements.define("my-element", myElement);
