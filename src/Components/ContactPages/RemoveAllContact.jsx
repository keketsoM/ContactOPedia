const RemoveAllContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-danger form-control"
        onClick={() => props.handleAddRemoveAllContact()}
      >
        RemoveAllContact
      </button>
    </div>
  );
};

export default RemoveAllContact;
