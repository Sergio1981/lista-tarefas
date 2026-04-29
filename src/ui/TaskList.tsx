import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import { TaskItem } from './TaskItem';

export const TaskList: React.FC = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const [inputValue, setInputValue] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>AI Agent Todo List</h1>
      
      <form onSubmit={handleAdd} style={{ display: 'flex', marginBottom: '24px' }}>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          style={{ 
            flex: 1, 
            padding: '12px', 
            fontSize: '16px', 
            border: '1px solid #ccc',
            borderRadius: '4px 0 0 4px',
            outline: 'none'
          }}
        />
        <button 
          type="submit"
          style={{ 
            padding: '12px 24px', 
            fontSize: '16px', 
            background: '#1890ff', 
            color: 'white', 
            border: 'none',
            borderRadius: '0 4px 4px 0',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Add Task
        </button>
      </form>

      <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        {tasks.length === 0 ? (
          <div style={{ padding: '24px', textAlign: 'center', color: '#888' }}>
            No tasks yet. Add one above!
          </div>
        ) : (
          tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggle={toggleTask} 
              onDelete={deleteTask} 
            />
          ))
        )}
      </div>
    </div>
  );
};
