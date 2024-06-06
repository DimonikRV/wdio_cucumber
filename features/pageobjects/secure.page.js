
import Page from './page';

class SecurePage extends Page {

    get flashAlert () {
        return $('h3[data-test="error"]');
    }
}

export default new SecurePage();
