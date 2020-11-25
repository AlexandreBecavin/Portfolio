<template>
  <div class="home">
    <div class="bg_image">
    <v-container>
      <div class='text_flex'>
        <div></div>
        <div class='container_header'>
          <p class='subtitle'>Salut</p>
          <h2 class='Primary_title'>Je suis alexandre becavin_</h2>
          <a href='#' class='btn'>Mon cv</a>
        </div>
        <div class='container-icon'>
          <div class='icon'>
            <a href='#'><v-icon>mdi-twitter</v-icon></a>
            <a href='#'><v-icon>mdi-linkedin</v-icon></a>
            <a href='#'><v-icon>mdi-github</v-icon></a>
            <a href='#'><v-icon>mdi-email</v-icon></a>
          </div>
        </div>
      </div>
      <div class="scroll-downs">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </div>
    </v-container>
    </div>
    
    <v-container id='presentation' class='lien_section'>
      <div class='titre_section'>
        <p class='text_deco'>Présentation_</p>
        <h2 class='titre_2'>Présentation_</h2>
      </div>
      
      <div class='contenu_pres'>
        <p>Je m'appelle Alexandre, j'ai 19 ans et je suis passionné par le domaine du numérique depuis plusieurs années. C'est pour cela quand entrant au lycée je suis allé en Sti2D option SIN (Système d'information et numérique). Pendant ces années j'ai pu apprendre plusieurs langages tels que python, HTML/CSS, Java. À la fin de ces deux années j'ai eu mon Bac et je me suis orienté vers l'école MyDigitalSchool à Angers. Actuellement en deuxième année de cycle veb et digital. Voilà mon parcours !</P>
         <img :src="require('../assets/img/carte_de_visite.png')"/>
      </div>

    </v-container>

    <div class='block_dark lien_section' id='competences'>
      <v-container >
        <div class='titre_section'>
          <p class='text_deco dark'>Compétences_</p>
          <h2 class='titre_2'>Compétences_</h2>
        </div>
          <competences/>
        <div>
        
        </div>

      </v-container>
    </div>

     <v-container id='projets' class='lien_section'>
        <div class='titre_section'>
          <p class='text_deco'>Mes projets_</p>
          <h2 class='titre_2'>Mes projets_</h2>
        </div>

        <div class='test'>

          <div class='contenu_projet'>
              <div v-for="(projet, i) in List_projet" :key="i" class="projet" target="_blank">
                <img :src="projet.lien_image" class='img_projet'/>
                <div class='detail_projet'>
                  <div>
                    <h3>{{projet.titre}}</h3>
                    <router-link :to="{ name: 'projet', params: { msg: projet.lien_btn }}"><v-icon>mdi-magnify</v-icon>Voir le projet</router-link>
                  </div>
                </div>
              </div>
          </div>
        

          <!--<img :src="require('../assets/img/projet/IMEA_portfolio.png')" alt=""/>
          <router-link :to="{ name: 'projet', params: { msg } }"> Go to your profile</router-link>-->
        </div>
      </v-container>


      <div class='block_dark lien_section' id='contact'>
        <v-container >
          <div class='titre_section'>
            <p class='text_deco dark'>Me contacter_</p>
            <h2 class='titre_2'>Me contacter_</h2>
          </div>
            
          <div class='container_form'>
            <div>
              <form class='form_contact'>
                <div>
                  <label>Nom Prénom</label>
                  <input type='text' name='nom_prenom'/>
                </div>
                <div>
                  <label>Email</label>
                  <input type='email' name='email'/>
                </div>
                <div>
                  <label>Message</label>
                  <textarea></textarea>
                </div>
                <div>
                  <input type='submit' name='Envoyer'>
                </div>
              </form>
            </div>
            <div>
              <h3>Pour me joindre autrement</h3>
              <p>alexandre.becavin@gmail.com</p>
              <div class='container-icon'>
                <div class='icon'>
                  <a href='#'><v-icon>mdi-twitter</v-icon></a>
                  <a href='#'><v-icon>mdi-linkedin</v-icon></a>
                </div>
              </div>
            </div>
          </div>

        </v-container>
      </div>


  </div>
</template>

<script>
import competences from '../components/competences.vue'
//import listProjet from '../components/listProjet.vue'

export default {
  name: 'Home',
  
  components: {
    competences,
    //listProjet,
  },

   data: () => ({
      List_projet: [
        {
          lien_image: require('../assets/img/miniature_projet/IMEA_portfolio.png'),
          titre: 'Portfolio',
          lien_btn: 'projet1'
        },
        {
          lien_image: require('../assets/img/miniature_projet/IMEA_Briquestore.png'),
          titre: 'Briquestore',
          lien_btn: 'projet2'
        },
        {
          lien_image: require('../assets/img/miniature_projet/IMEA_larencontre.jpg'),
          titre: 'La Rencontre',
          lien_btn: 'projet3'
        },
      ],  
    }),

};
</script>

<!--<script src="https://kit.fontawesome.com/fd0ac913f8.js" crossorigin="anonymous"></script>-->

<style lang="scss">
    // style menu
    @import '../assets/styles/home.css';
</style>
