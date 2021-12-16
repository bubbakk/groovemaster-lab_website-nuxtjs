<template>
  <div>
    <!-- header -->
    <header>
      <b-navbar
        toggleable="lg"
        type="dark"
        class="shadow font1"
        fixed="top"
        style="background: linear-gradient(to bottom, #282828 0%, #1f1f1f 61%)"
      >
        <b-navbar-brand href="#" style="padding: 0">
          <img src="~/static/images/GrooveMasterBrand.png" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <!-- HOME -->
            <b-nav-text class="mr-4" @click="collapseMenu">
              <fa-icon icon="home"></fa-icon>
              <nuxt-link :to="localePath('index')">{{
                $t('pages.home')
              }}</nuxt-link>
            </b-nav-text>
            <!-- LA MIA PRODUZIONE -->
            <b-nav-text class="mr-4" @click="collapseMenu">
              <fa-icon icon="guitar"></fa-icon>
              <nuxt-link :to="localePath('products')">{{
                $t('pages.products')
              }}</nuxt-link>
            </b-nav-text>
            <!-- GROOVEMASTER FAMILY -->
            <b-nav-text class="mr-4" @click="collapseMenu">
              <fa-icon icon="users"></fa-icon>
              <nuxt-link :to="localePath('family')">{{
                $t('pages.family')
              }}</nuxt-link>
            </b-nav-text>
            <!-- BIO -->
            <b-nav-text class="mr-4" @click="collapseMenu">
              <fa-icon icon="user-edit"></fa-icon>
              <nuxt-link :to="localePath('bio')">{{
                $t('pages.bio')
              }}</nuxt-link>
            </b-nav-text>
            <b-nav-item-dropdown text="Lang" right>
              <nuxt-link
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
              >
                <fa-icon
                  :style="{ color: 'black', margin: '0 4px' }"
                  icon="language"
                ></fa-icon
                >{{ locale.name }}</nuxt-link
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <!-- content -->
    <!-- 68px = 52px = image size + ( 8px x 2 ) of padding -->
    <div style="padding-top: 68px">
      <nuxt></nuxt>
    </div>

    <footer class="footer">
      <div class="text-center">
        <p>
          <strong class="is-size-5">GrooveMaster</strong> /
          <i style="font-size: 90%">wood vibrations</i><br />
        </p>
        <p>
          <a
            href="https://it-it.facebook.com/groovemasterlab/"
            target="_blank"
            style="color: #4267b2; margin-right: 20px"
          >
            <i class="fab fa-facebook-square fa-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/groovemaster_lab"
            target="_blank"
            style="color: #ee0076; margin-right: 20px"
          >
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="https://www.pinterest.it/Groovemaster73/"
            target="_blank"
            style="color: #bd081c"
          >
            <i class="fab fa-pinterest-square fa-2x"></i>
          </a>
        </p>
        <p>
          <i class="fas fa-phone"></i>&nbsp;<br id="t-hid-el-en" />
          <i class="fas fa-map-marker-alt"></i>&nbsp;Vocabolo Piane 106 -
          Matelica (MC)<br />
          P.IVA 1234567890
          <br />
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
  methods: {
    collapseMenu: function () {
      if (document.getElementById('nav-collapse').classList.contains('show')) {
        document
          .getElementsByClassName('navbar-toggler')[0]
          .dispatchEvent(new Event('click'));
      }
    },
  },
};
</script>

<style>
html {
  position: relative;
  min-height: 100%;
  background-image: url('/images/gray-wood.webp');
  background-position: top;
}
body {
  margin-bottom: 200px; /* Margin bottom by footer height */
  background-color: transparent;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 240px; /* Set the fixed height of the footer here */
  line-height: 200px; /* Vertically center the text there */
  background-color: rgba(0, 0, 0, 0.2);
  color: lightgray;
}

footer.footer p strong {
  background: linear-gradient(to right, rgb(245, 21, 21), rgb(163, 10, 10));
  background-clip: text;
}

a.nuxt-link-exact-active {
  border-bottom: 1px dotted gray;
}
</style>
