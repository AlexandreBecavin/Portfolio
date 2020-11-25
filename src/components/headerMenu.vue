<template>
    <header>
    <!--  LOGO  -->
        <router-link to="/">
            <h1 class="brand-logo">AB<span class="underscore">_</span></h1>
        </router-link>
    <!--  HAMBURGER ICON  -->
    <div v-if="activeTab===0" class="hamburger" @click="activeTab=1">
        <span class="hamburger__span hamburger__span--first"></span>
        <span class="hamburger__span hamburger__span--second"></span>
        <span class="hamburger__span hamburger__span--third"></span>
    </div>
    <div v-else class="hamburger close" @click="activeTab=0">
        <span class="hamburger__span hamburger__span--second"></span>
        <span class="hamburger__span hamburger__span--third"></span>
    </div>
    <!--  MENU  -->
        <div class="menu" :class="{'open':activeTab===1}">
        <ul>
            <li class="menu__li--first" :class="{'open':activeTab===1}" @click="activeTab=0">
            <a href="/#presentation">PRÉSENTATION_</a>
            </li>
            <li class="menu__li--third" :class="{'open':activeTab===1}" @click="activeTab=0">
            <a href="/#competences">COMPÉTENCES_</a>
            </li>
            <li class="menu__li--fourth" :class="{'open':activeTab===1}" @click="activeTab=0">
            <a href="/#projets">MES PROJETS_</a>
            </li>
            <li class="menu__li--fourth" :class="{'open':activeTab===1}" @click="activeTab=0">
            <a href="#">ME CONTACTER_</a>
            </li>
        </ul>
        </div>
        <!--  BG NAV  -->
        <div class="bg-menu-animated">
        <div class="bg-menu-animated__div-first" :class="{'open':activeTab===1}"></div>
        <div class="bg-menu-animated__div-second" :class="{'open':activeTab===1}"></div>
        <div class="bg-menu-animated__div-third" :class="{'open':activeTab===1}"></div>
        </div>
    </header>
</template>

<script>
  export default {
    name: "headerMenu",

    data() {
      return{
      activeTab: 0
      };
      
    },
  };
</script>