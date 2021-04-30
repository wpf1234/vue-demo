<template>
  <div>
    <v-card flat>
      <v-toolbar color="#232436"
                 dark
                 height="80"
                 flat>
        <template>
          <v-tabs v-model="tabs"
                  centered
                  slider-size="1">
            <v-tab v-if="(n = 1)"
                   :key="n"
                   class="mt-6"> 聊天 </v-tab>
            <v-tab v-if="(n = 2)"
                   :key="n"
                   class="mt-6"> 好友 </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-text-field rounded
                        class="mx-4 mt-5"
                        flat
                        hide-details
                        label="搜索聊天记录或好友"
                        prepend-inner-icon="search"
                        solo-inverted>
          </v-text-field>
          <v-list two-line
                  elevation="0"
                  width="100%"
                  class="ml-4">
            <template v-for="(item, index) in items">
              <v-list-item :key="item.title"
                           @click="changeToChat()">
                <v-list-item-avatar>
                  <img :src="item.avatar" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.subtitle"
                                        class="mt-1"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider :key="index"
                         inset></v-divider>
            </template>
          </v-list>
        </v-tab-item>

        <v-tab-item>
          <v-text-field rounded
                        class="mx-4 mt-5"
                        flat
                        hide-details
                        label="搜索好友"
                        prepend-inner-icon="search"
                        solo-inverted>
          </v-text-field>

          <v-list subheader
                  class="ml-4">
            <template v-for="(item,index) in items2">
              <v-list-item :key="item.title"
                           @click="">
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider :key="index"
                         inset></v-divider>
            </template>
          </v-list>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <FootBar></FootBar>
  </div>
</template>

<script>
import FootBar from '../../components/footbar/footbar.vue'

export default {
  data () {
    return {
      tabs: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      items: [{
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Jason Oner',
        subtitle: "你好！",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Ranee Carlson',
        subtitle: "很高兴遇见你！"
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Cindy Baker',
        subtitle: "在吗？"
      },
      ],
      items2: [{
        title: 'Jason Oner',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        subtittle: "Hi!",
      },
      {
        title: 'Ranee Carlson',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        subtittle: "你好！",
      },
      {
        title: 'Cindy Baker',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        subtittle: "很高兴遇见你！"
      },
      {
        title: 'Ali Connors',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        subtittle: "在吗？"
      },
      ],
    }
  },
  methods: {
    changeToChat () {
      console.log('changeToChat')
    },

  },
  components: {
    FootBar,
  },

}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>