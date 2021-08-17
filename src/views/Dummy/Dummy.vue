<!--
/**
 * This file is part of YourDLT Wallet Plugins shared under LGPL-3.0
 * Copyright (C) 2021 Using Blockchain Ltd, Reg No.: 12658136, United Kingdom
 *
 * @package     YourDLT Wallet Plugins
 * @subpackage  @yourdlt/plugin-dummy
 * @author      Grégory Saive for Using Blockchain Ltd <greg@ubc.digital>
 * @license     LGPL-3.0
 */
-->
<template>
  <div class="yourdlt-plugin-dummy-container">
    <div class="dashboard-left-container">
      <div class="title">
        <span class="title_txt">Example plugin</span>
      </div>
      <div class="content-wrapper">
        <h2>This plugin is an example of custom plugins.</h2>
        <p>Developers can use this plugin as a boilerplate repository and add functionalities as they deem fit.</p>
        <p>Custom plugins communicate with the Wallet Software using a dual communication channel based on IPC.</p>
        <h2 class="mt-15">IPC: Inter-Process Communication</h2>
        <ul class="mt-15">
          <li><b>onPluginsReady</b>: Dispatches initial save of plugins in database.</li>
          <li><b>onPluginLoaded</b>: Dispatches update of plugin details in database (after load).</li>
          <li><b>onPluginInstallRequest</b>: Handles installation of compatible plugins to App (Plug &amp; Play).</li>
          <li><b>onPluginInstalled</b>: Dispatches initial save of manually installed plugin.</li>
          <li><b>onPluginActionRequest</b>: Dispatches/Commits/Gets using app Vuex store.</li>
          <li><b>onPluginActionResponse</b>: Dispatches App to Plugin communication (RESPONSE).</li>
          <li><b>onBeforePluginInstall</b>: Dispatches pre-installation hook for plugins.</li>
          <li><b>onPluginInstallError</b>: Dispatches error handler hook for plugins.</li>
          <li><b>onBeforePluginInjected</b>: Dispatches pre-injection hook for plugins.</li>
          <li><b>onPluginInjected</b>: Dispatches post-injection hook for plugins.</li>
        </ul>
      </div>
    </div>
    <div class="dashboard-right-container">
      <div class="title">
        <span class="title_txt">Plugin details</span>
      </div>
      <p>This software serves as an example custom plugin that can be installed in YourDLT / dHealth / Symbol Wallets.</p>
      <p>Plugins enable Plug &amp; Play dApps, which partners &amp; community can build to add functionality inside the wallet and distribute it using common javascript module deployments (NPM).</p>
      <a
        class="github-fork-ribbon right-bottom"
        :href="forkUrl"
        target="_blank"
        data-ribbon="Fork me on GitHub"
        title="Fork me on GitHub">Fork me on GitHub</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Dummy extends Vue {

  @Prop({ default: 'https://github.com/UsingBlockchain/yourdlt-plugin-dummy' })
  public forkUrl: string;

  /// region component methods
  public async created() {
    console.log(`Dummy created`);
  }
  /// end-region component methods
}
</script>

<style lang="less" scoped>
@import "./Dummy.less";
@import "./ForkMe.less";
</style>