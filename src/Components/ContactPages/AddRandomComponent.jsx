import GetApiCallUser from "../../Utility/api";
const handleApiCall = async (props) => {
  var response = await GetApiCallUser();

  return props.handleAddRandomContact({
    name: response.data.first_name + " " + response.data.last_name,
    phone: response.data.phone_number,
    email: response.data.email,
  });
};

const AddRandomComponent = (props) => {
  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={() => handleApiCall(props)}
      >
        Add Random Contact
      </button>
    </div>
  );
};

export default AddRandomComponent;
