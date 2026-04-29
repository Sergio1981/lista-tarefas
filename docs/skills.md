# Skills

Skills are pure, highly-testable functions that contain the core rules of the application. They have no side effects (or isolated side effects for storage) and no state.

## `TaskSkills`

- `createTask(tasks, title)`: Appends a new task to the array.
- `toggleTask(tasks, id)`: Flips the `completed` flag of a specific task.
- `deleteTask(tasks, id)`: Removes a task from the array.
- `listTasks(tasks)`: Sorts and returns the tasks for display.

## `StorageSkills`

- `saveData(key, data)`: Serializes and saves data to `localStorage`.
- `loadData(key)`: Retrieves and parses data from `localStorage`.
