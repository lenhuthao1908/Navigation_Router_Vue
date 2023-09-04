<template>
  <the-header></the-header>
  <the-breadcrumb />
  <router-view></router-view>
  <the-footer></the-footer>
  <the-search></the-search>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheBreadcrumb from "@/components/TheBreadcrumb.vue";
import TheSearch from "@/components/TheSearch.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
    TheBreadcrumb,
    TheSearch,
  },
  name: "UserView",
  data() {
    return {
      role: "user", // Vai trò của người dùng đang đăng nhập, ở đây mình đặt là "user" cho người dùng thường
    };
  },
  computed: {
    canAccessAdmin() {
      return this.role === "admin" ? true : false; // Kiểm tra nếu vai trò là "admin" thì trả về true, ngược lại trả về false
    },
  },
};
</script>

<style></style>
