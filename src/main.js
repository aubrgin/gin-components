import App from './components/App.vue';
import GinInput from './components/GinInput.vue';
import GinButton from './components/GinButton.vue';
import GinCheckbox from './components/GinCheckbox.vue';
import GinRadio from './components/GinRadio.vue';
import GinTree from './components/GinTree.vue';
import GinLabel from './components/GinLabel.vue';
import GinSelect from './components/GinSelect.vue';
import ginFs from '@aubrgin/gin-fs';
import fs from 'fs';
import Vue from 'vue';

if (process.env.NODE_ENV !== 'production') {
  new Vue({
    render: (h) => h(App),
  }).$mount('#app');

  function injectCss(css) {
    var linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
    document.getElementsByTagName('head')[0].appendChild(linkElement);
  }

  injectCss(fs.readFileSync(`${ginFs.ginPath}/${ginFs.getConfig('theme', 'gin')}`));
}

export {
  GinInput,
  GinButton,
  GinCheckbox,
  GinRadio,
  GinTree,
  GinLabel,
  GinSelect,
};
