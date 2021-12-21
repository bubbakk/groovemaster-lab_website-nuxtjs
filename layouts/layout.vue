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
    <div style="padding-top: 68px; padding-bottom: 3rem">
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
            <fa-icon
              :icon="['fab', 'facebook-square']"
              :style="{ fontSize: '200%' }"
            ></fa-icon>
          </a>
          <a
            href="https://www.instagram.com/groovemaster_lab"
            target="_blank"
            style="color: #ee0076; margin-right: 20px"
          >
            <fa-icon
              :icon="['fab', 'instagram']"
              :style="{ fontSize: '200%' }"
            ></fa-icon>
          </a>
          <a
            href="https://www.pinterest.it/Groovemaster73/"
            target="_blank"
            style="color: #bd081c"
          >
            <fa-icon
              :icon="['fab', 'pinterest-square']"
              :style="{ fontSize: '200%' }"
            ></fa-icon>
          </a>
        </p>
        <p>
          <fa-icon
            :icon="['fas', 'phone']"
            :style="{ opacity: '0.4' }"
          ></fa-icon>&nbsp;<a class="linktext" :href="l" :title="tt">{{ t }}</a
          ><br />
          <fa-icon
            :icon="['fas', 'map-marker-alt']"
            :style="{ opacity: '0.4' }"
          ></fa-icon
          >&nbsp;
          <a
            class="linktext"
            href="https://goo.gl/maps/Yt8t4LGaZmJ7fenw9"
            title="indizzo su Google Maps"
            target="_blank"
            >Vocabolo Piane 106 - Matelica (MC)</a
          ><br />
          <span style="font-size: 85%">P.IVA 1234567890</span>
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
  data: function () {
    return {
      l: '',
      t: 'ciao',
      tt: 'ciao ciao',
    };
  },
  mounted: function () {
    const p1 = Math.pow(3, 2);
    const p2 = Math.pow(2, 5) + 11;
    const p3 = String.fromCharCode(p2);
    const p4 = '7';
    const p5 = '4';
    const p6 = Math.pow(2, 2);
    const p7 = `${p5}${p4} ${p4}${p4}${p5} 33${p6}`;
    const p8 = 209 * Math.pow(2, 4) + 1;

    this.tt = 'contatto telefonico';
    this.l = `tel:${p3}3${p1}-3${p5}${p4}-${p4}${p4}${p6}-${p8}`;
    this.t = `${p3}3${p1} 3${p7}5`;
  },
};
</script>

<style>
html {
  position: relative;
  min-height: 100%;
  background-image: url('/images/gray-wood.webp');
  background-position: bottom;
}
body {
  margin-bottom: 200px; /* Margin bottom by footer height */
  background-color: transparent;
}
.footer {
  margin-top: 3rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 220px; /* Set the fixed height of the footer here */
  background-color: rgba(0, 0, 0, 0.2);
  color: lightgray;
  padding-top: 1.5rem;
  line-height: 1, 5rem;
}

footer.footer div p strong {
  background: linear-gradient(to right, rgb(245, 21, 21), rgb(163, 10, 10));
  background-clip: text;
  color: transparent;
  font-size: 110%;
}

a.nuxt-link-exact-active {
  border-bottom: 1px dotted gray;
}

footer a.linktext,
footer a.linktext:visited {
  color: #f8f9fa;
  border-bottom: 1px dotted #f8f9fa;
}
footer a:hover {
  text-decoration: none;
  border-bottom: 1px solid #f8f9fa;
  color: #f8f9fa;
}
</style>
