<template>
  <div>
    <!-- ul>li*3 3개 li 만들기 단축기-->
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem,index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <span v-on:click="toggleComplete({ todoItem,index })">
          <i class="fa-solid fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}"></i>
        </span>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem,index})">
          <i class="fa-solid fa-trash"></i> 
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';


export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem', // 헬퍼함수는 인자를 선언 안 해도 그대로 들고 감. 대신 위에 removeTodo({todoItem,index})로 객체 감싸야함
      toggleComplete: 'toggleOneItem'
    }),
    // removeTodo(todoItem,index){
    //   // console.log(todoItem,index);
    //   this.$store.commit('removeOneItem', {todoItem,index}); // {todoItem,index} => const obj = {todoItem,index} 를 줄인 것
    //   // this.$emit('removeItem', todoItem,index)
    // },
    // toggleComplete(todoItem,index){
    //   // this.$emit('toggleItem',todoItem,index)
    //   this.$store.commit('toggleOneItem', {todoItem,index});
    // }
  },
  computed: {
    // todoItems(){
    //   return this.$store.getters.storedTodoItems;
    // }
    ...mapGetters(['storedTodoItems'])
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

/* 리스트 아이템 트렌지션 효과 */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>