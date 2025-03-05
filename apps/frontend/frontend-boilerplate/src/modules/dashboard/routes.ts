const dashboardRoutes = [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('./components/UserDashboard.vue'),
    },
  ];

  export default dashboardRoutes;