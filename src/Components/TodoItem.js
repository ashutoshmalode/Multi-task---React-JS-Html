// App.js

// import "./App.css";
// import React, { useState } from "react";
// import TodoItem from "./Components/TodoItem";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [text, setText] = useState("");
//   const [items, setItems] = useState([]);

//   const handleText = (event) => {
//     setText(event.target.value);
//   };

//   const handleAdd = () => {
//     const newItems = [...items, text];
//     setItems(newItems);
//   };

//   const handleDelet = (item) => {
//     const newItems = items.filter((element) => {
//       return element !== item;
//     });
//     setItems(newItems);
//   };

//   return (
//     <div>
//       <div>
//         <h1 className="text-center my-3 mt-5">My Plan</h1>
//         <form className="row d-flex justify-content-center">
//           <div className="col-auto">
//             <input
//               type="text"
//               className="form-control"
//               value={text}
//               onChange={handleText}
//             />
//           </div>
//           <button
//             type="button"
//             className="btn btn-dark col-auto"
//             onClick={handleAdd}
//           >
//             Add
//           </button>
//         </form>
//       </div>
//       <div>
//         <ol>
//           {items.map((item, i) => (
//             <li key={i}>
//               <TodoItem item={item} onDelete={handleDelet} />
//             </li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// }

// export default App;

// ---------------------------------------------------------

// TodoItem.js

// import React from "react";

// function TodoItem({ item, onDelete }) {
//   return (
//     <div className="container">
//       {item}
//       <button
//         className="btn btn-dark btn-sm"
//         onClick={() => {
//           onDelete(item);
//         }}
//       >
//         X
//       </button>
//     </div>
//   );
// }

// export default TodoItem;
