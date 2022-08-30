
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import  {Component} from 'react'

const todoItem  = [
  {
      id: 1,
      name: 'ahmed dauda',
      about: 'I am a selve taugh web developer from Nigeria..',
      passion: 'Programming',
      factme: 'Patient'
  },
  {
      id: 2,
      name: 'ahmed mohammed',
      about: 'I am a selve taugh web developer from Nigeria..',
      passion: 'machine learning ',
      factme: 'truthfulness'
  },
  {
    id: 3,
    name: 'mohammed',
    about: 'I am a selve taugh web developer from Nigeria..',
    passion: 'machine learning ',
    factme: 'sincerity'
},
{
  id: 4,
  name: 'mohammed',
  about: 'I am a selve taugh web developer from Nigeria..',
  passion: 'machine learning ',
  factme: 'sincerity'
}
  ]
  
  class Variable extends Component{
      constructor(props){
          super(props);
          this.state = {todoItem}
      }
  
      render (){
          return(
              <div  className='content'>
                {this.state.todoItem.map(item =>(
                  <div>
                 <h1>{item.name}</h1> 
                 <p>{item.about}</p> 
                 <p>{item.passion}</p> 
                 <p>{item.factme}</p> 
                  
                  
                  </div>
                ))}
                  
              </div>
          )
  
      }
  }

function App() {
  return (
    <div className="App">
      <Header/>
      <Variable/>
      {/* <Content/> */}
      
      <Footer/>
      
    </div>
  );
}

export default App;


