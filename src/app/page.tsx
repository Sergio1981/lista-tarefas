'use client';

import { TaskList } from '@/ui/TaskList';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '40px 20px' }}>
      <TaskList />
    </main>
  );
}
