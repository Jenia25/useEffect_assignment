import React, { useState, useEffect } from "react";

function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Users API state
  const [users, setUsers] = useState([]);

  // useEffect: Fetch data once on mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 9))) 
      .catch((err) => console.error(err));
  }, []);

  // Counter functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Welcome to useEffect Practice
      </h1>

      {/* Counter Section */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Count: {count}</h2>
        <div className="flex gap-4 justify-center">
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Users API Section */}
      <h2 className="text-xl font-semibold mb-4">User Data (API)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-lg p-4 border hover:scale-105 transition"
          >
            <h3 className="text-lg font-bold text-blue-700">{user.name}</h3>
            <p className="text-gray-700">Username: {user.username}</p>
            <p className="text-gray-500">Company: {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
