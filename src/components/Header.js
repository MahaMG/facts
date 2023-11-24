export default function Header({ showForm, setShowForm }) {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="logo.png"
          height="68"
          width="68"
          alt="Today I Learned Logo" />
        <h1>facts</h1>
      </div>
      {/* 3- update state varible */}
      <button className="btn btn-large btn-open"
        onClick={() => setShowForm(show => !show)}>
        {showForm ? 'Close' : 'Share a fact'}
      </button>
    </header>
  );
}
