<template>
    <b-table striped hover :items="bosquesParque" :fields="fields"></b-table>
</template>

<script>

export default{
    name:'bosquesC',
    data(){
        return{
            bosquesParque:[]


        }
    }
}

</script>