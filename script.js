let searchUser = document.querySelector("#searchUser");
let searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", (e) => {
  let searchText = searchUser.value;
  if (searchText != "") {
    fetch(`https://api.github.com/users/${searchText}`)
      .then((result) => result.json())
      .then((data) => {
        if (data.message == "Not Found") {
          console.log("not");
        } else {
          console.log(data);
        }
      })
      .catch((e) => e.message);
  } else {
    alert(`Enter your user name`);
  }

  //   console.log(`Check.......`);
  e.preventDefault();
});
