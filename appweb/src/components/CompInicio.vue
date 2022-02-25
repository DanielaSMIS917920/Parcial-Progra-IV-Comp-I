<template>
    <b-table striped hover :items="Inicio" :fields="fields"></b-table>
</template>

<script>

export default{
    name:'CompInicio',
    data(){
        return{
            Inicio:[]


        }
    }
}

</script>
