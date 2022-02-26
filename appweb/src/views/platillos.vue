<template>
    <div>
        <h1>Delicias Salvadoreñas</h1>


        <div>
            <b-card-group deck>
                
                <b-card title="Pupusas" img-src="https://tipsparatuviaje.com/wp-content/uploads/2020/02/pupusas-comida.jpg" img-alt="Image" img-top>
                    <b-card-text>
                        Las pupusas son el plato representativo de el salvador que esta hecho con masa de maiz y lleva un relleno que puede variar con multiples rellenos que pueden ser solo queso, frijo con queso, chicharon , revueltas, queso con loroco etc
                    </b-card-text>
                </b-card>

                <b-card title="Tamales" img-src="https://scontent.fsal5-1.fna.fbcdn.net/v/t39.30808-6/241074129_1522788841403343_6038569672999651209_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=rtTDWrWRFFkAX_36vus&_nc_ht=scontent.fsal5-1.fna&oh=00_AT_vRLikLkY56-CAJcIY6wmStLJC_6DpzjzLvZLLetKCgA&oe=621EA5C6" img-alt="Image" img-top>
                    <b-card-text>
                        La masa se prepara con maíz y con varias especias que le otorgan el delicioso sabor que ofrecen. Se hacen porciones individuales que se rellenan con carne de cerdo, pato o gallina y salsa de tomate natural. Antes de cocinar en agua hirviendo se envuelven en hojas de plátano.
                    </b-card-text>
                </b-card>

                <b-card title="Yuca Frita o Sancochada" img-src="https://wikisivar.com/wp-content/uploads/2019/05/Yuca-Frita-con-curtido.jpg" img-alt="Image" img-top>
                    <b-card-text>
                        Tanto frita como sancochada, la yuca forma parte de las comidas típicas de El Salvador, un tubérculo que los salvadoreños comen como refrigerio, “tentempié” o merienda.
                        La yuca se acompaña de chicharrones, trozos de cerdo o de las “pescadas”, pequeños peces típicos del país que se preparan fritos.
                        La yuca frita se puede acompañar también con salsa de tomate, encurtidos, tomate y pepinos.
                    </b-card-text>
                </b-card>
            </b-card-group>
            <br>
            <br>
            <b-card-group deck>
                
                <b-card title="Arroz Negrito" img-src="https://recetacubana.com/wp-content/uploads/2017/09/receta-congri.webp" img-alt="Image" img-top>
                    <b-card-text>
                        De las comidas típicas de El Salvador que se pueden comer tanto solas o acompañada del salpicón.

                        El arroz negrito se obtiene al cocinar el arroz en el caldo de los frijoles negros, sin incluir los granos.

                        Lo salvadoreños lo acompañan con cualquier tipo de carne o combinado con el salpicón como en San Vicente
                    </b-card-text>
                </b-card>

                <b-card title="Panes Con Pollo" img-src="https://lh6.googleusercontent.com/-DefY0NTJICU/U5nePgTmdDI/AAAAAAAAEwc/rIMdLNWbSq0/s500/panes-rellenos-el-salvador.png" img-alt="Image" img-top>
                    <b-card-text>
                        Comida típica de El Salvador también conocida como “panes migueleños”, porque es tradición comerlos en la parte oriental del país donde se ubica el Departamento de San Miguel.

                        Se preparan a partir de un pan de harina en forma alargada que se rellena con  lechuga, berro, tomate y pepino. Aunque no forma parte de los ingredientes principales, también puede llevar escabeche.

                        Sobre los vegetales se le ponen porciones de carne de gallina y al momento de comerlos se bañan con salsa de tomate natural.
                    </b-card-text>
                </b-card>

                <b-card title="Empanadas" img-src="https://tipsparatuviaje.com/wp-content/uploads/2020/02/empanadas-comida.jpg" img-alt="Image" img-top>
                    <b-card-text>
                        Otra comida salvadoreña que se come como una merienda junto con un café.

                        Las empanadas se elaboran con una masa hecha a partir de un puré de plátanos maduros, con la que se hacen tortillas redondeadas y rellenas con frijoles molidos, que luego se fríen en abundante aceite
                    </b-card-text>
                </b-card>
            </b-card-group>

        </div>
    </div>
</template>

<script>

import platillos_tipicos from '@/components/platillos_tipicos.vue'

export default {
    name: 'platillos',
    components:{
        platillos_tipicos
    }
}
</script>