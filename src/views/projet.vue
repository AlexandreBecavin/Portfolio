<template>

  <div class="projet">
    <div class='header_projet'>
      <img :src="projet.img_presentation" v-bind:alt='projet.alt_img_presentation' class='img_projet'/>
      <h1>{{projet.Titre}}</h1>
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
        <h2>Présentation</h2>
        <p>{{projet.presentation}}</p>
        <p class='infogras'>Année</P>
        <p class='info'>{{projet.Annee}}</P>
        <p class='infogras'>Client</p>
        <p class='info'>{{projet.Client}}</p>
        <h2>Mes missions</h2>
        <p v-html="projet.Mission">{{projet.Mission}}</P>
        <h2>Outils utilisés</h2>
        <div class='container_logi'>
          <div v-for="(logi, i) in projet.logiciel" :key="i" class='list_logi'>
            <img :src="logi.img_logiciel" class='img_projet' v-bind:alt='projet.titre_logiciel'/>
            <p>{{logi.titre_logiciel}}</p>
          </div>
        </div>
        <div class="lien_projet">
          <div v-for="(btn, i) in projet.bouton_plus" :key="i">
 
            <a v-if="btn.lien_site == 'false'" target="_blank" rel="noreferrer noopener" :href="btn.lien_btn" :download="btn.titre" class='btn btn2'>{{btn.titre_btn}}</a>

            <a v-else v-bind:href="btn.lien_btn" class='btn btn_site' target="_blank" rel="noreferrer noopener">{{btn.titre_btn}}</a>

            

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
          <div v-for="(info_projet, i) in projet.List_projet" :key="i" class="projet" >
            <img :src="info_projet.lien_image" class='img_projet' alt=''/>
            <router-link :to="{ name: 'projet', params: { msg: info_projet.lien_btn }}">
              <div class='detail_projet'>
                <div>
                  <h3>{{info_projet.titre}}</h3>
                  <div class='voir_projet'>
                    <img :src="require('../assets/img/icon/recherche.svg')" class='icon_reseau' alt=''/>
                    <p>Voir le projet</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <footerReseau/>

  </div>

</template>






<script>
import Titre from '../components/titre.vue'
import footerReseau from '../components/footerReseau.vue'
import contenu_projet from '../assets/json/projet.json'

let ROOT_PATH = 'https://alexandrebecavin.netlify.app';
export default {
  name: 'projet',

  components: {
    Titre,
    footerReseau,
  },

  data() {
    return {
      projet: 'portfolio',
      titre1: 'À Découvrir_',
      Contenu_projet: contenu_projet,
    }
  },

  metaInfo () {
    return {
      title: this.projet.title,
      meta: [
        { charset: 'utf-8' },
        { vmid: 'description', name: 'description', content: this.projet.description },
        { property: 'og:title', content: this.projet.title},
        { property: 'og:site_name', content: 'Alexandre_BECAVIN'},
        { property: 'og:type', content: 'website'},  
        { property: 'og:url', content: ROOT_PATH +this.projet.url_meta},   
        { property: 'og:image', content: ROOT_PATH + this.projet.og_image},  
        {name: 'robots', content: 'index,follow'} 
      ]
    }
  },

  mounted() {
    if (this.$route.params.msg) {
      this.projet = this.persist(this.$route.params.msg);
    }

    const intersectionClassHandler = el => el.isIntersecting ? el.target.classList.add('visible') : el.target.classList.remove('visible');
    const handleIntersect = entries => entries.forEach(el => intersectionClassHandler(el));
    const intersectionSettings = {
      root: null,
      rootMargin: "-10%"
    }
    const io = new IntersectionObserver(handleIntersect, intersectionSettings);
    document.querySelectorAll('.titre_section').forEach(el => io.observe(el));

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
      if(this.Contenu_projet.[msg] != undefined || this.Contenu_projet.[msg] != null){
        return this.Contenu_projet.[msg];
      }else{
        this.$router.push({name : 'Home'});
      }
    }
  }
}
</script>

<style lang="scss">
    // style menu
    @import '../assets/styles/projet.css';
</style>
