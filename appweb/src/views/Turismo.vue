<template>
    <div class="app">
        <br>
        <font color="171D1C" face="Open Sans"><h1><em>¡Haz tu reservación ya!</em></h1></font>
        <br>
    <Viajes/>
    
    </div>
</template>


<script>

//Import de componentes
import Viajes from '@/components/Viajes.vue'


export default {
    name: 'Turismo',
    components:{
        Viajes
    }
    
}
</script>
