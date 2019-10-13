<template>
  <label class="gin-radio-container" :class="{ checked: value }" @click="$emit('input', !value)">
    <div class="gin-radio-border" />
  </label>
</template>

<script>
export default {
  name: 'GinCheckbox',
   props: {
     value: {
       type: Boolean,
       required: true,
     }
   }
};
</script>

<style lang="scss">
 .gin-radio-container {
   display: inline-block;
   position: relative;
   width: 30px;
   height: 30px;
   cursor: pointer;

   * {
     cursor: pointer;
   }

   &.checked {
     .gin-radio-border {
       border: solid 3px var(--color-active);
       transition: border 0.2s linear;
       background-color: var(--color-background-alternate);

       &::after {
         top: 7px;
         left: 7px;
         width: 16px;
         height: 16px;
       }
     }
   }

   &:hover {
     .gin-radio-border {
       border: solid 3px var(--color-alternate);
       box-shadow: 3px 3px 6px 6px var(--shadow-black-medium);
     }
   }

   &:active {
     .gin-radio-border {
       border: solid 3px var(--color-active);
       box-shadow: 3px 3px 6px 6px var(--shadow-black-light);
     }
   }

   .gin-radio-border {
     border: solid 3px var(--color-primary);
     background-color: var(--color-background-alternate);
     width: 24px;
     height: 24px;
     border-radius: 24px;

     &::after {
       transition: all 0.2s ease-in;
       content: "";
       display: block;
       width: 0;
       height: 0;
       border-radius: 12px;
       background-color: var(--color-active);
       position: absolute;
       top: 15px;
       left: 15px;
     }
   }
 }
</style>
