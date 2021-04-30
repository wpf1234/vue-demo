// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'
// // import circle from './modules/circle'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     currentIndex: 0,
//     cards: [{
//         id: 1,
//         username: 'aaaaa',
//         head: require('../assets/img/circle/face1.png'),
//         content: 'adfaswefasdfwaefasdfasdfasfagaw efqwegasedfg wetgergasdgas ',
//         // cover: require('../assets/logo.png'),
//         picture: [
//           require('../assets/img/circle/boston.png'),
//           require('../assets/logo.png'),
//           require('../assets/img/circle/boston.png'),

//         ],
//         tm: 1588134243000,
//         favorite: 245,
//         comment: 3,
//         comm_list: [{
//             id: 2,
//             comm_user: 'bbbbb',
//             head: require('../assets/img/circle/face2.png'),
//             context: 'ghauieyurhayugagas',
//             tm: 1588134398896,
//           },
//           {
//             id: 3,
//             comm_user: 'ccccc',
//             head: require('../assets/logo.png'),
//             context: 'adgtryfghkfjh',
//             tm: 1588134398896,
//           },
//           {
//             id: 4,
//             comm_user: 'ddddd',
//             head: require('../assets/logo.png'),
//             context: 'sdfzxczcvbnmhjkl',
//             tm: 1588134398896,
//           },
//         ],
//         active: false
//       },
//       {
//         id: 2,
//         username: 'bbbbb',
//         head: require('../assets/logo.png'),
//         content: 'adfaswefasdfwaefasdfasdfasfagaw efqwegasedfg wetgergasdgas ',
//         // cover: require('../assets/logo.png'),
//         picture: [
//           require('../assets/logo.png'),
//           require('../assets/img/circle/map.png'),
//           require('../assets/logo.png'),
//           require('../assets/img/circle/map.png'),
//         ],
//         tm: 1588134464896,
//         favorite: 245,
//         comment: 2,
//         comm_list: [{
//             id: 3,
//             comm_user: 'ccccc',
//             head: require('../assets/logo.png'),
//             context: 'adgtryfghkfjh',
//             tm: 1588134464896,
//           },
//           {
//             id: 4,
//             comm_user: 'ddddd',
//             head: require('../assets/logo.png'),
//             context: 'sdfzxczcvbnmhjkl',
//             tm: 1588134464896,
//           },
//         ],
//         active: false
//       },
//       {
//         id: 3,
//         username: 'ccccc',
//         head: require('../assets/logo.png'),
//         content: 'adfaswefasdfwaefasdfasdfasfagaw efqwegasedfg wetgergasdgas ',
//         // cover: require('../assets/logo.png'),
//         picture: [
//           require('../assets/logo.png'),
//           // require('../assets/map.png'),
//         ],
//         tm: 1588134243000,
//         favorite: 245,
//         comment: 2,
//         comm_list: [{
//             id: 1,
//             comm_user: 'aaaaa',
//             head: require('../assets/logo.png'),
//             context: 'ghauieyurhayugagas',
//             tm: 1588134398896,
//           },
//           {
//             id: 4,
//             comm_user: 'ddddd',
//             head: require('../assets/logo.png'),
//             context: 'sdfzxczcvbnmhjkl',
//             tm: 1588134398896,
//           },
//         ],
//         active: false
//       },
//     ],
//     selected: null,
//     unselect: null
//   },
//   mutations: {
//     toggleCard(state, {
//       card
//     }) {
//       if (state.selected && state.selected.card === card) {
//         return
//       }
//       card.active = !card.active
//     },
//     nextCard(state) {
//       if (state.selected) {
//         return
//       }
//       state.cards.forEach(card => {
//         card.active = false
//       })
//       state.currentIndex++
//     },
//     prevCard(state) {
//       if (state.selected) {
//         return
//       }
//       state.cards.forEach(card => {
//         card.active = false
//       })
//       state.currentIndex--
//     },
//     selectCard(state, selected) {
//       state.unselect = null
//       state.selected = selected
//     },
//     unselectCard(state) {
//       state.unselect = state.selected
//       state.selected = null
//     },
//     getCards(state, cards) {
//       state.cards = cards
//     }
//   },
//   actions: {
//     getCardsInfo(context) {
//       axios.get('/dynamic').then((res) => {
//         console.log(res);
//         //   context.commit("getCards",res.data.lists);
//       })
//     }
//   },
//   modules: {
//     // circle
//   }
// })