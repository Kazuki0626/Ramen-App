<template>
  <div class="sample">
    <div class="my-2">
      <nuxt-link to="/search/">
        <div class="ramen-start">
          <v-btn outlined color="indigo" class="ramen-start_btn">START</v-btn>
        </div>
      </nuxt-link>
    </div>
    <img src="@/assets/img/ramen-app.png" />
  </div>
</template>

<style lang="scss" scoped>
.sample {
  max-width: 100%;
  text-align: center;
  height: 100%;
  background-color: #fff;
}

.font-weight-thin {
  color: #000;
  font-size: 64px !important;
}

.ramen-start {
  position: fixed;
  top: 50%;
  width: 100%;
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
