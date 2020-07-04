<template>
  <div>
    <div>
      <ul class="tabbar">
        <li>
          <router-link class="link" to="/test/aaa">aaa</router-link>
        </li>
        <li>
          <router-link class="link" to="/test/bbb">bbb</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <button class="btn" @click="throwError">throw on error</button>
    <div style="margin-left: 20px">
      <p>
        这是
        <span>1</span>段中间插入了span的文本
      </p>
    </div>
    <div>
      <p
        style="width: 400px;"
      >这段看起来特别特别长的文本，文本宽度是400px，测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../common/Footer.vue";
export default {
  components: {
    Footer
  },
  mounted() {
    console.log(TEST_VAR_STRING);
    console.log(TEST_VAR_NUMBER);

    console.log("before = ", document.cookie);
    document.cookie =
      "time=${+new Date()}; expires=Wed Jan 01 2220 00:00:00 GMT+0800; path=/;";
    console.log("after = ", document.cookie);
  },
  methods: {
    throwError() {
      setTimeout(() => {
        throw new Error("Iam on error");
      }, 0);
    }
  }
};
</script>

<style lang="stylus" scoped></style>