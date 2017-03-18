export default [{
  path: '/',
  name: 'landing-page',
  component: require('components/LandingPageView')
}, {
  path: '*',
  redirect: '/'
}]


  // {
  //   path: '/',
  //   name: 'portal-view',
  //   component: require('views/PortalView')
  // }, 
  