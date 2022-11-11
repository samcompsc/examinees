class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.#html;
    $importComponent("./components/Header/Login.js");
  }

  #html = `
    <header>

        <alert-component />

        <div class="container">

            <navbar-component />

        </div>

        <login-component />

        <signup-component />

    </header>
`;
}

window.customElements.define("header-component", Header);
