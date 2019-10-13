<template>
  <div class="gin-button-container">
    <button class="gin-button" @click="$emit('click')">
      <slot />
    </button>
    <div class="gin-button-border-bottom" />
  </div>
</template>

<script>
export default {
  name: 'GinInput',
};
</script>

<style lang="scss">
 .gin-button-container {
   display: inline-block;
   position: relative;

   .gin-button-border-bottom {
     cursor: pointer;
     width: inherit;
     height: 3px;
     position: relative;
     background-color: var(--color-primary);
     transition: background 0.4s;
   }

    .gin-button {
      color: var(--color-text);
      background-color: var(--color-background-alternate);
      padding: 8px 8px 4px 8px;
      font-size: 16px;
      border: none;
      width: inherit;
      box-sizing: border-box;
      transition: background 0.4s;
      position: relative;
      cursor: pointer;

      &:hover {
        background-color: var(--color-primary);
        box-shadow: 3px 3px 6px 6px var(--shadow-black-medium);

        ~ .gin-button-border-bottom {
          background-color: var(--color-alternate);

          &::after {
            content: "";
            display: block;
            position: absolute;
            width: 100px;
            height: 3px;
            background-color: var(--color-alternate);
            animation-name: expand-center;
            animation-timing-function: linear;
            animation-fill-mode: both;
            animation-duration: 0.2s;
          }
        }
      }

      &:active {
        background-color: var(--color-alternate);
        box-shadow: 3px 3px 6px 6px var(--shadow-black-light);

        ~ .gin-button-border-bottom {
          background-color: var(--color-active);

          &::after {
            animation: none;
            content: "";
            display: block;
            position: absolute;
            width: inherit;
            height: 3px;
            background-color: var(--color-active);
            transition: background 0.4s;
          }
        }
      }
    }
 }

 @keyframes expand-center {
   0% {
     width: 0;
     left: 50%;
   }
   100% {
     width: 100%;
     left: 0;
   }
 }
</style>
