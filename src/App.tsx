import React, { useEffect, useState } from 'react';
import GlobalStyle from 'styles/global';
import Button from './components/atoms/Button';
import { collection, getDocs } from "firebase/firestore";
import { projectFirestore } from './firebase/config';

function App() {
  const [url, setUrl] = useState('')


  const fetchPost = async () => {

    await getDocs(collection(projectFirestore, "projects/"))
      .then((querySnapshot)=>{
        const newData = querySnapshot.docs
          .map((doc) => ({...doc.data(), id:doc.id }));
        // @ts-ignore
        setUrl(newData[0].imgUrl)
      })

  }

  useEffect(() => {
    fetchPost()
  }, [])


  console.log(url)


  return (
    <div className="App">
      <GlobalStyle />
      <img src={url} alt='' />
      <header className="App-header">Hello</header>
      <Button />
    </div>
  );
}

export default App;
