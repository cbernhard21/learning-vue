const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            url: 'https://www.google.com',
            books: [{
                    title: 'Name of the Wind',
                    author: 'Brandon Sanderson',
                    img: 'assets/1.jpg',
                    isFav: true,
                },
                {
                    title: 'The Final Empire',
                    author: 'Brandon Sanderson',
                    img: 'assets/2.jpg',
                    isFav: false,
                },
                {
                    title: 'The Way of Kings',
                    author: 'Brandon Sanderson',
                    img: 'assets/3.jpg',
                    isFav: true,
                }
            ],
            x: 0,
            y: 0,
        }
    },
    methods: {
        changeTitle(title) {
            //this.title = 'Lord of the Rings'
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleIsFav(item) {
            item.isFav = !item.isFav

        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')