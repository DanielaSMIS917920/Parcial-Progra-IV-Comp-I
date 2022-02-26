<template>
    <div id="app">
        <br>
        <font color="171D1C" face="Open Sans"><h1><em>¡Bienvenidos al pulgarcito de America!</em></h1></font>
        <br>
        <div class="text-center">
            <font color="171D1C" face="Open Sans"><h4>Le dicen ‘El Pulgarcito de América’ por el tamaño minúsculo de su territorio. Es el único país de Centroamérica que no tiene costas en el Caribe y en su interior alberga maravillas históricas y naturales que muchos países envidiarían. Así es El Salvador, un lugar lleno de bellas zonas verdes para ir con compañia, un lugar donde admirar sus bellos mares y conocer su historia. </h4></font>
         </div>
        <div>
            <section class="page-section" id="services">
                <div class="container">
                    <div class="text-center">
                        <br>
                        <br>
                        <h2 class="section-heading text-uppercase">Services</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="my-3">E-Commerce</h4>
                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="my-3">Responsive Design</h4>
                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="my-3">Web Security</h4>
                            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
           </section>
        </div>

    </div>
</template>

<script>

import CompInicio from '@/components/CompInicio.vue'

export default {
    name: 'InicioView',
    components:{
        CompInicio
    }
}
</script>