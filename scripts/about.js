const app = Vue.createApp({
    template: `
        <h1 @mouseover="changeMessage" @mouseleave="resetMessage">{{ message }}</h1>
    `,
    data() {
        return {
            message: 'About me'
        };
    },
    methods: {
        changeMessage() {
            this.message = ' 😎'; // Replace with the emoji you want
        },
        resetMessage() {
            this.message = 'About me';
        }
    },
});

app.mount('#app');
