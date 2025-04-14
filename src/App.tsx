import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>Login</>}>
          {' '}
        </Route>
        <Route path="/cadastro" element={<>Cadastro</>}>
          {' '}
        </Route>
        <Route path="/home" element={<>Home</>}>
          {' '}
        </Route>
        <Route path="/leads" element={<>Leads</>}>
          {' '}
        </Route>
        <Route path="/perfil" element={<>Perfil</>}>
          {' '}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
