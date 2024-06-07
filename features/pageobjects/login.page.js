import page from "./page";

class LoginPage extends page {
  get inputUsername() {
    return $('input[data-test="username"]');
  }

  get inputPassword() {
    return $('input[data-test="password"]');
  }

  get btnSubmit() {
    return $('input[data-test="login-button"]');
  }

  async login() {
    await this.btnSubmit.click();
  }

  open(path) {
    return super.open(path);
  }
}

export default new LoginPage();
