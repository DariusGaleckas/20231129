import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Create from './Components/Create';
import { useEffect, useState } from 'react';
import { read, store, destroy, update } from './Functions/ls';
import List from './Components/List';
import Delete from './Components/Delete';
import Edit from './Components/Edit';

const KEY = 'colors';

function App() {

  const [colors, setColors] = useState(null);
  const [create, setCreate] = useState(null);
  const [remove, setRemove] = useState(null); // delete
  const [clear, setClear] = useState(null); // destroy
  const [edit, setEdit] = useState(null);
  const [update, setUpdate] = useState(null);


  useEffect(_ => {
    // imitate fetch from server
    setTimeout(_ => {
      setColors(read(KEY));
    }, 100);

    console.log(read(KEY));
  }, []);


  useEffect(_ => {
    if (null === create) {
      return;
    }
    const id = store(KEY, create);
    setColors(c => [{...create, id }, ...c]);

  }, [create]);

  useEffect(_ => {
    if (null === clear) {
      return;
    }
    destroy(KEY, clear.id);
    setColors(c => c.filter(color => color.id !== clear.id));
    setClear(null);
    setRemove(null);
  }, [clear]);

  // useEffect(_ => {
  //   if (null === update) {
  //     return;
  //   }
  //   update(KEY, update);
  //   setColors(c => c.map(color => color.id === update.id ? update : color));
  //   setUpdate(null);
  //   setEdit(null);
  // }
  // , [update]);



  return (
    <div className="container user-87548">
      <div className="row">
        <div className="col-5">
          <Create setCreate={setCreate} />
        </div>
        <div className="col-7">
          <List colors={colors} setRemove={setRemove} setEdit={setEdit} />
        </div>
      </div>
      <Delete remove={remove} setRemove={setRemove} setClear={setClear} />
      <Edit edit={edit} setEdit={setEdit} setUpdate={setUpdate} />  
    </div> 
  );
}

export default App;