   import reactImg from '../assets/react-core-concepts.png'
  const consideration = ['Fundamentals','Nandani','Kunal','Veena','Neha']
 function genValues(max){
  return  Math.floor( Math.random()*(max+1));
 }
 export default function Header(){
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