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
    <b-modal
      v-if="modelloSelected !== -1"
      ok-only
      hide-footer
      size="lg"
      id="dettagliProdotto"
      class="center-element"
      header-bg-variant="dark"
      header-text-variant="light"
      body-bg-variant="secondary"
      body-text-variant="light"
      footer-bg-variant="dark"
      footer-text-variant="light"
      :title="modello.name"
    >
      <div style="display: flex">
        <div style="flex: 65%">
          <b-carousel
            controls
            indicators
            fade
            style="
              text-shadow: 0px 1px 0 rgb(0, 0, 0), 0px -1px 0 rgb(0, 0, 0),
                1px 0px 0 rgb(0, 0, 0), -1px 0px 0 rgb(0, 0, 0),
                1px 1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0),
                -1px 1px 0 rgb(0, 0, 0), -1px -1px 0 rgb(0, 0, 0);
            "
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              v-for="(slide, key) in modelli[modelloSelected].slides"
              :key="key"
              :caption="slide.titolo"
              :text="slide.descrizione"
              :img-src="
                '../images/modelli/' +
                modelli[modelloSelected].name +
                '/' +
                slide.img
              "
            >
            </b-carousel-slide>
          </b-carousel>
        </div>
        <div style="flex: 35%; padding: 1rem;">
          <p v-for="(txt, key) in modelli[modelloSelected].features" :key="key">• {{txt}}</p>
        </div>
      </div>
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
      modello: {
        name: '',
      },
      modelloSelected: -1,
    };
  },
  methods: {
    productClicked: function (idx) {
      this.modelloSelected = idx;
      const vm = this;
      window.setTimeout(function () {
        vm.modello.name = vm.capitalizeFirstLetter(
          vm.modelli[idx].name.split('-').join(' ')
        );
        vm.$bvModal.show('dettagliProdotto');
        console.log(idx);
      }, 500);
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
  mounted: function () {
    const models = [
      {
        name: 'micciacorta',
        slides: [
          {
            alt: 'breve descrizione dettagli foto',
            img: 'basso_01.jpg',
          },
          {
            alt: 'breve descrizione dettagli foto',
            img: 'basso_02.jpg',
          },
          {
            titolo: '6 corde',
            descrizione: 'breve descrizione dettagli foto',
            alt: 'breve descrizione dettagli foto',
            img: 'basso_03.jpg',
          },
        ],
        features: [
          'short scale 32" or 30.5"',
          'from 4 to 6 strings',
          'our angry baby!!!',
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
        name: 'vintage-mojo',
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

<style>
.modal-body {
  padding: 0 !important;
}
.modal-header {
  border-bottom-color: #6a6a6a !important;
}
</style>

<style scoped>
.modello-img {
  margin-right: 0.2em;
  margin-bottom: 1em;
  border: 3px dashed rgba(255, 255, 255, 0.692);
  border-radius: 10px;
}
</style>
