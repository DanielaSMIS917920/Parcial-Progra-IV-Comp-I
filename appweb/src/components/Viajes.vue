<template>
  <div class="turis">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 text-center">
         <!--Uso de directiva v-for para crear una estructura repetitiva -->
          <!--Y v-bind para enlazar una variable con su etiqueta u atributo-->
        <div class="col" v-for="(item, index) in items" v-bind:key="index">
          <div class="card">
            <div class="card-header">
            Lugar
            </div>
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
                   <!--Y como ultima directiva usamos v-on para capturar todos los eventos DOM al dar click sobre el boton-->
                  <button class="btn btn-primary" v-on:click="reservation(item.reservation += 1)">RESERVAR</button><br/>
                  <p> Cantidad de resevaciones {{item.reservation }} veces.</p>
                </div>
              </div>
           </div>
        
          </div>
        </div>
      </div> 
    </div>
     <!--La parte de viajes turisticos fue realizado por Hayci Zuniga.-->
    <section>
      <div class="container">
        <div class="text-center">
          <br>
          <br>
          <font color="171D1C" face="Open Sans"><h2><em>Realizado por: </em></h2></font>
          <br>
          </div>
            <div class="col-lg-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src="https://compoundacademy.com/wp-content/uploads/2021/11/job.png" alt="..." />
                <font color="171D1C" face="Open Sans"><h4><em>Hayci Zuniga</em></h4></font>
                <p class="text-muted">SMIS947720</p>
            </div>
          </div>
      </div>
    </section>
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
