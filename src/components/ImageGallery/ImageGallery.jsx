import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getImages from 'services/getApi';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function ImageGallery({ value }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalData, setModalData] = useState({ tags: '' });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await getImages.getImages(value, page);
        setImages(prevImages =>
          page === 1 ? images.hits : [...prevImages, ...images.hits]
        );
        setStatus(Status.RESOLVED);
        setTotalPages(Math.floor(images.totalHits / 12));
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    };

    if (value) {
      setStatus(Status.PENDING);
      if (error) {
        setError(null);
      }
      fetchImages();
    }
  }, [value, page, error]);

  useEffect(() => {
    setImages([]);
    setPage(1);
  }, [value]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleModalClose = () => {
    setIsShowModal(false);
  };

  const handleImageClick = modalData => {
    setModalData(modalData);
    setIsShowModal(true);
  };

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <List>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              item={image}
              onImageClick={handleImageClick}
            />
          ))}
        </List>
        {images.length > 0 && page <= totalPages && (
          <Button onClick={handleLoadMore}>Load More</Button>
        )}
        {isShowModal && (
          <Modal modalData={modalData} onModalClose={handleModalClose}>
            <img src={modalData.largeImageURL} alt={modalData.tags} />
          </Modal>
        )}
      </>
    );
  }

  if (status === Status.REJECTED) {
    return <p>Sorry, something went wrong: {error.message}</p>;
  }

  return null;
}

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
};
// import PropTypes from 'prop-types';
// import React, { useEffect, useState } from 'react';
// import getImages from 'services/getApi';
// import { List } from './ImageGallery.styled';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import { Loader } from '../Loader/Loader';
// import { Button } from 'components/Button/Button';
// import Modal from 'components/Modal/Modal';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

// export default function ImageGallery({ value }) {
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState(Status.IDLE);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isShowModal, setIsShowModal] = useState(false);
//   const [modalData, setModalData] = useState({ tags: '' });

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const images = await getImages.getImages(value, page);
//         setImages(prevImages =>
//           page === 1 ? images.hits : [...prevImages, ...images.hits]
//         );
//         setStatus(Status.RESOLVED);
//         setTotalPages(Math.floor(images.totalHits / 12));
//       } catch (error) {
//         setError(error);
//         setStatus(Status.REJECTED);
//       }
//     };

//     if (value) {
//       setStatus(Status.PENDING);
//       if (error) {
//         setError(null);
//       }
//       fetchImages();
//     }
//   }, [value, page, error]);

//   const handleLoadMore = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   const handleModalClose = () => {
//     setIsShowModal(false);
//   };

//   const handleImageClick = modalData => {
//     setModalData(modalData);
//     setIsShowModal(true);
//   };

//   if (status === Status.PENDING) {
//     return <Loader />;
//   }

//   if (status === Status.RESOLVED) {
//     return (
//       <>
//         <List>
//           {images.map(image => (
//             <ImageGalleryItem
//               key={image.id}
//               item={image}
//               onImageClick={handleImageClick}
//             />
//           ))}
//         </List>
//         {images.length > 0 && page <= totalPages && (
//           <Button onClick={handleLoadMore}>Load More</Button>
//         )}
//         {isShowModal && (
//           <Modal modalData={modalData} onModalClose={handleModalClose} />
//         )}
//       </>
//     );
//   }

//   return null;
// }

// ImageGallery.propTypes = {
//   value: PropTypes.string.isRequired,
// };
