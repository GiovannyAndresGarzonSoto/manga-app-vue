<template>
    <div class="footer">
        <img @click="toMain" class="footer__logo" src="../../public/logo.png" alt="logo">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Router, useRouter } from 'vue-router';
import { useTo } from '../hooks';

export default defineComponent({
    name: 'Footer',
    setup() {
        const router: Router = useRouter()

        const { toMain } =  useTo(router)

        return {
            toMain
        }
    }
})
</script>