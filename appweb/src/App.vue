<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/">Turismo Salvadoreño</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/CompPlayas">Playas</b-nav-item>
            <b-nav-item href="#">Bosques</b-nav-item>
            <b-nav-item href="#">Simbolos Patrioticos</b-nav-item>
            <b-nav-item to='/platillos_tipicos'>Platillos Tipicos</b-nav-item>
            
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img thumbnail fluid src="https://assets.cdnelnuevodiario.com/cache/05/ca/05ca4158bc37eeddbae321699628958d.jpg" alt="Image 1"></b-img>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://revistasumma.com/wp-content/uploads/2018/02/el-salvador.jpg" alt="Image 2"></b-img>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://liberalsv.com/content/images/2018/09/Piramides-Mayas-De-El-Salvador-800x600.jpg" alt="Image 3"></b-img>
        </b-col>
      </b-row>
    </b-container>
  
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

#wrapper{
   
    width: 650px  ;
    height: auto;
    background-color: rgb(171, 175, 171);
    margin: 0 auto;
    margin-top: 200px;
    border-radius: 10px;
}

</style>
