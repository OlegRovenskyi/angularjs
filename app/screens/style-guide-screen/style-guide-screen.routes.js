export default ($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
        .state('styleguide.counter', {
            url: '/counter',
            component: 'counter'
        })
        .state('styleguide.dropdown', {
            url: '/dropdown',
            component: 'dropdown'
        })
        .state('styleguide.datepicker', {
            url: '/datepicker',
            component: 'datepicker'
        });

    $urlRouterProvider.otherwise('/styleguide');
}