<template>
  <div>
    <h1>{{ $t('products') }}</h1>
    <b-container>
      <img
        v-for="(modello, idx) of modelli"
        :key="idx"
        class="modello-img cursor-hand mr-5 animate__animated animate__zoomIn"
        :class="modello.animationDelay"
        :src="'../images/modelli/modello-' + modello.name + '.jpg'"
        width="200"
        height="320"
        data-name="modello.name"
        data-idx="idx"
        @click="productClicked(idx)"
      />
    </b-container>
    <b-modal id="dettagliProdotto" class="center-element">
      carosello immagini
    </b-modal>
  </div>
</template>

<script>
export default {
  layout: 'layout',
  head() {
    return {
      title: '%s | Produzione',
    };
  },
  data() {
    return {
      modelli: [],
    };
  },
  methods: {
    productClicked: function(idx) {
      this.$bvModal.show('dettagliProdotto')
      console.log(idx)
    }
  },
  mounted: function () {
    const models = [
      {
        name: 'micciacorta',
        slides: [

        ]
      },
      {
        name: 'velvet',
      },
      {
        name: 'devious',
      },
      {
        name: 'devious-singlecut',
      },
      {
        name: 'magnitudo',
      },
      {
        name: 'talon-modern',
      },
      {
        name: 'mojo',
      },
      {
        name: 'flower-horn',
      },
      {
        name: 'vision',
      },
    ];
    for (const idx in models) {
      models[idx]['animationDelay'] = `delay-${idx * 250}ms`;
      this.modelli.push(models[idx]);
    }
  },
};
</script>

<style scoped>
.modello-img {
  margin-right: 0.2em;
  margin-bottom: 1em;
  border: 3px dashed rgba(255, 255, 255, 0.692);
  border-radius: 10px;
}
</style>
