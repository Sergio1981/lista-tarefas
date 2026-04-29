import { Task } from '../entities/Task';

export const TestSkills = {
  generateMockTask: (id: string, title: string, completed: boolean = false): Task => ({
    id,
    title,
    completed,
    createdAt: Date.now(),
  }),

  generateMultipleTasks: (count: number): Task[] => {
    return Array.from({ length: count }, (_, i) => 
      TestSkills.generateMockTask(`mock-id-${i}`, `Mock Task ${i}`, i % 2 === 0)
    );
  },
  
  mockLocalStorage: (): void => {
    const store: Record<string, string> = {};
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn((key: string) => store[key] || null),
        setItem: jest.fn((key: string, value: string) => {
          store[key] = value.toString();
        }),
        clear: jest.fn(() => {
          for (const key in store) delete store[key];
        }),
      },
      writable: true,
    });
  }
};
