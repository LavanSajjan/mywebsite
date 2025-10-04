import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-bold mb-6">🎮 Lavan Sajjan</h1>
      <p className="text-lg mb-4">SQL Developer | Data Engineer | Data Analyst</p>
      <a
        href="/lavansajjan.pdf"
        className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
        download
      >
        📄 Download Resume
      </a>
    </div>
  )
}
