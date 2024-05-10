<template>
    <div ref="loader" class="loader">
        <p class="loader__title">Cargando...</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'loader',
    setup() {
        return {
        }
    }
})
</script>

<style lang="scss">
.loader{
    margin-top: var(--height-nav);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -200vh;
    background: rgb(13,13,13);
    z-index: 1000;


    &__title{
        margin-top: 4rem;
        color: white;
        width: 100%;
        height: 8rem;
        background: linear-gradient(90deg, rgba(220,9,20,0) 0%, rgb(187, 20, 28) 50%, rgba(220,9,20,0) 100%);
        display: flex;
        font-weight: 600;
        justify-content: center;
        align-items: center;
        font-size: 2.4rem;
        letter-spacing: 1px;
        will-change: letter-spacing;
        animation-name: letterSpacingAnimation;
        animation-duration: 1s;
        animation-iteration-count: 1;
    }
    @keyframes letterSpacingAnimation {
        0%{
            letter-spacing: 24px;
        }
        100%{
            letter-spacing: 1px;
        }
    }
}
</style>