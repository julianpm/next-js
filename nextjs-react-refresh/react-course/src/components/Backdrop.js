function Backdrop( props ) {

	const { onCancel } = props;

  return (
    <div className="backdrop" onClick={ onCancel } />
  );
}

export default Backdrop;
