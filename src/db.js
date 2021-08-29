function add(){
  // Add a new document in collection "users"
  db
    .collection("users")
    .doc() //random document id generated// use .add instead .doc().set() is valid
    .set({
      uuid: "google user id",
      avatar: "google avatar url"
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}