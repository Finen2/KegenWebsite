<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/books">Books</router-link> |
      <router-link to="/ceramics">Ceramics</router-link> |
      <router-link to="/illustratinons">Illustratinons</router-link> |
      <router-link to="/reality">Reality</router-link> |
      <router-link to="/studio">Studio</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script src="./App.js"></script>
<style lang="sass" src="./App.sass"></style>
