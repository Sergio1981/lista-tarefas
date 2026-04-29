import { useState, useEffect, useCallback } from 'react';
import { taskAgent } from '../agents/TaskAgent';
import { Task } from '../entities/Task';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Initial load
    setTasks(taskAgent.getTasks());

    // Subscribe to changes
    const unsubscribe = taskAgent.subscribe(() => {
      setTasks(taskAgent.getTasks());
    });

    return () => unsubscribe();
  }, []);

  const addTask = useCallback((title: string) => {
    taskAgent.createTask(title);
  }, []);

  const toggleTask = useCallback((id: string) => {
    taskAgent.toggleTask(id);
  }, []);

  const deleteTask = useCallback((id: string) => {
    taskAgent.deleteTask(id);
  }, []);

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
  };
}
