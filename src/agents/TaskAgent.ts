import { Task } from '../entities/Task';
import { TaskSkills } from '../skills/TaskSkills';
import { StorageAgent } from './StorageAgent';

export class TaskAgent {
  private tasks: Task[] = [];
  private storageAgent: StorageAgent;
  private subscribers: Array<() => void> = [];

  constructor() {
    this.storageAgent = new StorageAgent('todos_data');
    this.initialize();
  }

  private initialize() {
    const loadedTasks = this.storageAgent.load<Task[]>();
    if (loadedTasks) {
      this.tasks = loadedTasks;
    }
  }

  private notify() {
    this.storageAgent.save(this.tasks);
    this.subscribers.forEach(sub => sub());
  }

  subscribe(callback: () => void): () => void {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== callback);
    };
  }

  getTasks(): Task[] {
    return TaskSkills.listTasks(this.tasks);
  }

  createTask(title: string): void {
    this.tasks = TaskSkills.createTask(this.tasks, title);
    this.notify();
  }

  toggleTask(id: string): void {
    this.tasks = TaskSkills.toggleTask(this.tasks, id);
    this.notify();
  }

  deleteTask(id: string): void {
    this.tasks = TaskSkills.deleteTask(this.tasks, id);
    this.notify();
  }
}

// Export a singleton instance for simplicity, but could be injected
export const taskAgent = new TaskAgent();
