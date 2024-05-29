// import { ref, set } from 'firebase/database';
// import database from './firebase';
import './App.css';
import app from './firebase'
import { getFirestore,addDoc,collection } from 'firebase/firestore'

const fireStore = getFirestore(app)
function App() {
  // const putData = () => {
  //   set(ref(database,"users/test"),{
  //     name: "Parth",
  //     password: "157618",
  //     address : "canada return"
  //   })
  // }

  // const putData1 = () => {
  //             set(ref(database,"users/test2"),{
  //     name: "virat kohli",
  //     password: "157618",
  //     address : "australia return"
  //   })
  // }

  const addDocuments = () => {
    addDoc(collection(fireStore,"User"),{
      name: "Parth",
      password: "157618",
    })
  }

  return (
    <>
      <h1>Real time database</h1>
      {/* <button onClick={putData}>Put Data</button>
      <button onClick={putData1}>pass</button> */}
      <button onClick={addDocuments}>AddDocument</button>
    
    </>
      );
}

export default App;
