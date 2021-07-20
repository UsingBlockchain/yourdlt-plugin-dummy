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
      <div class="history-wrapper">
        <h2>This plugin serves as an example for the development of custom plugins.</h2>
      </div>
    </div>
    <div class="dashboard-right-container">
      <div class="title">
        <span class="title_txt">Plugin details</span>
      </div>
      <p>This software serves as an example custom plugin that can be installed in YourDLT / dHealth / Symbol Wallets.</p>
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