 import reactImg from './assets/react-core-concepts.png'
 import componentsImg from './assets/components.png'
 import jsxImg from './assets/jsx-ui.png'
 import propsImg from './assets/config.png'
 import stateImg from './assets/state-mgmt.png'

 const consideration = ['Fundamentals','Nandani','Kunal','Veena','Neha']
 function genValues(max){
  return  Math.floor( Math.random()*(max+1));
 }
 export function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title}></img>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </li>
  );
 }

 export function Header(){
  const description = consideration[genValues(4)];
 return (<header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>);
}
function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
        <h2> Core Concepts</h2>
        <ul>
        <CoreConcept image ={componentsImg} 
        title = " Components"
        description = "The Core UI Building Block" />
          <CoreConcept image ={jsxImg} 
        title = " Jsx"
        description = "Return pote" />
          <CoreConcept image ={propsImg} 
        title = " Props"
        description = "The Core UI Building Block" />
          <CoreConcept image ={stateImg} 
        title = "State"
        description = "" />

        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;