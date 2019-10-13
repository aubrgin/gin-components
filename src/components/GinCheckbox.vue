<template>
  <label class="gin-checkbox-container" :class="{ checked: value }">
    <input class="gin-checkbox" type="checkbox" :checked="value" @change="$emit('input', !value)">
    <div class="gin-checkbox-border-bottom" />
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
 .gin-checkbox-container {
   display: inline-block;
   position: relative;
   width: 30px;
   height: 30px;
   background-color: var(--color-background-alternate);
   cursor: pointer;

   * {
     cursor: pointer;
   }

   &::before, &::after {
     content: "";
     display: inline-block;
     position: absolute;
     width: 0;
     transition: all 0.1s linear;
     left: 3px;
     z-index: 2;
     height: 3px;
     background-color: var(--color-active);
   }

   &::before {
     transform: rotate(-45deg);
     bottom: 6px;
   }

   &::after {
     transform: rotate(45deg);
     /* transition-delay: 0.2s; */
     top: 12px;
   }

   &:hover {
     background-color: var(--color-primary);
     box-shadow: 3px 3px 6px 6px var(--shadow-black-medium);
   }

   &:active {
     background-color: var(--color-alternate);
     box-shadow: 3px 3px 6px 6px var(--shadow-black-light);
   }

   &.checked {
     &::before, &::after {
       width: 24px;
     }

     &::before {
       bottom: 50%;
     }

     &::after {
     }
   }

   .gin-checkbox {
     opacity: 0;
     position: absolute;
   }

   .gin-checkbox-border-bottom {
     cursor: pointer;
     width: inherit;
     height: 3px;
     position: absolute;
     bottom: 0;
     background-color: var(--color-primary);
     transition: background 0.4s;
     z-index: 3;
   }

    .gin-checkbox {
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
        ~ .gin-checkbox-border-bottom {
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
        ~ .gin-checkbox-border-bottom {
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
