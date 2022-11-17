class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `<div class="card-body">
    <div class="row">
        <div class="col-md-3 text-center">
            <img src="${user.avatar_url}" class="img-fluid mb-2" />
            <a href="${user.url}" class="btn btn-primary" target="_blank" >View Profile</a>
        </div>
        <div class="col-md-7">
            <p>
                <a href="${user.blog}" class="btn btn-primary">Blog</a>
                <a href="${user.events_url}" class="btn btn-secondary">Events</a>
                <a href="${user.organizations_url}" class="btn btn-success">Organizatio</a>
                <a href="${user.gists_url}" class="btn btn-primary">Gists</a>
            </p>

            <div class="card">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Name: ${user.name}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Type: ${user.type}</li>
                </ul>
              </div>
        </div>
    </div>
</div>`;
  }
}
