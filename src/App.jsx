import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';

function App() {
   let fullName="Imen Bouzaya"
   let bio="I love programming"
   let profession="Web developper"
  
   const handleName=(x)=>{alert(`My name is ${x}`)}
  return (
    <div className="App">
      <Profile name={fullName} bio={bio} profession={profession} n={handleName}>
        <img src="https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg" alt="" />
      </Profile>
    </div>
  );
}

export default App;
