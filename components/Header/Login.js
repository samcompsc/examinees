class Login extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.#html;
  }

  #html = `
    <div class="modal fade" id="login_modal" tabindex="-1" aria-labelledby="login_label" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <form id="login_form" onsubmit="onLoginClick(); return false;">
                    <div class="modal-header mx-auto">
                        <h5 class="modal-title text-primary" id="login_label">Login</h5>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="login_username" name="login_username"
                                placeholder="Username" required />
                            <label for="login_username">Username</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="login_password" name="login_password"
                                placeholder="Password" required />
                            <label for="login_password">Password</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal"
                            id="close_login">Close</button>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        `;
}

window.customElements.define("login-component", Login);
