<template>
  <b-table striped hover :items="playas" :fields="fields"></b-table>
</template>

<script>

export default{
    name:'CompPlayas',
    data(){
        return{
            playas:[]


        }
    }
}
</script>

