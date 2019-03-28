//import MyComponent from './my-component.vue';
const app1 = new Vue ({
    el:"#app-1",
    data:{index1:"Welcome to"}
})

const app2 = new Vue ({
    el:"#app-2",
    data:{index2:"my page!"}
})
const app3 = new Vue({
    el:"#app-3",
    data:{message:"2月28日は雨でした。3月28日は晴れです。"}
})

/*new Vue({
    el:"#example",
    components: {MyComponent},
    template: "<my-component></my-component>"
}) */