import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'
// import * as getters from './getters'
// import * as mutations from './mutations'


Vue.use(Vuex);

// const storage = {
//     fetch() {
//         const arr= [];
//             // 인스턴스가 생성되자마자(사이트 키자마자) 발동됨
//         if(localStorage.length > 0){
//             for(let i=0; i<localStorage.length; i++){
//             // if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
//                 arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//             // }
//             }
//          }
//          return arr;
//      }
//   }

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
})
  

// export const store = new Vuex.Store({
//     state: {
//         todoItems: storage.fetch()
//     },
//     getters,
//     mutations
// });