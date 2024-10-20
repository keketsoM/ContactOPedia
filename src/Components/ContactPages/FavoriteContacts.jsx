import Contact from "./Contact";
const FavouriteContact = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{ borderRadius: "10px", backgroundColor: "#323637" }}
    >
      <div className="text-center text-white-50">Favorites</div>
      <div className="p-2">
        {props.contact.map((contact, index) => (
          <Contact contact={contact} key={index}
          favoriteClick={props.favoriteClick}
          deleteContact={props.deleteContact}
          handleUpdateContact={props.handleUpdateContact}
          ></Contact>
        ))}
       
      </div>
    </div>
  );
};

export default FavouriteContact;
