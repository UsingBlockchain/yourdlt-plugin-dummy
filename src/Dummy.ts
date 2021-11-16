/**
 * This file is part of YourDLT Wallet Plugins shared under LGPL-3.0
 * Copyright (C) 2021 Using Blockchain Ltd, Reg No.: 12658136, United Kingdom
 *
 * @package     YourDLT Wallet Plugins
 * @subpackage  @yourdlt/plugin-dummy
 * @author      Grégory Saive for Using Blockchain Ltd <greg@ubc.digital>
 * @license     LGPL-3.0
 */
import Vue, { VueConstructor } from "vue";

// internal dependencies
// child components
import Dummy from "./views/Dummy/Dummy.vue";

/// region components library
const components: { [s: string]: VueConstructor } = {
  Dummy,
};

export const registerComponents = (): { [s: string]: VueConstructor } => {
  Object.keys(components).forEach((k) => Vue.component(k, components[k]));
  return components;
};
/// end-region components library

/// region installable plugin
/**
 * @export default
 * @description This plugin is an example software repository that
 * serves as an installable dummy plugin. The components published
 * only display placeholder texts.
 * @version 0.1.0
 * @license LGPL-3.0
 */
export default {
  view: "Dummy",

  routes: [
    {
      path: "/dummy",
      name: "dummy.home",
      meta: {
        protected: true,
        title: "Example Home",
        hideFromMenu: true,
      },
      props: false,
      // no-component
    },
  ],

  components,

  storages: [],

  settings: [],

  permissions: []
};
/// end-region installable plugin
