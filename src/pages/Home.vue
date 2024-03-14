<template>
    <Nav/>
    <Hero/>
    <Main/>
    <Footer/>
</template>

<script lang="ts">
import Nav from '../layout/Nav.vue'
import Hero from '../layout/Hero.vue'
import Footer from '../layout/Footer.vue'
import Main from '../layout/Main.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Home',
    components: {
        Nav, Hero, Footer, Main
    }

})
</script>
