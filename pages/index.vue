<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Ramen App</h1>
        <div class="my-2">
          <nuxt-link to="/search">
            <v-btn color="primary" dark>START</v-btn>
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<style lang="scss" scoped>
.v-parallax {
  height: 100% !important;
}
</style>
