<template>
  <div class="home">
    <div class="bg_image">
    <v-container>
      <div class='text_flex'>
        <div></div>
        <div class='container_header'>
          <p class='subtitle'>Bonjour,</p>
          <h1 class='Primary_title'>Je suis alexandre becavin_</h1>
           <a :href="require('../assets/Cv_alexandre2020.pdf')" download="Cv_alexandre2020.pdf" class='btn'>Mon cv</a>
        </div>
        <div class='container-icon'>
          <div class='icon'>
            <a href='https://twitter.com/AlexBecavin' target="_blank"  rel="noreferrer noopener"><img :src="require('../assets/img/icon/twitter.svg')" alt="Réseau twitter" class='icon_reseau'/></a>
            <a href='https://www.linkedin.com/in/alexandre-becavin-2b2a50193/' target="_blank"  rel="noreferrer noopener"><img :src="require('../assets/img/icon/linkedin.svg')" alt="Réseau linkedin" class='icon_reseau'/></a>
            <a href='https://github.com/AlexandreBecavin' target="_blank" rel="noreferrer noopener"><img :src="require('../assets/img/icon/github.svg')" alt="Réseau github" class='icon_reseau'/></a>
            <a href='mailto:alexandre.becavin@gmail.com' target="_blank" rel="noreferrer noopener"><img :src="require('../assets/img/icon/mail.svg')" alt="Réseau mail" class='icon_reseau'/></a>
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

      <Titre v-bind:Titre='titre1' /> 

      <div class='contenu_pres'>
        <p>Je m'appelle Alexandre, j'ai 19 ans et je suis passionné par le domaine du numérique depuis plusieurs années. C'est pour cela quand entrant au lycée je suis allé en Sti2D option SIN (Système d'information et numérique). Pendant ces années j'ai pu apprendre plusieurs langages tels que python, HTML/CSS, Java. À la fin de ces deux années j'ai eu mon Bac et je me suis orienté vers l'école MyDigitalSchool à Angers. Actuellement en deuxième année de cycle veb et digital. Voilà mon parcours !</P>
         <img :src="require('../assets/img/Carte_de_visite.webp')" alt="" rel="preload"/>
      </div>

    </v-container>

    <div class='block_dark lien_section' id='competences'>
      <v-container >

        <Titre
          v-bind:Titre='titre2'
         /> 

          <competences/>
        <div>
        
        </div>

      </v-container>
    </div>

    <v-container id='projets' class='lien_section'>
      <Titre
        v-bind:Titre='titre3'
      /> 

      <div class='test'>

        <div class='contenu_projet'>
          <div v-for="(projet, i) in List_projet" :key="i" class="projet">
            <img :src="projet.lien_image" class='img_projet' rel="preload" alt=''/>
            <router-link :to="`/projet/${projet.lien_btn}`">
              <div class='detail_projet'>
                <div>
                  <h3>{{projet.titre}}</h3>
                  <p>{{projet.date}}</p>
                  <div class='voir_projet'>
                    <img :src="require('../assets/img/icon/recherche.svg')" class='icon_reseau' rel="preload" alt=''/>
                    <p>Voir le projet</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </v-container>

    <div id='contact'>
      <footerReseau/>
    </div>

  </div>
</template>

<script>
import competences from '../components/competences.vue'
import Titre from '../components/titre.vue'
import footerReseau from '../components/footerReseau.vue'

//import listProjet from '../components/listProjet.vue'
let ROOT_PATH = 'https://alexandrebecavin.netlify.app';

export default {
  name: 'Home',
  
  components: {
    competences,
    Titre,
    footerReseau,
    //listProjet,
  },
  

   data: () => ({
      List_projet: [
        {
          lien_image: require('../assets/img/projet/FilaoPrint/bg_filaoPrint.webp'),
          titre: 'FilaoPrint',
          lien_btn: 'filaoprint',
          date: '2022'
        },
        {
          lien_image: require('../assets/img/projet/Portfolio/IMEA_portfolio.webp'),
          titre: 'Portfolio',
          lien_btn: 'portfolio',
          date: '2020'
        },
        {
          lien_image: require('../assets/img/projet/Briquestore/IMEA_Briquestore.webp'),
          titre: 'Briquestore',
          lien_btn: 'briquestore',
          date: '2020'
        },
        {
          lien_image: require('../assets/img/projet/La_rencontre/IMEA_la-rencontre.webp'),
          titre: 'La Rencontre',
          lien_btn: 'la_rencontre',
          date: '2020'
        },
        {
          lien_image: require('../assets/img/projet/Student_lab/IMEA_student_lab.webp'),
          titre: "Student lab'",
          lien_btn: 'student_lab',
          date: '2020'
        },
        {
          lien_image: require('../assets/img/projet/QG-Amboise/IMEA_QG-amboise.webp'),
          titre: 'QG-Amboise',
          lien_btn: 'qg_amboise',
          date: '2020'
        },
      ],  

      titre1: 'Présentation_',
      titre2: 'Compétences_',
      titre3: 'Mes projets_',
      titre4: 'Me contacter_',

    }),

    metaInfo () {
      return {
        title: 'Portfolio de Alexandre BECAVIN - Développeur Web & Webdesigner',
        meta: [
          { charset: 'utf-8' },
          { vmid: 'description', name: 'description', content: "Bienvenue sur le portfolio d'Alexandre BECAVIN. Venez consulter et découvrir mes projets et mes compétences." },
          { property: 'og:title', content: "Portfolio de Alexandre BECAVIN - Développeur Web & Webdesigner"},
          { property: 'og:site_name', content: 'Alexandre_BECAVIN'},
          { property: 'og:type', content: 'website'},  
          { property: 'og:url', content: 'https://alexandrebecavin.netlify.app/'},   
          { property: 'og:image', content: ROOT_PATH + require('../assets/img/projet/Portfolio/IMEA_portfolio.webp')},   
          { name: 'robots', content: 'index,follow'} 
        ]
      }
    },

    mounted(){

      // annimation titre au scroll
      const intersectionClassHandler = el => el.isIntersecting ? el.target.classList.add('visible') : el.target.classList.remove('visible');
      const handleIntersect = entries => entries.forEach(el => intersectionClassHandler(el));
      const intersectionSettings = {
        root: null,
        rootMargin: "-10%"
      }
      const io = new IntersectionObserver(handleIntersect, intersectionSettings);
      document.querySelectorAll('.titre_section').forEach(el => io.observe(el));

      // annimation compétences au scroll
      const section_competences = el => el.isIntersecting ? el.target.classList.add('visible') : el.target.classList.remove('visible');
      const competences = entries => entries.forEach(el => section_competences(el));
      const ApparitionSettings = {
        root: null,
        rootMargin: "-10%"
      }
      const competence = new IntersectionObserver(competences, ApparitionSettings);
      document.querySelectorAll('.contenu_competences').forEach(el => competence.observe(el));


    }

};
</script>


<!--<script src="https://kit.fontawesome.com/fd0ac913f8.js" crossorigin="anonymous"></script>-->

<style lang="scss">
    // style menu
    @import '../assets/styles/home.css';
</style>
