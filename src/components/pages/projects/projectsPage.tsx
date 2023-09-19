import React, { useEffect, useState } from 'react';
import ProjectsPageStyled, { LoaderWrapper } from './projectsPage.styled';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Loader from '../../atoms/Loader';
import { collection, getDocs } from 'firebase/firestore';
import { projectFirestore } from '../../../firebase/config';
import { ItemsType } from './types';

const ProjectsPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<ItemsType>([{ id: '', imgUrl: '' }]);

  const [url, setUrl] = useState('');

  const fetchPost = async () => {
    await setLoading(true);
    await getDocs(collection(projectFirestore, 'projects/')).then(querySnapshot => {
      const newData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      // @ts-ignore
      setUrl(newData[0].imgUrl);

      console.log(newData);
    });
    await setLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <ProjectsPageStyled>
      <h1>Projects Page</h1>
      <img src={url} alt="" width={'300px'} />
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {items.map(item => {
            return (
              <div key={item.id}>
                <img src={item.imgUrl} alt="img" />
              </div>
            );
          })}
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </Masonry>
      </ResponsiveMasonry>
      {loading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </ProjectsPageStyled>
  );
};

export default ProjectsPage;
