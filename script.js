let searchUser = document.querySelector("#searchUser");
let searchBtn = document.querySelector("#searchBtn");
let ui = new UI();

searchBtn.addEventListener("click", (e) => {
  let searchText = searchUser.value;
  if (searchText != "") {
    fetch(`https://api.github.com/users/${searchText}`)
      .then((result) => result.json())
      .then((data) => {
        if (data.message == "Not Found") {
          ui.clearProfile();
          ui.showMessage("User not found", "alert alert-danger");
          ui.removeMessage();
        } else {
          ui.showProfile(data);
          ui.removeMessage();
        }
      })
      .catch((e) => {
        ui.showMessage(e.message, "alert alert-danger");
      });
  } else {
    alert(`Enter your user name`);
  }

  //   console.log(`Check.......`);
  e.preventDefault();
});
