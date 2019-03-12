//import MyComponent from './my-component.vue';
const app1 = new Vue ({
    el:"#app",
    data:{testVal:"Hello, World"}
})

const app2 = new Vue({
    el:"#app-2",
    data:{message:"2月28日は雨です。"}
})

/*new Vue({
    el:"#example",
    components: {MyComponent},
    template: "<my-component></my-component>"
}) */