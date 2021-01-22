<template>
    <div class='contenu_competences'>
        <div v-for="(compet, i) in competences" :key="i" class="competence" target="_blank">
            <div class='carte'>
              <img class='icon_competence' :src="compet.icon_competence"/>
              <p class='titre_carte'>{{compet.text}}</p>
              <div class='niveau'>
                <p>{{ compet.niveau}}%</p>
                <v-progress-circular :value="compet.niveau" :rotate="-90" color="#FC4E54"></v-progress-circular>
              </div>
            </div>
        </div>
    </div>
</template>


<script>
  export default {
    name: "competences",

     data: () => ({
      competences: [
        {
          text: 'html',
          niveau: '90',
          icon_competence: require('../assets/img/competence/html.webp'),
        },
        {
          text: 'Css',
          niveau: '100',
          icon_competence: require('../assets/img/competence/css.webp'),
        },
        {
          text: 'Javascript',
          niveau: '60',
          icon_competence: require('../assets/img/competence/js.webp'),
        },
        {
          text: 'php',
          niveau: '60',
          icon_competence: require('../assets/img/competence/php.webp'),
        },
        {
          text: 'VueJs',
          niveau: '55',
          icon_competence: require('../assets/img/competence/vuejs.webp'),
        },
        {
          text: 'Wordpress',
          niveau: '85',
          icon_competence: require('../assets/img/competence/wordpress.webp'),
        },
        {
          text: 'Prestashop',
          niveau: '55',
          icon_competence: require('../assets/img/competence/prestashop.webp'),
        },
        {
          text: 'Gestion de projet',
          niveau: '60',
          icon_competence: require('../assets/img/competence/gestion_de_projet.webp'),
        },
      ],
    }),
  };
</script>