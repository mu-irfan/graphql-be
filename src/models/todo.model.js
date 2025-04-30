const { pool } = require("../config/db");

// ==== get todos list ====
const getTodos = async () => {
  const res = await pool.query("SELECT * FROM todos ORDER BY id DESC");
  return res.rows;
};

// ==== insert new item to todos ====
const createTodo = async (title) => {
  const res = await pool.query(
    "INSERT INTO todos (title) VALUES ($1) RETURNING *",
    [title]
  );
  return res.rows[0];
};

// ==== mark item as completed ====
const toggleTodoCompleted = async (id) => {
  const res = await pool.query(
    `UPDATE todos
     SET completed = NOT completed
     WHERE id = $1
     RETURNING *`,
    [id]
  );
  return res.rows[0];
};

// ==== delete item from todos ====
const deleteTodo = async (id) => {
  const res = await pool.query(`DELETE FROM todos WHERE id = $1 RETURNING id`, [
    id,
  ]);
  return res.rows[0]?.id;
};

module.exports = {
  getTodos,
  createTodo,
  toggleTodoCompleted,
  deleteTodo,
};
