function Modal( props ) {

	const { onCancel, onConfirm } = props;

	function cancelHandler() {
		onCancel();
	}

	function confirmHandler() {
		onConfirm();
	}

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={ cancelHandler }>Cancel</button>
      <button className="btn" onClick={ confirmHandler }>Confirm</button>
    </div>
  );
}

export default Modal;
