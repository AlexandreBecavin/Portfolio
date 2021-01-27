<template>
   <footer class='block_dark section_footer' id='contact'>
      <v-container>
        <Titre
          v-bind:Titre='titre4'
        />
        <ul class='lien_contact'>
          <li><a href='https://twitter.com/AlexBecavin' target="_blank" rel="noreferrer noopener"><img :src="require('../assets/img/icon/twitter.svg')" alt="" class='icon_reseau'/>Twitter</a></li>
          <li><a href='https://www.linkedin.com/in/alexandre-becavin-2b2a50193/' target="_blank" rel="noreferrer noopener"><img :src="require('../assets/img/icon/linkedin.svg')" alt="" class='icon_reseau'/>Linkedin</a></li>
          <li><a href='mailto:alexandre.becavin@gmail.com' target="_blank" rel="noreferrer noopener"><img :src="require('../assets/img/icon/mail.svg')" alt="" class='icon_reseau'/>Mail</a></li>
        </ul>
        <p class='Copyright'>Copyright © 2020 Alexandre Becavin - Tous droits réservés.</p>
      </v-container>
    </footer>
</template>

<script>
import Titre from '../components/titre.vue'
  export default {
    name: 'footerReseau',
    components: {
      Titre,
    },

    data: () => ({
     titre4: 'Contact',
    }),
  }
</script>



