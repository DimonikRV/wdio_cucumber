const { $ } = require('@wdio/globals')
const Page = require('./page');

class SecurePage extends Page {

    get flashAlert () {
        return $('h3[data-test="error"]');
    }
}

module.exports = new SecurePage();
