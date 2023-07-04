
const { createApp } = vue;

createApp({
    data() {
        return {
            todoList: [
                {
                    text: 'mangiare',
                    done: false
                },
                {
                    text: 'studiare',
                    done: false
                },
                {
                    text: 'andare in palestra',
                    done: false
                }
            ]
        }
    }
}).mount('#app')