import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/user/HomeView.vue'
import BlogView from '../views/user/BlogView.vue'
import ContactView from '../views/user/ContactView.vue';
import ProductDetailView from '../views/user/ProductDetailView.vue';
import BlogDetailView from '../views/user/BlogDetailView.vue';
import CartView from '../views/user/CartView.vue';
import CheckoutView from '../views/user/CheckoutView.vue';
import Admin from '../views/Admin.vue';
import User from '../views/User.vue';
import HomeViewAdmin from '../views/admin/HomeView.vue'
import ProductViewAdmin from '../views/admin/ProductView.vue';
import BillViewAdmin from '../views/admin/BillView.vue';
import LoginView from '../views/auth/LoginView.vue';
import SignupView from '../views/auth/SignupView.vue';

const routes = [{
    path: '',
    name: 'User',
    component: User,
    children: [{
        path: '',
        name: 'home',
        component: HomeView,
        meta: {
          requiresAdmin: false
        }
      },
      {
        path: '/blog',
        name: 'blog',
        component: BlogView,
        meta: {
          requiresAdmin: false
        }
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactView,
        meta: {
          requiresAdmin: false
        }
      },
      {
        path: '/productdetail',
        name: 'productdetail',
        component: ProductDetailView,
        meta: {
          requiresAdmin: false
        }
      },
      {
        path: '/blogdetail',
        name: 'blogdetail',
        component: BlogDetailView,
        meta: {
          requiresAdmin: false
        }
      },
      {
        path: '/cart',
        name: 'cart',
        component: CartView,
        meta: {
          requiresAdmin: false
        }
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: CheckoutView,
        meta: {
          requiresAdmin: false
        }
      },
    ]
  },
  {
    path: '/admin',
    component: Admin,
    meta: {
      requiresAdmin: true, // Đánh dấu rằng trang Admin yêu cầu quyền admin
    },
    children: [{
        path: '/',
        name: 'homeviewadmin',
        component: HomeViewAdmin,
        meta: {
          requiresAdmin: true, // Đánh dấu rằng trang Admin yêu cầu quyền admin
        },
      },
      {
        path: '/product',
        name: 'productviewadmin',
        component: ProductViewAdmin,
        meta: {
          requiresAdmin: true, // Đánh dấu rằng trang Admin yêu cầu quyền admin
        },
      },
      {
        path: '/bill',
        name: 'billviewadmin',
        component: BillViewAdmin,
        meta: {
          requiresAdmin: true, // Đánh dấu rằng trang Admin yêu cầu quyền admin
        },
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupView,
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   const requiresAdmin = to.matched.some((route) => route.meta.requiresAdmin); // Kiểm tra xem trang yêu cầu quyền admin hay không

//   if (requiresAdmin && !isAdmin()) {
//     // Nếu trang yêu cầu quyền admin và người dùng không phải là admin, chuyển hướng về trang User
//     next("/");
//   } else {
//     next();
//   }
// });

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    // Kiểm tra logic xác thực người dùng đã đăng nhập và có quyền admin hay không
    if (isAdmin()) {
      next() // Cho phép truy cập vào trang Admin
    } else {
      next('/403') // Chuyển hướng đến trang báo lỗi quyền truy cập
    }
  } else {
    next();
  }
});

function isAdmin() {
  return true;
}


// function isAdmin() {
//   // Hàm kiểm tra xem người dùng có quyền admin hay không, ở đây ví dụ mình đơn giản kiểm tra vai trò là "admin"
//   const role = "admin";
//   return role === "admin";
// }

export default router