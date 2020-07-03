<template>
  <div class="container">
    <div class="title">todos</div>
    <div class="form">
      <input type="text" v-model="inputText" class="new-todo" placeholder="下一步行动计划是" />
      <button class="add-btn" @click="addNewTodo">确定</button>
    </div>
    <div class="todo-list">
      <div class="todo-item done" v-for="item in todo" v-bind:key="item.id">
        <div>{{item.id}}--{{item.text}}</div>
        <!-- <div class="toggle" @click="toggle(item.id)"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
// data() 为什么，要是个回调函数
export default {
  name: "todo",
  data() {
    return {
      todo: [
        {
          text: "学习 Kbone",
          id: 0,
          done: false
        },
        {
          text: "学习 vue",
          id: 1,
          done: false
        }
      ],
      inputText: ""
    };
  },
  methods: {
    addNewTodo() {
      if (this.inputText.trim() === "") {
        return;
      }
      this.todo.unshift({
        text: this.inputText,
        id: ++this.id,
        done: false,
        createTime: new Date()
      });
    }
    // toggle(){

    // }
  }
};
</script>

<style lang="stylus" scoped></style>