import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { Task } from './model';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [priorityLevel, setPriorityLevel] = useState<string>('');

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      description: { value: string };
      priority: { value: string };
    };

    setTasks([
      ...tasks,
      {
        title: target.title.value,
        description: target.description.value,
        priority: target.priority.value.toLowerCase(),
      },
    ]);

    target.title.value = '';
    target.description.value = '';
    target.priority.value = '';

  };

  const handleTaskLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as typeof e.target;

    console.log(target.value);
    setPriorityLevel(target.value);
  };

  return (
    <>
      <h1>SQOR Task Management</h1>
      <div>
        <Form handleAdd={handleAdd}></Form>
      </div>
      <div>
        <select
          name="priority-select"
          id="priority-select"
          onChange={handleTaskLevel}
        >
          <option value="">--Please Choose Priority Level--</option>
          <option value="">All Tasks</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="card">
        {priorityLevel === ''
          ? tasks.map((task) => (
              <ul>
                <li>Title: {task.title}</li>
                <li>Description: {task.description}</li>{' '}
                <li>Priority: {task.priority}</li>
              </ul>
            ))
          : tasks
              .filter((task) => task.priority === priorityLevel)
              .map((task) => (
                <ul>
                  <li>Title: {task.title}</li>
                  <li>Description: {task.description}</li>{' '}
                  <li>Priority: {task.priority}</li>
                </ul>
              ))}
      </div>
    </>
  );
}

export default App;
