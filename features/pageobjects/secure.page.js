import page from "./page";

class SecurePage extends page {
  get flashAlert() {
    return $('h3[data-test="error"]');
  }
}

export default new SecurePage();
