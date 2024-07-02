<template>
    <Nav/>
    <div class="error404">
        <img class="error404__img" src="../../public/404.svg" alt="error404" />
        <a style="opacity: 0;" href="https://storyset.com/web">
            Web illustrations by Storyset
        </a>
    </div>
    <Footer/>
</template>

<script lang="ts">
import Nav from '../layout/Nav.vue'
import Footer from '../layout/Footer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: '404',
    components: {
        Nav, Footer
    }
})
</script>

<style lang="scss">
    .error404{
        background: rgb(13,13,13);
        height: 60vh;
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &__img{
            height: 45vh;
        }
    }
</style>
