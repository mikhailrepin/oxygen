import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <Outlet />
      </main>
    </div>
  )
}

export default App
