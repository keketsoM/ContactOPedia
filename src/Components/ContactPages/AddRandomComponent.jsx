import GetApiCallUser from "../../Utility/api";
const handleApiCall = async () => {
  var response = await GetApiCallUser();
  console.log(response);
};

const AddRandomComponent = () => {
  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={() => handleApiCall()}
      >
        Add Random Contact
      </button>
    </div>
  );
};

export default AddRandomComponent;
