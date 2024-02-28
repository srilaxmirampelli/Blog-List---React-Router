import './App.css'
import {Route, Switch} from 'react-router-dom'
import About from './components/About/index'
import Contact from './components/Contact/index'
import Header from './components/Header/index'
import Home from './components/Home/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <div className="app-container">
    <div className="app-card">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
