import Header from "./components/Header"
import GlobalStyles from './GlobalStyles.jsx'
import Dom from "./screens/Dom"
import HomePage from "./screens/HomePage"
import {Routes, Route} from 'react-router-dom'
import ReactJs from "./screens/ReacJs"
import ReactNative from "./screens/ReactNative"
import Footer from "./components/Footer"

function App() {
 

  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/> 
        <Route path='/dom' element={<Dom/>}/>
        <Route path='/reactjs' element={<ReactJs/>}/>
        <Route path='/reactnative' element={<ReactNative/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
