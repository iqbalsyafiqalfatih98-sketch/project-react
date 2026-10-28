import './App.css'

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <h2>Iqbal titut</h2>
        <a href="#home">Home</a>
      </nav>

      <main className="hero" id="home">
        <h1>Selamat Datang!</h1>
        <p>
          Ini adalah anu pertama saya.
        </p>
        <button onClick={() => alert('ini notif nya!')}>
          Klik Saya
        </button>
      </main>
    </div>
  )
}

export default App