const app = Vue.createApp({
    template: `
    <div class="container">
    <div class="content">
        <h2>Hover over the image to see what animals looked like when they were young
        </h2>
    </div>
    <div class="image">
        <div class ="chicken-image">
        <img :src="bigChicken" @mouseover="bigChicken = smallChicken" @mouseleave="reset" alt="chicken"/>
        <p>Chicken</p>
        </div>
        <div class ="dog-image">
        <img :src="bigDog" @mouseover="bigDog = smallDog" @mouseleave="reset" alt="dog"/>
        <p>Dog</p>
        </div>
        </div>
        <div class="image2">
        <div class ="lion-image">
        <img :src="bigLion" @mouseover="bigLion = smallLion" @mouseleave="reset" alt="lion"/>
        <p>Lion</p>
        </div>
        <div class ="elephant-image">
        <img :src="bigElephant" @mouseover="bigElephant = smallElephant" @mouseleave="reset" alt="elephant"/>
        <p>Elephant</p>
        </div>

    </div>
    </div>`,
    data() {
        return {
            bigChicken: "https://cdn.pixabay.com/photo/2018/10/11/23/08/chicken-3741129_1280.jpg",
            smallChicken: "https://cdn.pixabay.com/photo/2014/05/20/21/20/bird-349026_1280.jpg",
            bigDog: 'https://cdn.pixabay.com/photo/2017/01/20/11/51/dog-1994692_1280.jpg',
            smallDog: 'https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg',
            bigLion: 'https://cdn.pixabay.com/photo/2015/06/02/12/11/lion-794962_1280.jpg',
            smallLion: 'https://cdn.pixabay.com/photo/2016/02/14/17/05/lion-1199757_1280.jpg',
            bigElephant:'https://cdn.pixabay.com/photo/2016/05/28/08/32/elephant-1421167_1280.jpg',
            smallElephant:'https://cdn.pixabay.com/photo/2014/02/21/14/39/elephant-271325_1280.jpg'
        };
    },
    methods: {
        reset() {
            this.bigChicken = 'https://cdn.pixabay.com/photo/2018/10/11/23/08/chicken-3741129_1280.jpg';
            this.bigDog = 'https://cdn.pixabay.com/photo/2017/01/20/11/51/dog-1994692_1280.jpg';
            this.bigLion ='https://cdn.pixabay.com/photo/2015/06/02/12/11/lion-794962_1280.jpg',
            this.bigElephant ='https://cdn.pixabay.com/photo/2016/05/28/08/32/elephant-1421167_1280.jpg'
        }
    }
});

app.mount('#app');
