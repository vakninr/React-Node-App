 import { BrowserRouter  } from 'react-router-dom';
import MenuComp from './Components/menu.jsx';

function App() {
  return (
    <div dir="rtl" >
      <BrowserRouter>
      <MenuComp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
