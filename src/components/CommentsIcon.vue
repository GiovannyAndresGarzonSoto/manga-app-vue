<template>
    <img src="../../public/comments.svg" class="comments-icon" alt="comments">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CommentsIcon',
})
</script>

<style>
.comments-icon {
    position: fixed;
    left: 0;
    bottom: 0;
    margin: 2.4rem 1.6rem;
    height: 4rem;
}
</style>