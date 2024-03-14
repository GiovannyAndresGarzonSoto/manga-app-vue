<template>
    <img src="../../public/menu-dots.svg" class="menu-icon-dots" alt="menu">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MenuDotsIcon',
})
</script>

<style>
.menu-icon-dots{
    position: fixed;
    right: 0;
    margin: 0 1.6rem;
    width: 6.8rem;
}
</style>