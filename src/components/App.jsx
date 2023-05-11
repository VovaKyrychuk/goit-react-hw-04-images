import React, { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { Layout } from './Layout/Layout';
import ImageGallery from './ImageGallery/ImageGallery';

export default function App() {
  const [textSearch, setTextSearch] = useState('');

  const handleSubmit = textSearch => {
    setTextSearch(textSearch);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <Layout>
        <ImageGallery value={textSearch} />
      </Layout>
      <GlobalStyle />
    </>
  );
}
