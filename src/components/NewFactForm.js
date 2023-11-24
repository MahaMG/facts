import { useState } from 'react';
import { CATEGORIES } from '../CATEGORIES';
import supabase from '../supabasse';

function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

export default function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState('');
  const [source, setSource] = useState(''); // https://www.test.com.
  const [category, setCategory] = useState('');
  const textLength = text.length;

  async function handleSubmit(e) {
    // 1. prevent browser reload
    e.preventDefault();
    // console.log(text, source, category);
    // 2. check if data is valid. if so create a new fact
    if (text && isValidHttpUrl(source) && category && textLength <= 200) {
      // 3.1 Upload fact to supabase and receive the new fact object
      const { data: newFact, error } = await supabase
        .from('facts').insert([{ text, source, category }]).select();

      // console.log(newFact);
      // console.log(error);
      // 4. Add the new fact to the UI: Add the fact to the state
      if (!error) setFacts((facts) => [newFact[0], ...facts]);

      // 5. Reset input fields
      setText('');
      setSource('');
      setCategory('');

      // 6. Close the form
      setShowForm(false);

    }
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={e => setText(e.target.value)} />
      <span>{200 - textLength}</span>
      <input type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={e => setSource(e.target.value)} />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">Choose category:</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>{cat.name.toUpperCase()}</option>
        ))}
      </select>
      <button className="btn btn-large">Post</button>
    </form>

  );
}
