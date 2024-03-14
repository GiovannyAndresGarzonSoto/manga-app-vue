<template>
    <img class="search-icon" src="https://res.cloudinary.com/dlejpqwlh/image/upload/v1696355673/search_iopqyz.svg" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SearchIcon',
})
</script>

<style>
.search-icon {
    display: none;
    width: 2.4rem;
    height: 2.4rem;

    @media (width <=1200px) {
        display: block;
    }
}
</style>