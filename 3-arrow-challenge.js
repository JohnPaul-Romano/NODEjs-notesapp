




const tasks = {
    task: [{
        text: 'Grocery Shopping',
        completed: true
    }, {
        text: 'Clean Yard',
        completed: false
    }, {
        text: 'Film Course',
        completed: false
    }],
    getTasksToDo() {
        return tasksToDo = this.task.filter((task) => task.completed === false)
    }

}

console.log(tasks.getTasksToDo())