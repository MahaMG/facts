// لمن تكون الداتا من نفس المكان مو من الداتابيس

// import { useState } from 'react';
// import './style.css';

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

// // Explain the 'useState()' simply
// function Counter() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <span style={{ fontSize: '40px' }}>{count}</span>
//       <button className='btn btn-large' onClick={() => setCount(c => c + 1)}>1+</button>
//     </div>
//   )
// }

// function App() {
//   // 1- define state varible (showForm state)
//   const [showForm, setShowForm] = useState(false);

//   const [facts, setFacts] = useState(initialFacts)


//   return (
//     <>
//       <Header showForm={showForm} setShowForm={setShowForm} />

//       {/* 2- use state varible */}
//       {showForm ? <NewFactForm setFacts={setFacts} setShowForm={setShowForm} /> : null}

//       <main className='main'>
//         <CategoryFilter />
//         <FactList facts={facts} />
//       </main>

//     </>
//   )
// }

// function Header({ showForm, setShowForm }) {
//   return (
//     <header className="header">
//       <div className="logo">
//         <img
//           src="logo.png"
//           height="68"
//           width="68"
//           alt="Today I Learned Logo"
//         />
//         <h1>Today I Learned</h1>
//       </div>
//       {/* 3- update state varible */}
//       <button className="btn btn-large btn-open"
//         onClick={() => setShowForm(show => !show)}>
//         {showForm ? 'Close' : 'Share a fact'}
//       </button>
//     </header>
//   )
// }

// function isValidHttpUrl(string) {
//   let url;

//   try {
//     url = new URL(string);
//   } catch (_) {
//     return false;
//   }

//   return url.protocol === "http:" || url.protocol === "https:";
// }

// function NewFactForm({setFacts, setShowForm}) {
//   const [text, setText] = useState('')
//   const [source, setSource] = useState('https://www.test.com.sa/')
//   const [category, setCategory] = useState('')
//   const textLength = text.length;

//   function handleSubmit(e){
//     // 1. prevent browser reload
//     e.preventDefault();
//     console.log(text, source, category);

//     // 2. check if data is valid. if so create a new fact
//     if (text && isValidHttpUrl(source) && category && textLength <= 200 ){
      
//       // 3. create a new fact object
//       const newFact = {
//         id: Math.round(Math.random() * 1000000),
//         text,
//         source,
//         category,
//         votesInteresting: 0,
//         votesMindblowing: 0,
//         votesFalse: 0,
//         createdIn: new Date().getUTCFullYear,
//       }
      
//       // 4. Add the new fact to the UI: Add the fact to the state
//       setFacts((facts) => [newFact, ...facts])
      
//       // 5. Reset input fields
//       setText('')
//       setSource('')
//       setCategory('')
      
//       // 6. Close the form
//       setShowForm(false)

//     }
//   }

//   return (
//     <form className="fact-form" onSubmit={handleSubmit}>
//       <input type="text"
//         placeholder="Share a fact with the world..."
//         value={text}
//         onChange={e => setText(e.target.value)} />
//       <span>{200 - textLength}</span>
//       <input type="text"
//         placeholder="Trustworthy source..."
//         value={source}
//         onChange={e => setSource(e.target.value)} />
//       <select value={category} onChange={e => setCategory(e.target.value)}>
//         <option value="">Choose category:</option>
//         {CATEGORIES.map((cat) => (
//           <option key={cat.name} value={cat.name}>{cat.name.toUpperCase()}</option>
//         ))}
//       </select>
//       <button className="btn btn-large">Post</button>
//     </form>

//   )
// }

// function CategoryFilter() {
//   return (
//     <aside>
//       <ul>
//         <li className="category">
//           <button className="btn btn-all-categories">All</button>
//         </li>

//         {CATEGORIES.map(cat => (
//           <li key={cat.name} className="category">
//             <button
//               className="btn btn-category"
//               style={{ backgroundColor: cat.color }}>
//               {cat.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// }

// function FactList({facts}) {
//   return (
//     <section>
//       <ul className='facts-list'>
//         {facts.map((fact) => (
//           // مو شرط نفس الاسم للا،بجكت والمتغير
//           // +key needs to be immediately on first element 
//           <Fact key={fact.id} fact={fact} />
//         ))}
//       </ul>
//       <p>There are {facts.length} facts in the database. Add your own 👀</p>
//     </section>
//   )
// }

// // بدل مانكتب في البراميتر بروبس ونرجع نعرفه داخل الفانكشن نكتبه بصيغة جي اس اكس في البراميتر
// function Fact({ fact }) {
//   return (
//     <li className="fact">
//       <p>
//         {fact.text}
//         <a
//           className="source"
//           href={fact.source}
//           target="_blank">(Source)</a>
//       </p>
//       <span className="tag" style={{ backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category).color }}
//       >{fact.category}</span
//       >
//       <div className="vote-buttons">
//         <button>👍 {fact.votesInteresting}</button>
//         <button>🤯 {fact.votesMindblowing}</button>
//         <button>⛔️ {fact.votesFalse}</button>
//       </div>
//     </li>
//   )
// }

// export default App;
