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
    <div>
       <!-- Masthead-->
        <header>
            <div class="container"> <img src="https://villadelangelhotel.com/wp-content/uploads/2016/12/Palacio-Nacional-El-Salvador-1.png" width="1500" height="700">
                <div class="masthead-subheading">Welcome To Our Studio!</div>
                <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a class="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
            </div>
        </header>
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
