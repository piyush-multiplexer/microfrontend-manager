import {registerApplication, start} from "single-spa";

registerApplication({
    name: "mycovidboard",
    app: () =>
        System.import('mycovidboard'),
    activeWhen: '/mycovidboard'
})
;
registerApplication({
    name: "datatable",
    app: () =>
        System.import('datatable'),
    activeWhen: '/datatable'
});


// registerApplication({
//   name: "@tsp-test/navbar",
//   app: () => System.import("@tsp-test/navbar"),
//   activeWhen: ["/"]
// });

start({
    urlRerouteOnly: true,
});
