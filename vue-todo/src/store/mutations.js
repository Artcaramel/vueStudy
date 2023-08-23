// const addOneItem = (state, todoItem) => {
//     const obj = {completed: false , item:todoItem};
//     localStorage.setItem(todoItem, JSON.stringify(obj));
//     state.todoItems.push(obj);
// }

// const removeOneItem = (state,payload) => {
//     localStorage.removeItem(payload.todoItem.item);
//     state.todoItems.splice(payload.index, 1); // 화면에서 해당 index 삭제
// }

// const toggleOneItem = (state,payload) => {
//     state.todoItems[payload.index].completed = ! state.todoItems[payload.index].completed 
//     // window.console.log(payload.index) // 인덱스를 따로 사용 안해서 이런 식으로 강제 사용 처리해야함
//     // localStorage 데이터를 갱신하는 것, 수정 함수는 없어서 지우고 다시 등록하는 방식
//     localStorage.removeItem(payload.todoItem.item); 
//     localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
// }

// const clearAllItems = (state) => {
//     localStorage.clear();
//     state.todoItems = [];
// }

// export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }