<template>

  <div class="projet">
    <div class='header_projet'>
      <img :src="projet.img_presentation" v-bind:alt='projet.alt_img_presentation' class='img_projet'/>
      <h2>{{projet.Titre}}</h2>
    </div>
    <div class="scroll-downs">
      <div class="mousey">
        <div class="scroller"></div>
      </div>
    </div>
    <div class='presentation_projet'>
      <div>
        <img :src="projet.img_projet" v-bind:alt='projet.alt_projet' class='img_projet'/>
      </div>
      <div>
        <p>{{projet.presentation}}</p>
        <p class='infogras'>Année</P>
        <p class='info'>{{projet.Annee}}</P>
        <p class='infogras'>Client</p>
        <p class='info'>{{projet.Client}}</p>
        <p>{{projet.Mission}}</P>
      </div>
    </div>

    <div class='list_projet'>
      <div class='titre_section'>
        <p class='text_deco'>À Découvrir_</p>
        <h2 class='titre_2'>À Découvrir_</h2>
      </div>

      <div class='test'>
        <div class='contenu_projet'>
          <div v-for="(info_projet, i) in projet.List_projet" :key="i" class="projet" target="_blank">
            <img :src="info_projet.lien_image" class='img_projet'/>
            <div class='detail_projet'>
              <div>
                <h3>{{info_projet.titre}}</h3>
                <router-link :to="{ name: 'projet', params: { msg: info_projet.lien_btn }}"><v-icon>mdi-magnify</v-icon>Voir le projet</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>






<script>
export default {
  name: 'projet',
  props: ['msg'],
  data() {
      return {
          projet: 'projet1',
          projet1:
            {
              img_presentation: require('../assets/img/projet/bg_portfolio.jpg'),
              alt_img_presentation: 'Image portfolio',
              Titre: 'Portfolio',
              img_projet: require('../assets/img/projet/img_portfolio1.jpg'),
              alt_projet: 'Portfolio',
              presentation: 'Mon portfolio est un projet d’une durée d’environ 3 semaines. L’objectif de ce portfolio est de promouvoir mes compétences au sein d’entreprise ou de personne. Il est aussi là pour appuyer ma recherche de stage et d’alternance en mettent en avant des sites crées.',
              Annee: '2020',
              Client: 'Personnel',
              Mission: 'Pour ce portfolio j’ai réalisé les maquettes de toutes les pages du site, détaillé le contenu du site et développer le site (vueJs, html, css). L’enjeux de ce projet est de valider le cours « création de portfolio » mais aussi de m’aider dans le future pour mon avenir professionnel. ',
              logiciel:[
                {
                  img_logiciel: require('../assets/img/miniature_projet/IMEA_portfolio.png'),
                  titre_logiciel: 'AdobeXD',
                },
                {
                  img_logiciel: require('../assets/img/miniature_projet/IMEA_portfolio.png'),
                  titre_logiciel: 'AdobeXD',
                },
                {
                  img_logiciel: require('../assets/img/miniature_projet/IMEA_portfolio.png'),
                  titre_logiciel: 'AdobeXD',
                },
              ],
              List_projet:[
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
              ]
            },
            
            projet2:
            {
              img_presentation: require('../assets/img/projet/bg_Briquestore.jpg'),
              alt_img_presentation: 'Image portfolio',
              Titre: 'Briquestore',
              img_projet: require('../assets/img/projet/img_Briquestore1.jpg'),
              alt_projet: 'Briquestore',
              presentation: 'Briquestore est un projet obtenu durant mon stage chez ACWD. Il a duré environ 2 mois. Le contrat de l’entreprise ACWD était une refonte du site Briquestore (site e-commerce de lego). L’objectif était de garder le style graphique mais de passer sur une version de PrestaShop plus récente (1.6 vers 1.7).',
              Annee: '2020',
              Client: 'Briquestore',
              Mission: 'Durant ce projet, je me suis occupée de différentes tâches. Ma première mission était planifiée le projet avec un Gantt pour connaître le temps de travail ainsi que la date du début et de fin du projet. Ma seconde mission était de créer un programme Php qui permettait d’export tous les produits, catégories, taxe… de la base de données 1.6 vers celle de la 1.7. Enfin ma dernière mission était le développement du site site (intégration des pages, modification du back office pour correspondre au besoin clients). Sur ce projet j’ai mis en pratique mes compétences de gestion de projets et de développement. L’objectif de ce projet était de permettre à l’entreprise de gagner de l’argent mais aussi mettre mes compétences en application sur un projet réel. Je n’ai malheureusement pas pu assister à la fin du projet car mon stage c’est terminer avant. Le site était fini à 90% et l’entreprise était très satisfaite et m’a même proposé une alternance.',
              logiciel:[
                {
                  img_logiciel: require('../assets/img/miniature_projet/IMEA_portfolio.png'),
                  titre_logiciel: 'AdobeXD',
                },
                {
                  img_logiciel: require('../assets/img/miniature_projet/IMEA_portfolio.png'),
                  titre_logiciel: 'AdobeXD',
                },
                {
                  img_logiciel: require('../assets/img/miniature_projet/IMEA_portfolio.png'),
                  titre_logiciel: 'AdobeXD',
                },
              ],
              List_projet:[
                {
                  lien_image: require('../assets/img/miniature_projet/IMEA_portfolio.png'),
                  titre: 'Portfolio',
                  lien_btn: 'projet1'
                },
                {
                  lien_image: require('../assets/img/miniature_projet/IMEA_larencontre.jpg'),
                  titre: 'La Rencontre',
                  lien_btn: 'projet3'
                },
              ]
            },

            projet3:
            {
              img_presentation: require('../assets/img/projet/bg_LaRencontre.jpg'),
              alt_img_presentation: 'Image portfolio',
              Titre: 'La Rencontre',
              img_projet: require('../assets/img/projet/img_LaRencontre.jpg'),
              alt_projet: 'La Rencontre',
              presentation: 'La rencontre est un projet de partiel d’une durée de 3 semaines. Accompagnées de 3 autres étudiants nous avons réalisé un site communautaire sur le thème du sport. Le site permet de discuter avec d’autres personnes sur un sport, un match, une équipe ou autres.',
              Annee: '2019 / 2020',
              Client: 'Personnel / Étude',
              Mission: 'Durant ce projet, j’ai réalisé la maquette page sélection sport, l’intégration de ¾ des pages du site, et le développement back du site (chat, liste des groupes, Connexion/Inscription). Pour réaliser ces tâches j’ai utilisé plusieurs compétences (Gestion de projet, Création de maquettes, Développement html, css, js,php). L’enjeux de ce projet était de valider ma première année au sein de My Digital School. À la fin de ces partiels mon année a été validée. Nous avons fini d’intégrer entièrement notre projet ainsi que les fonctionnalités principales. Une stratégie de communication avait aussi été installée par mes coéquipiers',
              logiciel:[
                {
                  img_logiciel: require('../assets/img/miniature_projet/IMEA_portfolio.png'),
                  titre_logiciel: 'AdobeXD',
                },
                {
                  img_logiciel: require('../assets/img/miniature_projet/IMEA_portfolio.png'),
                  titre_logiciel: 'AdobeXD',
                },
                {
                  img_logiciel: require('../assets/img/miniature_projet/IMEA_portfolio.png'),
                  titre_logiciel: 'AdobeXD',
                },
              ],
              List_projet:[
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
              ]
            },
      }
  },

  mounted() {
    console.log(this.msg);
      if (this.msg) {
          this.projet = this.test(this.msg);
      }
  },

  methods:{
    test: function (msg) {
      if(msg == 'projet1'){
        return this.projet1;
      }else if(msg == 'projet2'){
        return this.projet2;
      }else if(msg == 'projet3'){
        return this.projet3;
      }
    }
  }

}
</script>

<style lang="scss">
    // style menu
    @import '../assets/styles/projet.css';
</style>
