import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getTodos = async () => {
  try {
    const res = await instance.get('/todos');
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getTodo = async (id) => {
  try {
    const res = await instance.get('/todos/' + id);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};




export const deleteTodo = async (id) => {
  try {
    const res = await instance.delete('/todos/' + id);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addTodo = async (data) => {
  try {
    const res = await instance.post('/todos', data);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updateTodo = async (id, data) => {
  try {
    const res = await instance.put('/todos/' + id, data);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};


