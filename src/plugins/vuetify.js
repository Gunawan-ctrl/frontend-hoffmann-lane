import defaults from './defaults'
import theme from './theme'

import "@mdi/font/css/materialdesignicons.css";
import 'vuetify/styles'
import { VNumberInput } from 'vuetify/labs/VNumberInput'

// import { VFileUpload } from 'vuetify/labs/VFileUpload'

// import { createApp } from "vue";
import { createVuetify } from "vuetify";

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// plugins


// const app = createApp();
const vuetify = createVuetify({
  components: {
    VNumberInput,
    ...components
  },
  theme,
  directives,
  defaults,
  icons: {
    iconfont: "mdi",
  },
  // ssr: true,
});

// app.use(vuetify);

export default vuetify;
