<template>
  <div class="app">
    <div class="gin-component-container">
      <GinInput v-model="inputValue" label="email" :error="inputInvalid" :warning="inputWarning" />
      {{ inputValue }}
    </div>
    <div class="gin-component-container">
      <GinButton label="Click me" @click="buttonCount++">
        Click me
      </GinButton>
      {{ buttonCount }}
    </div>
    <div class="gin-component-container">
      <GinCheckbox v-model="checked" />
    </div>
    <div class="gin-component-container">
      <GinRadio v-model="checked" />
    </div>
    <div class="gin-component-container">
      <GinTree :edit="true" v-model="tree" />
    </div>
    {{ tree }}
  </div>
</template>

<script>
import GinInput from './GinInput.vue';
import GinButton from './GinButton.vue';
import GinCheckbox from './GinCheckbox.vue';
import GinRadio from './GinRadio.vue';
import GinTree from './GinTree.vue';

export default {
  name: 'App',
   components: {
     GinInput,
     GinButton,
     GinCheckbox,
     GinRadio,
     GinTree,
   },
   computed: {
     inputInvalid() {
       return this.inputValue.length > 10 ? 'Maximum length is 10' : '';
     },
     inputWarning() {
       return this.inputValue.length === 10 ? 'Getting close to maximum length' : '';
     }
   },
   data() {
     return {
       inputValue: '',
       buttonCount: 0,
       checked: false,
       tree: {},
     };
   },
};
</script>

<style>
 html, body, .app {
   height: 100%;
   width: 100%;
   background-color: var(--color-background);
   color: var(--color-text);
 }
 :focus,
 :active:focus,
 .active:focus,
 .focus,
 :active.focus,
 .active.focus {
   outline: none !important;
 }
 .gin-component-container {
   margin: 32px;
 }
</style>
