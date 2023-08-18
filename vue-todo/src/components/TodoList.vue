<template>
  <div>
    <!-- ul>li*3 3개 li 만들기 단축기-->
    <ul>
      <li v-for="(todoItem,index) in todoItems" v-bind:key="todoItem.item" class="shadow">
        <span v-on:click="toggleComplete(todoItem,index)">
          <i class="fa-solid fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}"></i>
        </span>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
          <i class="fa-solid fa-trash"></i> 
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      todoItems : []
    }
  },
  methods: {
    removeTodo: function(todoItem,index){
      // console.log(todoItem,index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1); // 화면에서 해당 index 삭제
    },
    toggleComplete: function(todoItem,index){
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item); //33행 34행은 localStorage 데이터를 갱신하는 것, 수정 함수는 없어서 지우고 다시 등록하는 방식
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      window.console.log(index) // 인덱스를 따로 사용 안해서 이런 식으로 강제 사용 처리해야함
    }
  },  
  created: function(){
    // 인스턴스가 생성되자마자(사이트 키자마자) 발동됨
    if(localStorage.length > 0){
      for(var i=0; i<localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
  }
}
</script>

<style scoped> 
/* scoped를 넣는 이유는 여기 컴포넌트에만 해당되도록 설정하는 것 */
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 40px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>