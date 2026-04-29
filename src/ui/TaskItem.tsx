import React from 'react';
import { Task } from '../entities/Task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '12px', borderBottom: '1px solid #eee' }}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggle(task.id)}
        style={{ marginRight: '16px', width: '20px', height: '20px', cursor: 'pointer' }}
      />
      <span style={{ 
        flex: 1, 
        textDecoration: task.completed ? 'line-through' : 'none',
        color: task.completed ? '#888' : '#333',
        fontSize: '16px'
      }}>
        {task.title}
      </span>
      <button 
        onClick={() => onDelete(task.id)}
        style={{ 
          background: '#ff4d4f', 
          color: 'white', 
          border: 'none', 
          padding: '8px 12px', 
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Delete
      </button>
    </div>
  );
};
