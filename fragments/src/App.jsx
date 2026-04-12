
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';


function App() {

  return (
     <> //insteaaad of div we can use empty tag 
      <Header />
      <main>
      <CoreConcepts/>
       <Examples/>
      </main>
    </>
  );
}

export default App;
