<template>
    <div class="main">
        <Updates/>
        <Sidebar/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Updates from '../layout/Updates.vue'
import Sidebar from './Sidebar.vue';

export default defineComponent({
    name: 'Main',
    components: {
        Updates, Sidebar
    }
})
</script>