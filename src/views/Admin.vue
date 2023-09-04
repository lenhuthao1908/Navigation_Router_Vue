<template>
  <the-header />
  <div class="container-fluid">
    <section class="shop spad">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-xl-3">
            <the-sidebar></the-sidebar>
          </div>
          <div class="col-xl-9 col-xl-9">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
  <the-footer />
</template>

<script>
import TheHeader from "@/components/admin/TheHeader.vue";
import TheFooter from "@/components/admin/TheFooter.vue";
import TheSidebar from "@/components/admin/TheSidebar.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
    TheSidebar,
  },
  name: "AdminView",
  data() {
    return {
      role: "admin", // Vai trò của người dùng đang đăng nhập, ở đây mình đặt là "admin" cho quản trị viên
    };
  },
};
</script>

<style></style>
