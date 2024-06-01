<template>
    <div class="footer">
        <div class="footer__logo">
            <img @click="toMain" class="footer__logo" src="../../public/logo.png" alt="logo">
            <span>©︎2019 Shueisha Inc.</span>
            <span>Todos los derechos reservados.</span>
        </div>
        <div class="footer__info">
            <div class="footer__links">
                <a href="">Asistencia</a>
                <a href="">Noticias y <br/>Eventos</a>
                <a href="">Política de <br/>Privacidad</a>
                <a href="">Términos <br/>de Uso</a>
                <a href="">Clasificaciones <br/>de Contenido</a>
                <a href="">Derechos <br/>de Autor</a>
            </div>
            <div class="footer__desc">
                <img src="https://mangaplus.shueisha.co.jp/img/abj1092_1042.6c597180.png" alt="logo2">
                <p>ABJ Mark is a registered trademark (Registration No.10921042)<br/>
                    indicating that this e-book store / e-book distribution service is an authorized distribution
                    service that gained permission to use content from the copyright holder.<br/>
                    For more information check https://aebs.or.jp/.</p>
            </div>
        </div>
        <div class="footer__apps">
            <!-- <img @click="toMain" class="footer__logo" src="../../public/logo.png" alt="logo">
            <span>©︎2019 Shueisha Inc.</span>
            <span>Todos los derechos reservados.</span> -->
        </div>
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

        const { toMain } = useTo(router)

        return {
            toMain
        }
    }
})
</script>