import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Create from './Components/Create';
import { useEffect, useState } from 'react';
import { store} from './Functions/ls'

const KEY = 'colors';

function App() {

  const [create, setCreate] = useState(null);


  useEffect(() => {
    if (null === create) {
      return;
    }
    store(KEY, create);
  },  [create]);



  return (
<div className="container">
  <div className="row">
    <div className="col-5">

      <Create setCreate={setCreate} />

    </div>
    <div className="col-7">
      LIST
    </div>
  </div>
</div>
  );
}

export default App;
