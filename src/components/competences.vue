<template>
    <div class='contenu_competences'>
        <div v-for="(compet, i) in competences" :key="i" class="competence">
            <div class='carte'>
              <img class='icon_competence' :src="compet.icon_competence" v-bind:alt='compet.text'/>
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
          text: 'Css',
          niveau: '100',
          icon_competence: require('../assets/img/competence/css.webp'),
        },
        {
          text: 'Javascript',
          niveau: '80',
          icon_competence: require('../assets/img/competence/js.webp'),
        },
        {
          text: 'Wordpress',
          niveau: '85',
          icon_competence: require('../assets/img/competence/wordpress.webp'),
        },
        {
          text: 'VueJs',
          niveau: '80',
          icon_competence: require('../assets/img/competence/vuejs.webp'),
        },
        {
          text: 'React',
          niveau: '75',
          icon_competence: require('../assets/img/competence/React.webp'),
        },
        {
          text: 'Symfony',
          niveau: '60',
          icon_competence: require('../assets/img/competence/symfony.webp'),
        },
        {
          text: 'NodeJS',
          niveau: '75',
          icon_competence: require('../assets/img/competence/Nodejs.webp'),
        },
        {
          text: 'Docker',
          niveau: '40',
          icon_competence: require('../assets/img/competence/docker.webp'),
        },
        {
          text: 'Methode Agile',
          niveau: '70',
          icon_competence: require('../assets/img/competence/gestion_de_projet.webp'),
        },
      ],
    }),
  };
</script>