<template>
  <div>
    <v-carousel cycle
                height="400"
                hide-delimiter-background
                show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in slides"
                       :key="i">
        <v-sheet :color="colors[i]"
                 height="100%">
          <v-row class="fill-height"
                 align="center"
                 justify="center">
            <div class="display-3">引导第{{ slide }} 页</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="my-2">
      <v-btn large
             color="#4adfff"
             rounded
             absolute
             dark
             onlined
             to="/login"
             style="left:30%; right:30%; top:80%; width:40%; text-decoration:none">立即进入</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        '1',
        '2',
        '3',
        '4',
        '5',
      ],
    }
  },
}
</script>