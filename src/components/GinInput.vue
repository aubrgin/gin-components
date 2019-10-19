<template>
  <label class="gin-input-container" :class="{ error: error, warning: warning }">
    <span class="gin-input-error-text" v-text="error" v-if="error" key="error" />
    <span class="gin-input-warning-text" v-text="warning" v-if="warning && !error" key="warning" />
    <input
      class="gin-input"
      :class="{ filled: value }"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <span class="gin-input-border-bottom" />
    <span class="gin-input-placeholder" v-text="label" />
  </label>
</template>

<script>
export default {
  name: 'GinInput',
   props: {
     label: {
       type: String,
       default: '',
     },
     value: {
       type: [String, Number],
       required: true,
     },
     error: {
       type: String,
       default: '',
     },
     warning: {
       type: String,
       default: '',
     },
   },
};
</script>

<style lang="scss">
 label.gin-input-container {
   width: 400px;
   display: inline-block;
   position: relative;
   transition: all 0.1s linear;

   .gin-input-error-text {
     color: red;
   }

   .gin-input-warning-text {
     color: yellow;
   }

   .gin-input-error-text, .gin-input-warning-text {
     position: absolute;
     top: -24px;
     animation-name: pop-up;
     animation-timing-function: linear;
     animation-fill-mode: both;
     animation-duration: 0.4s;
   }

   &.error {
     .gin-input {
       &:active, &:focus, &:hover, &.filled {
         ~ .gin-input-border-bottom {
           background-color: red;

           &::after {
             background-color: red;
           }
         }
       }
     }
   }

   &.warning {
     .gin-input {
       &:active, &:focus, &:hover, &.filled {
         ~ .gin-input-border-bottom {
           background-color: yellow;

           &::after {
             background-color: yellow;
           }
         }
       }
     }
   }

   &.error, &.warning {
     margin-top: 32px;

     .gin-input {
       &:active, &:focus, &:hover, &.filled {
         ~ .gin-input-border-bottom {
           transition-property: background-color;
           transition-delay: 0.4s;
           transition-duration: 0s;

           &::after {
             animation-name: expand-center;
             animation-timing-function: linear;
             animation-fill-mode: both;
             animation-duration: 0.4s;
           }
         }
       }
     }
   }
    .gin-input {
      color: var(--color-text);
      background-color: var(--color-background-alternate);
      padding: 8px 8px 4px 8px;
      font-size: 16px;
      border: none;
      width: inherit;
      box-sizing: border-box;
      transition: background 0.4s;

      &:hover {
        box-shadow: 3px 3px 6px 6px var(--shadow-black-medium);

        ~ .gin-input-border-bottom {
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

        ~ .gin-input-placeholder {
          color: var(--color-text);
        }
      }

      &:active, &:focus {
        background-color: var(--color-primary);
        box-shadow: 3px 3px 6px 6px var(--shadow-black-light);

        ~ .gin-input-border-bottom {
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
        ~ .gin-input-placeholder {
          top: 36px;
          transition: all 0.4s;
          color: var(--color-text);
        }
      }

      &:hover {
        background-color: var(--color-alternate);
      }
    }

   .gin-input-border-bottom {
     cursor: pointer;
     display: block;
     width: inherit;
     height: 3px;
     position: relative;
     background-color: var(--color-primary);
     transition: background 0.4s;
   }

   .gin-input-placeholder {
     color: var(--color-text-inactive);
     position: absolute;
     top: 14px;
     left: 4px;
     font-size: 12px;
     font-family: sans-serif;
     transition: all 0.4s;
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
