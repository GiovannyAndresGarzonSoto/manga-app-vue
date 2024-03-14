<template>
    <Nav />
    <ListContent />
    <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Nav from '../layout/Nav.vue'
import Footer from '../layout/Footer.vue'
import ListContent from '../layout/ListContent.vue'

export default defineComponent({
    name: 'MangaList',
    components:{
        Nav, ListContent, Footer
    }
})
</script>