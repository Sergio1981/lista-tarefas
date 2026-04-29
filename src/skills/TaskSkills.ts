import { Task } from '../entities/Task';

export const TaskSkills = {
  createTask: (tasks: Task[], title: string): Task[] => {
    if (!title.trim()) return tasks;
    
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
      createdAt: Date.now(),
    };
    
    return [...tasks, newTask];
  },

  toggleTask: (tasks: Task[], id: string): Task[] => {
    return tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  },

  deleteTask: (tasks: Task[], id: string): Task[] => {
    return tasks.filter(task => task.id !== id);
  },

  listTasks: (tasks: Task[]): Task[] => {
    // Optionally sort by creation date or completion status
    return [...tasks].sort((a, b) => {
      if (a.completed === b.completed) {
        return b.createdAt - a.createdAt; // newest first
      }
      return a.completed ? 1 : -1; // incomplete first
    });
  }
};
