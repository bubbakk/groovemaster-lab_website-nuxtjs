<template>
  <section class="mt-5 px-2 pt-lg-4 pt-xl-6">
    <b-container class="bg-dark-transparent box-shadow-5 rounded-big p-4">
      <b-row cols-md="1" cols-lg="12">
        <b-col :col="true" lg="4" xl="3" class="p-3">
          <div class="text-center">
            <img
              class="animate__animated animate__fadeInLeft faster"
              src="~/static/images//RobertoDolce.jpg"
              style="border-radius: 100%; width: 256px; margin: auto"
              width="256"
              height="256"
            />
          </div>
        </b-col>
        <b-col class="p-3" lg="8" xl="9">
          <h1
            class="animate__animated animate__fadeInDown delay-500ms faster title pb-2"
          >
            {{ $t('pageBio.paragraph_1_header') }}
          </h1>
          <p
            class="animate__animated animate__fadeInDown delay-1s text-justify"
          >
            {{ $t('pageBio.paragraph_1_text') }}
          </p>
          <h2
            class="subtitle animate__animated animate__fadeInDown delay-1s pt-5 pb-2"
          >
            {{ $t('pageBio.paragraph_2_header') }}
          </h2>
          <p
            class="text-justify animate__animated animate__fadeInDown delay-1s"
          >
            {{ $t('pageBio.paragraph_2_text') }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  layout: 'layout',
  head() {
    return {
      title: '%s | Bio',
    };
  },
};
</script>
