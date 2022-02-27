<template>
<!--Codigo y estructura del apartado de Inicio de la pagina web-->
    <div id="app">
        <!--Titulo-->
        <br>
        <font color="171D1C" face="Open Sans"><h1><em>¡Bienvenidos al pulgarcito de América!</em></h1></font>
        <br>
        <!--Texto inicial-->
        <div class="text-center">
            <font color="171D1C" face="Open Sans"><h4>Le dicen ‘El Pulgarcito de América’ por el tamaño minúsculo de su territorio. Es el único país de Centroamérica que no tiene costas en el Caribe y en su interior alberga maravillas históricas y naturales que muchos países envidiarían. Así es El Salvador, un lugar lleno de bellas zonas verdes para ir con compañia, un lugar donde admirar sus bellos mares y conocer su historia. </h4></font>
         </div>
        <div>
            <!--Separamos por secciones las parte de contenido de la pagina-->
            <!--Breve resumen de la pagina en general-->
            <section class="page-section" id="services">
                <div class="container">
                    <div class="text-center">
                        <br>
                        <br>
                        <font color="171D1C" face="Open Sans"><h2><em>En nuestra pagina encontraras: </em></h2></font>
                        <br>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-4">
                            <font color="171D1C" face="Open Sans"><h4><em>Maravillosas playas</em></h4></font>
                            <p class="text-muted">Conoces algunas de las playas más famosas y bellas de El Salvador, zonas donde apreciar como el sol se oculta entre el inmenso mar.</p>
                        </div>
                        <div class="col-md-4">
                            <font color="171D1C" face="Open Sans"><h4><em>Zonas naturales</em></h4></font>
                            <p class="text-muted">Nuestro país aunque sea pequeño posee extensas zonas verdes llenos de flora y fauna, conoce uno de sus gloriosos bosques y parques para visitar algun día.</p>
                        </div>
                        <div class="col-md-4">
                            <font color="171D1C" face="Open Sans"><h4><em>Gastronomia y mucho más...</em></h4></font>
                            <p class="text-muted">Conoce las distintas delicias culinarias salvadoreñas, su cultura y muchos detalles más aquí.</p>
                        </div>
                    </div>
                </div>
           </section>
           <section>
               <!--Integrantes del equipo-->
            <div class="container">
                <div class="text-center">
                    <br>
                    <br>
                    <font color="171D1C" face="Open Sans"><h2><em>Equipo desarrollador: </em></h2></font>
                    <br>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="https://compoundacademy.com/wp-content/uploads/2021/11/job.png" alt="..." />
                            <font color="171D1C" face="Open Sans"><h4><em>Daniela Alvarez</em></h4></font>
                            <p class="text-muted">SMIS917920</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="https://compoundacademy.com/wp-content/uploads/2021/11/job.png" alt="..." />
                            <font color="171D1C" face="Open Sans"><h4><em>Rodolfo Murillo</em></h4></font>
                            <p class="text-muted">SMIS903320</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="https://compoundacademy.com/wp-content/uploads/2021/11/job.png" alt="..." />
                            <font color="171D1C" face="Open Sans"><h4><em>Elena Ruiz</em></h4></font>
                            <p class="text-muted">SMIS004820</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="https://compoundacademy.com/wp-content/uploads/2021/11/job.png" alt="..." />
                            <font color="171D1C" face="Open Sans"><h4><em>Hayci Zuniga</em></h4></font>
                            <p class="text-muted">SMIS947720</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="https://compoundacademy.com/wp-content/uploads/2021/11/job.png" alt="..." />
                            <font color="171D1C" face="Open Sans"><h4><em>Christopher Murillo</em></h4></font>
                            <p class="text-muted">SMIS903520</p>
                        </div>
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