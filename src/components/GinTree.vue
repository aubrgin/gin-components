<template>
  <div class="gin-tree-container">
    <template v-if="Array.isArray(sortedKeys)">
      <div v-for="key in sortedKeys">
        <template v-if="edit">
          <gin-input :key="forKeys[key]" :value="key" @input="changeKey(key, $event)" />
        </template>
        <template v-else>
          {{ key }}
        </template>
        <div class="gin-sub-tree">
          <gin-tree
            :edit="edit"
            :value="value[key]"
            v-if="value[key] !== undefined"
            @input="onInput(key, $event)"
          />
        </div>
      </div>
      <div class="gin-tree-input-button">
        <gin-input v-model="newKey" :error="newKey in value ? 'Key already exists' : ''" />
        <gin-button @click="addKey" >
          +
        </gin-button>
      </div>
    </template>
    <template v-else>
      <template v-if="edit">
        <div class="gin-tree-input-button">
        <gin-input :value="sortedKeys" @input="$emit('input', $event)" />
        <gin-button @click="toObject" >
          ToObject
        </gin-button>
        </div>
      </template>
      <template v-else>
        {{ sortedKeys }}
      </template>
    </template>
  </div>
</template>

<script>
 import GinInput from './GinInput.vue';
 import GinButton from './GinButton.vue';

 export default {
   name: 'GinTree',
   components: {
     GinInput,
     GinButton,
   },
   computed: {
     sortedKeys() {
       if (this.value instanceof Object) {
         return Object.keys(this.value).sort((lhs, rhs) => this.forKeys[lhs] > this.forKeys[rhs] ? 1 : -1);
       }
       return this.value;
     }
   },
   props: {
     edit: {
       type: Boolean,
       default: false,
     },
     value: {
       type: [Number, String, Object, Boolean],
       required: true,
     },
   },
   data() {
     return {
       forKeys: {},
       newKey: '',
     };
   },
   created() {
     if (this.value instanceof Object) {
       Object.keys(this.value).forEach((key) => {
         this.forKeys[key] = key;
       });
     }
   },
   methods: {
     changeKey(key, newKey) {
       this.forKeys[newKey] = this.forKeys[key];
       delete this.forKeys[key];

       this.$set(this.value, newKey, this.value[key]);
       this.$delete(this.value, key);
     },
     onInput(key, value) {
       this.$set(this.value, key, value)
     },
     addKey() {
       this.forKeys[this.newKey] = this.newKey;
       this.$set(this.value, this.newKey, '');
       this.newKey = '';
     },
     toObject() {
       this.$emit('input', { [this.value]: '' })
     }
   }
 };
</script>

<style lang="scss">
 .gin-tree-container {
   width: 100%;

   .gin-tree-new-key {
   }

   .gin-input-container {
     width: 100%;
   }


   .gin-sub-tree {
     width: 100%;
     background-color: rgba(0,0,0,0.1);
     border-left: 3px solid var(--color-active);
     border-right: 3px solid var(--color-active);
     border-bottom: 3px solid var(--color-active);
     padding: 16px;
     box-sizing: border-box;
   }

   .gin-tree-input-button {
     display: flex;

     .gin-button-container {
       align-self: flex-end
     }

     .gin-input-container {
       flex-grow: 1;

       .gin-input {
         width: 100%;
       }

       .gin-input-border-bottom {
         width: 100%;
       }
     }
   }
 }
</style>
