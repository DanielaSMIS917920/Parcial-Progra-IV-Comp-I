<template>
  <div id="app">
    <div>
      <b-nav tabs>
        <b-nav-item active>Inicio</b-nav-item>
        <b-nav-item>Playas</b-nav-item>
        <b-nav-item>Zonas verdes</b-nav-item>
        <b-nav-item>Simbolos Patrioticos</b-nav-item>
        <b-nav-item>Platillos tipicos</b-nav-item>
      </b-nav>
    </div>
    <div class="card bg-dark text-white">
      <img src="https://cdn1.intriper.com/wp-content/uploads/2020/07/22100247/Salto-de-Malacatiup%C3%A1n-un-lugar-so%C3%B1ado-para-hacer-turismo-rural-en-El-Salvador-1.jpg" class="card-img" alt="..." width="500" height="500">
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
  
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #000;
}

nav a.router-link-exact-active {
  color: #42b983;
}


</style>
