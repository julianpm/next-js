import { useState } from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo( props ) {

	const { text } = props;

	const [ showModal, setShowModal ] = useState( false );

	function deleteHandler() {
		setShowModal( true );
	}

	function closeModal() {
		setShowModal( false );
	}

  return (
    <div className="card">
      <h2>{ text }</h2>
      <div className="actions">
        <button className="btn" onClick={ deleteHandler }>Delete</button>
      </div>
			{ showModal && <Modal onCancel={ closeModal } onConfirm={ closeModal } /> }
			{ showModal && <Backdrop onCancel={ closeModal } /> }
    </div>
  );
}

export default Todo;
