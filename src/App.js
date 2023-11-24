import { useEffect, useState } from 'react';
import supabase from './supabasse'
import './style.css';
import Header from './components/Header';
import NewFactForm from './components/NewFactForm';
import CategoryFilter from './components/CategoryFilter';
import FactList from './components/FactList';

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

export default function App() {
  // 1- define state varible (showForm state)
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentCategory, setCurrentCategory] = useState('all')


  useEffect(function () {
    async function getFacts() {
      setIsLoading(true);
      let query = supabase.from('facts').select('*')
      if (currentCategory !== 'all') query = query.eq('category', currentCategory)
      // .eq() > equal 

      const { data: facts, error } = await query
      .order('votesInteresting', { ascending: false })

      if (!error) setFacts(facts)
      else alert('There was a problem getting data')

      setIsLoading(false);
    }
    getFacts()
  }, [currentCategory]) // depends array


  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />

      {/* 2- use state varible */}
      {showForm ? <NewFactForm setFacts={setFacts} setShowForm={setShowForm} /> : null}

      <main className='main'>
        <CategoryFilter setCurrentCategory={setCurrentCategory} />

        {isLoading ? <Loader /> : <FactList facts={facts} setFacts={setFacts} />}
      </main>

    </>
  )
}

function Loader() {
  return (
    <p className='msg'>Loading...</p>
  )
}


