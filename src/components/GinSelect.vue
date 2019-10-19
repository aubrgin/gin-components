<template>
  <label class="gin-select-container">
    <span class="gin-select-triangle" v-text="'▼'" />
    <button
      class="gin-select"
      v-text="value"
      :class="{ filled: value }"
    />
    <span class="gin-select-border-bottom" />
    <div class="gin-select-options">
      <button class="gin-select-option" @click="onClick(option)" v-for="option in options">
        {{ option }}
      </button>
    </div>
    <span class="gin-select-placeholder" v-text="label" />
  </label>
</template>

<script>
export default {
  name: 'GinSelect',
   props: {
     label: {
       type: String,
       default: '',
     },
     value: {
       type: [String, Number],
       required: true,
     },
     options: {
       type: Array,
       required: true,
     },
   },
   methods: {
     onClick(option) {
       this.$emit('input', option);
       document.activeElement.blur()
     },
   },
};
</script>

<style lang="scss">
 label.gin-select-container {
   width: 400px;
   display: inline-block;
   position: relative;
   transition: all 0.1s linear;

   .gin-select-options {
     display: none;
   }

   .gin-select:hover,
   .gin-select-triangle:hover ~ .gin-select {
     box-shadow: 3px 3px 6px 6px var(--shadow-black-medium);
     background-color: var(--color-alternate);

     ~ .gin-select-border-bottom {
       background-color: var(--color-active);
       transition-property: background-color;
       transition-delay: 0.4s;
       transition-duration: 0s;

       &::after {
         content: "";
         display: block;
         position: absolute;
         width: inherit;
         height: 3px;
         background-color: var(--color-active);
         animation-name: expand-center;
         animation-timing-function: linear;
         animation-fill-mode: both;
         animation-duration: 0.4s;
       }
     }

     ~ .gin-select-placeholder {
       color: var(--color-text);
     }
   }


    .gin-select {
      color: var(--color-text);
      background-color: var(--color-background-alternate);
      padding: 8px 8px 4px 8px;
      font-size: 16px;
      border: none;
      width: inherit;
      box-sizing: border-box;
      transition: background 0.4s;
      cursor: pointer;
      text-align: left;
      height: 2em;

      &:active, &:focus {
        background-color: var(--color-primary);
        box-shadow: 3px 3px 6px 6px var(--shadow-black-light);

        ~ .gin-select-options {
          display: block;
          background-color: var(--color-background-menu);
          position: relative;
          z-index: 2;
          padding: 8px;

          .gin-select-option {
            display: block;
            border: none;
            width: 100%;
            color: var(--color-text);
            text-align: left;
            transition: all 0.1s linear;
            padding: 4px 8px;
            margin-bottom: 4px;
            border-bottom: 3px solid var(--color-primary);
            background-color: var(--color-background-alternate);
            cursor: pointer;

            &:hover {
              border-bottom-color: var(--color-active);
              background-color: var(--color-primary);
            }
          }
        }

        ~ .gin-select-border-bottom {
          background-color: var(--color-active);
          transition-property: background-color;
          transition-delay: 0.4s;
          transition-duration: 0s;

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

      &:active, &:focus, &.filled {
        ~ .gin-select-placeholder {
          top: 36px;
          transition: all 0.4s;
          color: var(--color-text);
        }
      }
    }

   .gin-select-border-bottom {
     cursor: pointer;
     display: block;
     width: inherit;
     height: 3px;
     position: relative;
     background-color: var(--color-primary);
     transition: background 0.4s;
   }

   .gin-select-placeholder {
     cursor: pointer;
     color: var(--color-text-inactive);
     position: absolute;
     top: 14px;
     left: 4px;
     font-size: 12px;
     font-family: sans-serif;
     transition: all 0.4s;
   }

   .gin-select-triangle {
     cursor: pointer;
     color: var(--color-text-inactive);
     position: absolute;
     top: 8px;
     right: 8px;
   }
 }

 @keyframes expand-center {
   0% {
     width: 0;
     left: 50%;
   }
   100% {
     width: inherit;
     left: 0;
   }
 }

 @keyframes pop-up {
   0% {
     top: 0;
   }

   100% {
     top: -24px;
   }
 }
</style>
