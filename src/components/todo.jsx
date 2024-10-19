import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState(null);
  const id = sessionStorage.getItem('id');

  // Fetch tasks from the server
  useEffect(() => {
    const fetchTasks = async () => {
      if (id) {
        try {
          const response = await axios.get(`https://todo-backend-acad.onrender.com/api/v2/getTasks/${id}`);
          setTasks(response.data.tasks);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }
    };
    fetchTasks();
  }, [id]);

  // Handle Add Task
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError('Title and Description cannot be empty.');
      return;
    }

    if (id && !editId) {
      try {
        const response = await axios.post('https://todo-backend-acad.onrender.com/api/v2/addtask', { title, body, id });
        toast.success("Task added successfully");
        setTasks([...tasks, response.data]); // Assuming API returns the created task
      } catch (error) {
        toast.error('Failed to add task');
      }
    } else if (!id) {
      setTasks([...tasks, { id: Date.now(), title, body, completed: false }]);
      toast.success("Task added locally");
      toast.error('Your task is not saved! Please sign in.');
    }

    setTitle('');
    setBody('');
    setError(null);
  };

  // Handle Edit Task
  const handleEditTask = (task) => {
    setTitle(task.title);
    setBody(task.body);
    setEditId(task._id);
  };

  // Handle Update Task
  const handleUpdate = async () => {
    if (editId && id) {
      try {
        const updatedTask = { title, body, id };
        const response = await axios.put(`https://todo-backend-acad.onrender.com/api/v2/updateTask/${editId}`, updatedTask);
        setTasks(tasks.map((task) => (task._id === editId ? response.data.task : task)));
        toast.success("Task updated successfully");
        setEditId(null);
        
        setTitle(''); 
        setBody('');
      } catch (error) {
        console.error(error);
        toast.error('Failed to update task');
      }
    } else {
      toast.error('Please sign in to update tasks.');
    }
  };

  // Handle Delete Task
  const handleDeleteTask = async (taskId) => {
    if (id) {
      try {
        await axios.delete(`https://todo-backend-acad.onrender.com/api/v2/deleteTask/${taskId}`, { data: { id } });
        setTasks(tasks.filter((task) => task._id !== taskId));
        toast.success('Task deleted successfully');
      } catch (error) {
        console.error('Failed to delete task:', error);
        toast.error('Failed to delete task');
      }
    } else {
      toast.error('Please sign in first');
    }
  };

  // Handle Mark Complete
  const handleMarkComplete = async (task) => {
    if(id){
    try {
      console.log(task)
      const updatedTask = { completed: !task.completed, id:id };
  
      // Send the request to the server to update task completion status
      const response = await axios.put(
        `https://todo-backend-acad.onrender.com/api/v2/completedTasks/${task._id}`, 
        updatedTask
      );
          console.log(response);
      // Update tasks with the response from the server
      setTasks(tasks.map((t) => (t._id === task._id ? response.data.task : t)));
  
      toast.success('Task completion status updated successfully');
    } catch (error) {
      console.error('Failed to update task completion:', error);
      toast.error('Failed to mark task as complete');
    }
  }
  };
  

  return (
    <div className="h-fit">
      <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-md mb-4">
        <h1 className="text-2xl font-bold text-center mb-6">ToDo List</h1>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleAdd} className="flex flex-col space-y-4 mb-6">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={editId ? "Update your title..." : "Add a new title..."}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            type="text"
            value={body}
            name="body"
            onChange={(e) => setBody(e.target.value)}
            placeholder={editId ? "Update your description..." : "Add a new description..."}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition ${editId ? 'hidden' : 'block'}`}
          >
            {'Add Task'}
          </button>
          <button
            onClick={handleUpdate}
            type="button"
            className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition ${editId ? 'block' : 'hidden'}`}
          >
            {'Update Task'}
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleMarkComplete(task)}
                  className="mr-2"
                />
                <div className="text-left text-wrap break-words">
                  <h3 className={`font-bold text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-wrap break-words">{task.body}</p>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={`text-green-600 cursor-pointer ${task.completed ? 'opacity-100' : 'opacity-40'}`}
                onClick={() => handleMarkComplete(task)}
                size="lg"
              />
            </div>
            <div className="flex justify-end space-x-3 mt-3">
              <button
                onClick={() => handleEditTask(task)}
                className="text-yellow-500 hover:text-yellow-600 transition"
              >
                <FontAwesomeIcon icon={faEdit} size="lg" />
              </button>
              <button
                onClick={() => handleDeleteTask(task._id)}
                className="text-red-500 hover:text-red-600 transition"
              >
                <FontAwesomeIcon icon={faTrashAlt} size="lg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
