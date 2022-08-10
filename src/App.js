
import './App.css';
import Profil from './profil/Profil';

function App() {
  const FulName = 'Youssef Msekni'
  const Profession = 'Joueur de footbal'
  const Bio = ['2008-2013 : ES Tunis','2013-2021 : Al-Duhail SC','2021→   : Al-Arabi SC']
  const handleName=(a)=>{
    return alert(` ${a} vous souhaite la bienvenue `)
  }
  return (
  <>
  <Profil FulName={FulName} Profession = {Profession} Bio={Bio} handleName={handleName}>
    <img src='/Youssef.jpg' alt='not found'/>

  </Profil>
  </>
  );
}

export default App;
