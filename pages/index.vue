<template>
  <v-parallax
    dark
    src="https://storage.googleapis.com/setouchikakuregaresorts-media/1/2020/11/s1.jpg"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Ramen App</h1>
        <div class="my-2">
          <nuxt-link to="/search">
            <div class="ramen-start">
              <v-btn outlined color="indigo">START</v-btn>
            </div>
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
.font-weight-thin {
  color: #000;
  font-size: 64px !important;
}
.ramen-start {
  padding: 30px 0;
}
.v-application a {
  text-decoration: none;
}
.v-btn:not(.v-btn--round).v-size--default {
  min-width: 200px;
  height: 45px;
  border-radius: 50px;
}
.v-application .indigo--text {
  color: #000 !important;
}
</style>
