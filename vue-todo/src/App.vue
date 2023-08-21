<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명"></TodoInput> -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성"></TodoList>-->
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

// export default는 한 번만 사용가능(Modules)
export default {
  // data: function() 했던 것을 data() 로만 모두 축약했음 
  data(){
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem(todoItem){
      const obj = {completed: false , item:todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneIte(todoItem,index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1); // 화면에서 해당 index 삭제
    },
    toggleOneIte(todoItem,index){
      // todoItem.completed = !todoItem.completed; 와 같은 동작이지만 아래 코드가 더 컴포넌트에서 사용하는 데이터를 이용하는게 좋음
      this.todoItems[index].completed = ! this.todoItems[index].completed 
      window.console.log(index) // 인덱스를 따로 사용 안해서 이런 식으로 강제 사용 처리해야함
      // localStorage 데이터를 갱신하는 것, 수정 함수는 없어서 지우고 다시 등록하는 방식
      localStorage.removeItem(todoItem.item); 
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created(){
    // 인스턴스가 생성되자마자(사이트 키자마자) 발동됨
    if(localStorage.length > 0){
      for(let i=0; i<localStorage.length; i++){
        // if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        // }
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body {
  text-align : center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
