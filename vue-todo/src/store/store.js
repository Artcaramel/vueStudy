import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr= [];
            // 인스턴스가 생성되자마자(사이트 키자마자) 발동됨
        if(localStorage.length > 0){
            for(let i=0; i<localStorage.length; i++){
            // if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            // }
            }
         }
         return arr;
     }
  }


export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = {completed: false , item:todoItem};
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state,payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1); // 화면에서 해당 index 삭제
        },
        toggleOneItem(state,payload){
            state.todoItems[payload.index].completed = ! state.todoItems[payload.index].completed 
            // window.console.log(payload.index) // 인덱스를 따로 사용 안해서 이런 식으로 강제 사용 처리해야함
            // localStorage 데이터를 갱신하는 것, 수정 함수는 없어서 지우고 다시 등록하는 방식
            localStorage.removeItem(payload.todoItem.item); 
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state){
            localStorage.clear();
            state.todoItems = [];
        }
    }
});