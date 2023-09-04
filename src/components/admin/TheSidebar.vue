<template>
  <div class="sidebar__categories">
    <h3>The Sidebar</h3>
  </div>
  <div class="categories__accordion">
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-heading">
          <a data-toggle="collapse" data-target="#collapseTwo">Overview</a>
        </div>
        <div id="collapseTwo" class="collapse" data-parent="#accordionExample">
          <div class="card-body">
            <ul>
              <li><router-link to="/admin">All View</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-heading">
          <a data-toggle="collapse" data-target="#collapseThree">Product</a>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <ul>
              <li>
                <router-link to="/product">All Product</router-link>
              </li>
              <li>
                <router-link to="/admin/product">add product</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-heading">
          <a data-toggle="collapse" data-target="#collapseFour">Bill</a>
        </div>
        <div id="collapseFour" class="collapse" data-parent="#accordionExample">
          <div class="card-body">
            <ul>
              <li><router-link to="/bill">All Bill</router-link></li>
              <li><router-link to="/admin/bill">Action Bill</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
