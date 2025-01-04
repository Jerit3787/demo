// Import the File System module
const fs = require('fs');

// Log a task to tasks.txt
const logTask = (task) => {
    fs.appendFileSync('tasks.txt', `${task}\n`);
    console.log(`Task "${task}" added successfully!`);
};

// Delete tasks.txt
const deleteTasks = () => {
    console.log("Deleting tasks.txt");
    fs.unlinkSync('tasks.txt');
}

// Example usage
deleteTasks();
logTask("Buy groceries");
logTask("Complete Node.js lab");

// Display number of tasks in tasks.txt
const countTasks = () => {
    const data = fs.readFileSync('tasks.txt', 'utf8');
    const tasks = data.split('\n');
    console.log(`There are ${tasks.length - 1} tasks.`);
}

countTasks();

// Read tasks from tasks.txt
const readTasks = () => {
    // Intentionally omit encoding
    const data = fs.readFileSync('tasks.txt', 'utf8');
    console.log("Raw Data from File:\n", data);
}

readTasks();