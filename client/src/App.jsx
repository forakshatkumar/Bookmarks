import React from 'react'
import logo from './assets/app-logo.svg'

function App() {
  return (
    <header className="w-full h-15 bg-black flex items-center justify-between px-6">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src={logo} alt="App logo" className="h-10 w-auto" />
      </a>

      {/* Nav + Profile together on the right */}
      <div className="flex items-center gap-8">
        <nav className="flex items-center gap-6 text-white">
          <a href="/explore">Explore</a>
          <a href="/collections">Collections</a>
          <a href="/notifications">Notifications</a>
        </nav>

        <button
          type="button"
          className="px-4 py-2 rounded-full bg-white text-black"
        >
          Profile
        </button>
      </div>
    </header>
  )
}

export default App