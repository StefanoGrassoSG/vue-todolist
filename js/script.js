
const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodo: {
                    text: '',
                    done: false
                },
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
    },
    methods: {
        addTodo() {
            if(this.newTodo.text.trim() != '') {
                this.todoList.push(this.newTodo);
                this.newTodo = '';
            }
        }
    }
}).mount('#app');