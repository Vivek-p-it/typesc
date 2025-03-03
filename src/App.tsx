import './App.css'
import Greeting from './Greeting'

const App: React.FC = () => {
  const myName: string = "world";

  return (
    <>
      <div>
        <Greeting name={ myName } />
        <Greeting name="User" />    
        {/* <Greeting name=123 /> */}
      </div>
      <h1>Sample Project</h1>
    </>
  )
}

export default App
