
const { createApp } = Vue;

createApp({
    data() {
        return {
            notodo: 'Bravo hai fatto tutto!',
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
                this.newTodo = {

                };
            }
        },

        removeTodo(index) {
            this.todoList.splice(index, 1)
        },

        done(index) {
            this.todoList[index].done = !this.todoList[index].done;
          }
    }
}).mount('#app');