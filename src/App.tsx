import React, { useEffect, useState } from 'react';
import GlobalStyle from 'styles/global';
import Button from './components/atoms/Button';
import { collection, getDocs } from 'firebase/firestore';
import { projectFirestore } from './firebase/config';
import Loader from './components/atoms/Loader';
import Header from './components/molecules/header';
import HomePage from './components/pages/home';
import Container from './components/atoms/Conatianer';

function App() {
  const [, setUrl] = useState('');

  const fetchPost = async () => {
    await getDocs(collection(projectFirestore, 'projects/')).then(querySnapshot => {
      const newData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      // @ts-ignore
      setUrl(newData[0].imgUrl);

      console.log(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Container>
        <HomePage />
      </Container>
      {/*<img src={url} alt="" />*/}
      <header className="App-header">Hello</header>
      <Button />
      <Loader />
    </div>
  );
}

export default App;
