<template>
  <div class="gin-label" v-text=label />
</template>

<script>
 export default {
   name: 'GinLabel',
   props: {
     label: {
       type: String,
       required: true,
     },
   },
 };
</script>

<style lang="scss">
.gin-label {
  background-color: var(--color-background-menu);
  border-bottom: 3px solid var(--color-background-alternate);
  border-bottom: 3px solid var(--color-background-alternate);
  color: var(--color-text);
  display: table-cell;
  padding: 2px 8px;
  font-family: sans-serif;
}
</style>
