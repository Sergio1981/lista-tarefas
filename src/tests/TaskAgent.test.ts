import { TaskAgent } from '../agents/TaskAgent';

// We will mock the StorageSkills to prevent real localStorage operations
jest.mock('../skills/StorageSkills', () => ({
  StorageSkills: {
    saveData: jest.fn(),
    loadData: jest.fn(() => []),
  }
}));

describe('TaskAgent', () => {
  let agent: TaskAgent;

  beforeEach(() => {
    agent = new TaskAgent();
  });

  it('should create a task and notify subscribers', () => {
    const subscriber = jest.fn();
    agent.subscribe(subscriber);

    agent.createTask('New Task');

    const tasks = agent.getTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('New Task');
    expect(subscriber).toHaveBeenCalled();
  });

  it('should toggle a task status', () => {
    agent.createTask('Task 1');
    const task = agent.getTasks()[0];

    agent.toggleTask(task.id);
    expect(agent.getTasks()[0].completed).toBe(true);
  });

  it('should delete a task', () => {
    agent.createTask('Task to delete');
    const task = agent.getTasks()[0];

    agent.deleteTask(task.id);
    expect(agent.getTasks().length).toBe(0);
  });
});
