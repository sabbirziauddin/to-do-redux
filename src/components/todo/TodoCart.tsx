import React from 'react';

const TodoCart = () => {
    return (
      <div className="bg-white p-2 font-semibold  flex justify-between items-center rounded-md">
        <input type="checkbox" name="" id="" />
        <p>Todo Title</p>
        <p>Time</p>
        <p>description</p>
        <div className="space-x-2">
          <button>del</button>
          <button>Edit</button>
        </div>
      </div>
    );
};

export default TodoCart;