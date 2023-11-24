import Fact from './Fact';

export default function FactList({ facts, setFacts }) {
  if (facts.length === 0) return (
    <p>No facts for this category yet! Create the first one ✌🏽</p>
  );
  return (
    <section>
      <ul className='facts-list'>
        {facts.map((fact) => (
          // مو شرط نفس الاسم للاوبجكت والمتغير
          // +key needs to be immediately on first element 
          <Fact key={fact.id} fact={fact} setFacts={setFacts} />
        ))}
      </ul>
      <p>There are {facts.length} facts in the database. Add your own 👀</p>
    </section>
  );
}

