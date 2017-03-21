export default [
  {
    path: '/',
    name: 'portal-view',
    component: require('views/PortalView')
  }, {
    path: '*',
    redirect: '/'
  }
]
