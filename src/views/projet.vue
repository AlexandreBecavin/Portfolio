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
        <h3>Présentation</h3>
        <p>{{projet.presentation}}</p>
        <p class='infogras'>Année</P>
        <p class='info'>{{projet.Annee}}</P>
        <p class='infogras'>Client</p>
        <p class='info'>{{projet.Client}}</p>
        <h3>Mes missions</h3>
        <p v-html="projet.Mission">{{projet.Mission}}</P>
        <h3>Outils utilisés</h3>
        <div class='container_logi'>
          <div v-for="(logi, i) in projet.logiciel" :key="i" class='list_logi' target="_blank">
            <img :src="logi.img_logiciel" class='img_projet'/>
            <p>{{logi.titre_logiciel}}</p>
          </div>
        </div>
        <div class="lien_projet">
          <div v-for="(btn, i) in projet.bouton_plus" :key="i" target="_blank">
 
            <a v-if="btn.lien_site == 'false'" target="_blank" :href="btn.lien_btn" :download="btn.titre" class='btn btn2'>{{btn.titre_btn}}</a>

            <a v-else v-bind:href="btn.lien_btn" class='btn btn_site' target="_blank">{{btn.titre_btn}}</a>

            

          </div> 
        </div>
      </div>
    </div>

    <div class='list_projet decouvrir'>
      <Titre
          v-bind:Titre='titre1'
        />

      <div class='test'>
        <div class='contenu_projet'>
          <div v-for="(info_projet, i) in projet.List_projet" :key="i" class="projet" target="_blank">
            <img :src="info_projet.lien_image" class='img_projet'/>
            <div class='detail_projet'>
              <div>
                <h3>{{info_projet.titre}}</h3>
                <router-link :to="{ name: 'projet', params: { msg: info_projet.lien_btn }}"><img :src="require('../assets/img/icon/recherche.svg')" class='icon_reseau'/>Voir le projet</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>






<script>
import Titre from '../components/titre.vue'

export default {
  name: 'projet',

  components: {
    Titre,
  },

  data() {
      return {
          projet: 'Portfolio',
          titre1: 'À Découvrir_',
          Portfolio:
            {
              img_presentation: require('../assets/img/projet/Portfolio/bg_portfolio.webp'),
              alt_img_presentation: 'Image portfolio',
              Titre: 'Portfolio',
              img_projet: require('../assets/img/projet/Portfolio/img_portfolio1.webp'),
              alt_projet: 'Portfolio',
              presentation: "Mon portfolio est un projet créé en 3 semaines, mise à jour régulièrement que ce soit contenu ou code. Son objectif est de promouvoir mes compétences sur des personnes ou une entreprise. Il a comme but de m’aider dans ma recherche de stage et d'alternance.",
              Annee: '2020',
              Client: 'Personnel',
              Mission: "<b>Graphisme :</b><ul><li>Création d'identité visuelle (typo, couleur, logo).</li><li>Création du zoning du site.</li><li>Création des maquettes fonctionnelles.</li><li>Création des maquettes graphiques.</li></ul><b>Développement :</b> <ul><li>Développement du site sous Vuejs.</li><li>Hébergement du site sur Netlify.</li><li>Optimisation des performances du site.</li></ul><b>Contenu :</b><ul><li>Rédaction des contenus.</li><li>Création des mockup pour les images.</li><li>Conversion des images en webp.</li></ul>",
              logiciel:[
                {
                  img_logiciel: require('../assets/img/outils/Xd.webp'),
                  titre_logiciel: 'AdobeXD',
                },
                {
                  img_logiciel: require('../assets/img/outils/Illustrator.webp'),
                  titre_logiciel: 'Adobe illustrator',
                },
                {
                  img_logiciel: require('../assets/img/outils/Vuejs.webp'),
                  titre_logiciel: 'Vuejs',
                },
                {
                  img_logiciel: require('../assets/img/outils/Html.webp'),
                  titre_logiciel: 'Html',
                },
                {
                  img_logiciel: require('../assets/img/outils/Css.webp'),
                  titre_logiciel: 'Css',
                },
              ],
              bouton_plus:[
                {
                  titre_btn: 'Téléchager le projet',
                  lien_btn: 'https://github.com/AlexandreBecavin/Portfolio',
                  lien_site: 'false',
                  titre: 'Portfolio',
                },
                {
                  titre_btn: 'Voir le site',
                  lien_btn: 'https://alexandrebecavin.netlify.app/',
                  lien_site: 'true',
                  titre: 'portfolio',
                },
              ],

              List_projet:[
                {
                  lien_image: require('../assets/img/projet/Briquestore/IMEA_Briquestore.webp'),
                  titre: 'Briquestore',
                  lien_btn: 'Briquestore'
                },
                {
                  lien_image: require('../assets/img/projet/La_rencontre/IMEA_la-rencontre.webp'),
                  titre: 'La Rencontre',
                  lien_btn: 'La_rencontre'
                },
                {
                  lien_image: require('../assets/img/projet/Student_lab/IMEA_student_lab.webp'),
                  titre: "Student lab'",
                  lien_btn: 'Student_lab'
                },
              ]
            },
            
            Briquestore:
            {
              img_presentation: require('../assets/img/projet/Briquestore/bg_Briquestore.webp'),
              alt_img_presentation: 'Image portfolio',
              Titre: 'Briquestore',
              img_projet: require('../assets/img/projet/Briquestore/img_Briquestore1.webp'),
              alt_projet: 'Briquestore',
              presentation: "Briquestore est un projet réalisé durant mon stage chez ACWD. Le projet s'est étalé sur une durée de 2 mois. Le contrat de l'entreprise ACWD était une refonte du site de Briquestore (site e-commerce de Lego). L'objectif était de migrer le prestashop 1.6 du site en 1.7 tout en gardant le design actuel.",
              Annee: '2020',
              Client: 'Briquestore',
              Mission: "<b>Développement :</b><br><ul><li>Programme PHP, SQL pour exporter les produits du prestashop 1.6 vers 1.7</li><li>Développement du thème personnaliser 1.6 en 1.7</li><li>Modification du back office</li></u><b>Gestion de projet :</b><br><ul><li>diagramme de GANTT</li><li>réunion avec le client</li></ul><b>Résultat :</b><br><ul><li>Le site était fini a 90% avant la fin de mon stage et l'entreprise était content de mon travail.</ul></li>",
              logiciel:[
                {
                  img_logiciel: require('../assets/img/outils/drive.webp'),
                  titre_logiciel: 'Google drive',
                },
                {
                  img_logiciel: require('../assets/img/outils/trello.webp'),
                  titre_logiciel: 'Trello',
                },
                {
                  img_logiciel: require('../assets/img/outils/Github.webp'),
                  titre_logiciel: 'Github',
                },
                {
                  img_logiciel: require('../assets/img/outils/Prestashop.webp'),
                  titre_logiciel: 'Prestashop',
                },
                {
                  img_logiciel: require('../assets/img/outils/Html.webp'),
                  titre_logiciel: 'Html',
                },
                {
                  img_logiciel: require('../assets/img/outils/Css.webp'),
                  titre_logiciel: 'Css',
                },
                {
                  img_logiciel: require('../assets/img/outils/javascript.webp'),
                  titre_logiciel: 'Javascript',
                },
              ],

              bouton_plus:[
                {
                  titre_btn: 'Voir le site',
                  lien_btn: 'https://www.briquestore.fr/fr/',
                  lien_site: 'true',
                  titre: 'Briquestore',
                },
              ],

              List_projet:[
                {
                  lien_image: require('../assets/img/projet/Portfolio/IMEA_portfolio.webp'),
                  titre: 'Portfolio',
                  lien_btn: 'Portfolio'
                },
                {
                  lien_image: require('../assets/img/projet/La_rencontre/IMEA_la-rencontre.webp'),
                  titre: 'La Rencontre',
                  lien_btn: 'La_rencontre'
                },
                {
                  lien_image: require('../assets/img/projet/Student_lab/IMEA_student_lab.webp'),
                  titre: "Student lab'",
                  lien_btn: 'Student_lab'
                },
              ]
            },

            La_rencontre:
            {
              img_presentation: require('../assets/img/projet/La_rencontre/bg_LaRencontre.webp'),
              alt_img_presentation: 'Image portfolio',
              Titre: 'La Rencontre',
              img_projet: require('../assets/img/projet/La_rencontre/img_LaRencontre.webp'),
              alt_projet: 'La Rencontre',
              presentation: "La rencontre est un projet d’études de première année. Le site à été créé durant mes 3 semaines de partiel. Accompagnés de 3 étudiants, nous avons réalisé un site communautaire sur le thème du sport. Le site propose de discuter virtuellement avec d'autres utilisateurs sur un sport, un match, une équipe, ou autre thème.",
              Annee: '2019 / 2020',
              Client: 'Étude',
              Mission: '<b>Graphisme :</b><ul><li>Réalisation de maquettes graphique</li></ul><b>Développement</b><ul><li>Développement du site en HTML, CSS, JavaScript, PHP, SQL.</li><li>Site responsive</li></ul><b>Gestion de projet :</b><ul><li>Gestion du trello</li></ul>',
              logiciel:[
                {
                  img_logiciel: require('../assets/img/outils/trello.webp'),
                  titre_logiciel: 'Trello',
                },
                {
                  img_logiciel: require('../assets/img/outils/Illustrator.webp'),
                  titre_logiciel: 'Adobe illustrator',
                },
                {
                  img_logiciel: require('../assets/img/outils/Xd.webp'),
                  titre_logiciel: 'Adobe xd',
                },
                {
                  img_logiciel: require('../assets/img/outils/Html.webp'),
                  titre_logiciel: 'Html',
                },
                {
                  img_logiciel: require('../assets/img/outils/Css.webp'),
                  titre_logiciel: 'Css',
                },
                {
                  img_logiciel: require('../assets/img/outils/javascript.webp'),
                  titre_logiciel: 'Javasript',
                },
              ],
              bouton_plus:[
                {
                  titre_btn: 'Telecharger le dossier',
                  lien_btn: require('../assets/dossier_projet/La_rencontre.zip'),
                  lien_site: 'false',
                  titre: 'La_rencontre.zip',
                },
                {
                  titre_btn: 'Voir le site',
                  lien_btn: '#',
                  lien_site: 'true',
                  titre: 'La rencontre',
                },
              ],
              List_projet:[
                {
                  lien_image: require('../assets/img/projet/Portfolio/IMEA_portfolio.webp'),
                  titre: 'Portfolio',
                  lien_btn: 'Portfolio'
                },
                {
                  lien_image: require('../assets/img/projet/Briquestore/IMEA_Briquestore.webp'),
                  titre: 'Briquestore',
                  lien_btn: 'Briquestore'
                },
                {
                  lien_image: require('../assets/img/projet/Student_lab/IMEA_student_lab.webp'),
                  titre: "Student lab'",
                  lien_btn: 'Student_lab'
                },
              ]
            },

            Student_lab:
            {
              img_presentation: require('../assets/img/projet/Student_lab/bg_student_lab.webp'),
              alt_img_presentation: "Image Page d'accueil student lab'",
              Titre: "Student lab'",
              img_projet: require('../assets/img/projet/Student_lab/img_student_lab.webp'),
              alt_projet: "Image du site student lab'",
              presentation: "Student lab’ est challenge inter école. Le site devait mettre en avant les projets étudiants. Par groupe de 4 étudiants nous avions 1 semaines pour réaliser un site qui correspond à leur demande. C’est-à-dire mettre en avant les projets étudiants, un site accessible pour tous les handicapes, un site UX et UI.",
              Annee: '2020',
              Client: 'Étude',
              Mission: '<b>Graphisme :</b><ul><li>Création de maquettes fonctionnelles</li><li>Création de maquettes graphiques</li></ul><b>Développement</b><ul><li>Intégration des pages (HTML, CSS, JS)</li><li>Site accessible pour tous les utilisateurs</li></ul><b>Gestion de projet</b><ul><li>Gestion du trello</li><li>Gestion de la partie développement de mon groupe</li></ul><b>Résultat</b><ul><li>Arrivé 2ème lors des résultats de l’école mais sélectionné par l’école.</li></ul>',
              logiciel:[
                {
                  img_logiciel: require('../assets/img/outils/trello.webp'),
                  titre_logiciel: 'Trello',
                },
                {
                  img_logiciel: require('../assets/img/outils/Illustrator.webp'),
                  titre_logiciel: 'Adobe illustrator',
                },
                {
                  img_logiciel: require('../assets/img/outils/Xd.webp'),
                  titre_logiciel: 'Adobe xd',
                },
                {
                  img_logiciel: require('../assets/img/outils/Html.webp'),
                  titre_logiciel: 'Html',
                },
                {
                  img_logiciel: require('../assets/img/outils/Css.webp'),
                  titre_logiciel: 'Css',
                },
                {
                  img_logiciel: require('../assets/img/outils/javascript.webp'),
                  titre_logiciel: 'Javasript',
                },
              ],
              bouton_plus:[
                {
                  titre_btn: 'Telecharger le dossier',
                  lien_btn: require("../assets/dossier_projet/Student_lab.zip"),
                  lien_site: 'false',
                  titre: "Student_lab.zip",
                },
                {
                  titre_btn: 'Voir le site',
                  lien_btn: '#',
                  lien_site: 'true',
                  titre: 'Student lab',
                },
              ],
              List_projet:[
                {
                  lien_image: require('../assets/img/projet/Portfolio/IMEA_portfolio.webp'),
                  titre: 'Portfolio',
                  lien_btn: 'Portfolio'
                },
                {
                  lien_image: require('../assets/img/projet/Briquestore/IMEA_Briquestore.webp'),
                  titre: 'Briquestore',
                  lien_btn: 'Briquestore'
                },
                {
                  lien_image: require('../assets/img/projet/La_rencontre/IMEA_la-rencontre.webp'),
                  titre: 'La Rencontre',
                  lien_btn: 'La_rencontre'
                },
              ]
            },

      }
  },

  mounted() {
    if (this.$route.params.msg) {
        this.projet = this.persist(this.$route.params.msg);
    }else{
      console.log('1');
    }
  },

  watch: { 
     '$route.params.msg': {
        handler: function(msg) {
           this.projet = this.persist(msg);
        },
        deep: true,
        immediate: true
      }
  },


  methods:{
    persist(msg) {
      if(msg == 'Portfolio'){
        return this.Portfolio;
      }else if(msg == 'Briquestore'){
        return this.Briquestore;
      }else if(msg == 'La_rencontre'){
        return this.La_rencontre;
      }else if(msg == 'Student_lab'){
        return this.Student_lab;
      }
    },
  }

}
</script>

<style lang="scss">
    // style menu
    @import '../assets/styles/projet.css';
</style>
