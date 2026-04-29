import { TaskSkills } from '../skills/TaskSkills';
import { Task } from '../entities/Task';

describe('TaskSkills', () => {
  let initialTasks: Task[];

  beforeEach(() => {
    initialTasks = [
      { id: '1', title: 'Task 1', completed: false, createdAt: 1000 },
      { id: '2', title: 'Task 2', completed: true, createdAt: 2000 },
    ];
  });

  it('should create a task', () => {
    const tasks = TaskSkills.createTask(initialTasks, 'Task 3');
    expect(tasks.length).toBe(3);
    expect(tasks[2].title).toBe('Task 3');
    expect(tasks[2].completed).toBe(false);
    expect(tasks[2].id).toBeDefined();
  });

  it('should not create a task if title is empty', () => {
    const tasks = TaskSkills.createTask(initialTasks, '   ');
    expect(tasks.length).toBe(2);
  });

  it('should toggle a task status', () => {
    const tasks = TaskSkills.toggleTask(initialTasks, '1');
    expect(tasks[0].completed).toBe(true);
  });

  it('should delete a task', () => {
    const tasks = TaskSkills.deleteTask(initialTasks, '1');
    expect(tasks.length).toBe(1);
    expect(tasks[0].id).toBe('2');
  });

  it('should list tasks with completed ones at the end', () => {
    const tasks = TaskSkills.listTasks(initialTasks);
    // Task 1 is incomplete, Task 2 is complete. Incomplete should be first.
    expect(tasks[0].id).toBe('1');
    expect(tasks[1].id).toBe('2');
  });
});
