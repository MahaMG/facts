import { useState } from 'react';
import { CATEGORIES } from '../CATEGORIES';
import supabase from '../supabasse';

// بدل مانكتب في البراميتر بروبس ونرجع نعرفه داخل الفانكشن نكتبه بصيغة جي اس اكس في البراميتر
export default function Fact({ fact, setFacts }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const isDisputed = fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;

  async function handleVotes(columnName) {
    setIsUpdating(true);
    const { data: updateFact, error } = await supabase.from('facts')
      .update({ [columnName]: fact[columnName] + 1 })
      .eq('id', fact.id).select();
    setIsUpdating(false);

    if (!error) setFacts(facts => facts.map(f => (f.id === fact.id ? updateFact[0] : f)
    ));
  }

  return (
    <li className="fact">
      <p>
        {isDisputed ? <span className='disputed'>[⛔️ disputed]</span> : null}
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank">(Source)</a>
      </p>
      <span className="tag" style={{ backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category).color }}
      >{fact.category}</span>
      <div className="vote-buttons">
        <button
          onClick={() => handleVotes('votesInteresting')}
          disabled={isUpdating}>👍 {fact.votesInteresting}</button>
        <button
          onClick={() => handleVotes('votesMindblowing')}
          disabled={isUpdating}>🤯 {fact.votesMindblowing}</button>
        <button
          onClick={() => handleVotes('votesFalse')}
          disabled={isUpdating}>⛔️ {fact.votesFalse}</button>
      </div>
    </li>
  );
}
