const authRoutes = [
    {
      path: '/login',
      name: 'Login',
      component: () => import('./components/UserLogin.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('./components/UserRegister.vue'),
    }
  ];

  export default authRoutes;