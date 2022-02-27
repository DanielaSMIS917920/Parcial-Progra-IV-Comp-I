<template>
    <div class="turis">
    <h1>{{title}}</h1>
      <div class="container">
      <div class="row row-cols-1 row-cols-md-3 text-center">
       <div class="col" v-for="(item, index) in items" v-bind:key="index">

        <div class="card">
        <div class="card-header">
          Lugar
        </div>
        <img >
        <img class="card-img-top" src="@/assets/logo1.jpg" alt="Card image top">
        <div class="card-body">
            <h3 class="card-title">{{item.turistName}}</h3>
            <h4 class="card-subtitle">{{item.Location}}</h4>
            <p class="card-text">{{item.description}}</p>
           <div class="from-group row">
                          <div class="card-xs-2">
                              <h1>${{item.price}}</h1>
                           </div>
                           <div>
                             <button class="btn btn-primary" v-on:click="reservation(item.reservation += 1)">RESERVAR</button><br/>
                             <p> Cantidad de resevaciones {{item.reservation }} veces.</p>
                             </div>
                    
                  </div>
                </div>
           </div>
         </div>
       </div>
      </div> 
    </div>
</div>
</template>


<script>
//importacion del archivo json
import LugarTurismo from '../assets/LugarTurismo.json'

export default {
    name:'Viajes',
    props:{
        title:String
    },
    data(){
      
        return{
            items:LugarTurismo,
            reservation:0

            
        }
    },
 
    
}
</script>
