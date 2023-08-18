<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
    <TodoModal v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <h3 slot="header">
          경고!
        </h3>
    </TodoModal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'

export default {
  data : function(){
    return {
      newTodoItem : "",
      showModal: false
    }
  },
  methods: {
    addTodo: function(){
      if(this.newTodoItem !== ''){
        // this.$emit('이벤트 이름', '인자1,인자2,...')
        this.$emit('addTodoItem', this.newTodoItem)
        this.clearInput();
        // window.location.reload();
      } else { 
        this.showModal = !this.showModal;
      }
      // 로컬 스토리지 키,벨류 저장(개발자도구 - Application에 Local Stroage 탭에 목록 선택 후 테스트)
    },
    clearInput: function(){
      //텍스트 안의 값 지우기(add 버튼 눌렀을 때)
      this.newTodoItem = '';
    }
  },
  // 현 컴포넌트의 하위 컴포넌트 만들기(AlertModal.vue가 TodoInput.vue의 하위 컴포넌트가 되는 것)
  components: {
    'TodoModal': AlertModal
  }
}
</script>
 
<style scoped>
  input:focus{
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input{
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>