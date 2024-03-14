<template>
    <img class="check-icon" src="../../public/check.svg">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CheckIcon',
})
</script>

<style>
.check-icon {
    height: 2rem;
    width: 2rem;
    position: relative;
}
</style>