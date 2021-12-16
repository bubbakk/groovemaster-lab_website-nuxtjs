<template>
  <section class="jumbotron jumbotron-fluid">
    <div class="row container">
      <div class="col-12 p-0">
        <div
          class="min-vh-100 text-center m-0 d-flex flex-column justify-content-center"
        >
          <div class="container">
            <h1 class="title animate__animated animate__fadeInLeft is-size-1-desktop is-size-2-touch">GrooveMaster</h1>
            <h2 class="subtitle animate__animated animate__fadeInLeft delay-1s is-size-3-desktop is-size-4-touch">Basses and more</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'layout',
  head() {
    return {
      title: '%s | Home page',
    };
  },
};
</script>

<style scoped>
section.jumbotron {
  background-size:     cover;                      /* <------ */
  background-repeat:   no-repeat;
  background-position: center center;              /* optional, center the image */
  background-image: url("/images/Roberto_Dolce_liutaio.jpg")
}
section.jumbotron h1, section.jumbotron h2 {text-shadow: 1px 0px 3px #000000 }
</style>