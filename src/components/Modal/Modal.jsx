import PropTypes from 'prop-types';
import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalBackdrop,
  ModalContent,
  ModalDescr,
  ModalPicture,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ modalData, onModalClose }) {
  const { largeImageURL, tags } = modalData;

  const handleKeyDown = useCallback(
    e => {
      if (e.code === `Escape`) {
        onModalClose();
      }
    },
    [onModalClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = useCallback(
    e => {
      if (e.target === e.currentTarget) {
        onModalClose();
      }
    },
    [onModalClose]
  );

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <ModalPicture src={largeImageURL} alt={tags} />
        <ModalDescr>{tags}</ModalDescr>
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  modalData: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onModalClose: PropTypes.func,
  modalRoot: PropTypes.instanceOf(Element),
};

// export default Modal;

// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
// import {
//   ModalBackdrop,
//   ModalContent,
//   ModalDescr,
//   ModalPicture,
// } from './Modal.styled';

// const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {
//   static propTypes = {
//     modalData: PropTypes.shape({
//       largeImageURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     }),
//     onModalClose: PropTypes.func,
//     modalRoot: PropTypes.instanceOf(Element),
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleBackdropClick);
//   }

//   handleKeyDown = e => {
//     if (e.code === `Escape`) {
//       this.props.onModalClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onModalClose();
//     }
//   };

//   render() {
//     const { largeImageURL, tags } = this.props.modalData;

//     return createPortal(
//       <ModalBackdrop onClick={this.handleBackdropClick}>
//         <ModalContent>
//           <ModalPicture src={largeImageURL} alt={tags} />
//           <ModalDescr>{tags}</ModalDescr>
//         </ModalContent>
//       </ModalBackdrop>,
//       modalRoot
//     );
//   }
// }
