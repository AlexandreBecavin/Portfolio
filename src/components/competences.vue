<template>
    <div class='contenu_competences'>
        <div v-for="(compet, i) in competences" :key="i" class="competence" target="_blank">
            <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="15"
                :value="compet.niveau"
                color="#FC4E54"
                >
                {{ compet.niveau }}%
            </v-progress-circular>
            <p>{{compet.text}}</p>
        </div>
    </div>
</template>


<script>
  export default {
    name: "competences",

     data: () => ({
      competences: [
        {
          text: 'html / css',
          niveau: '90',
        },
        {
          text: 'Javascript',
          niveau: '60',
        },
        {
          text: 'php',
          niveau: '70',
        },
        {
          text: 'VueJs',
          niveau: '55',
        },
        {
          text: 'Wordpress',
          niveau: '85',
        },
        {
          text: 'Prestashop',
          niveau: '55',
        },
        {
          text: 'Gestion de projet',
          niveau: '72',
        },
      ],
    }),
  };
</script>