<template>
    <b-table striped hover :items="platillosTipicos" :fields="fields"></b-table>
</template>

<script>

export default{
    name:'platillos_tipicos',
    data(){
        return{
            platillosTipicos:[]


        }
    }
}

</script>
