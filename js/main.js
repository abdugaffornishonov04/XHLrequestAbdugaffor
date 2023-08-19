let theMainRow = document.querySelector( ".users-row" );

function getXhr( url ) {
  let xhr = new XMLHttpRequest();

  console.log( xhr.readyState );

  xhr.onreadystatechange = function () {
    if ( xhr.readyState === 4 && xhr.status === 200 ) {
      let resJson = xhr.response;
      let res = JSON.parse(resJson)
      res.map((user) => {
        theMainRow.innerHTML += `
        <div class="users-card">
            <div class="users-card-image">
              <img src="./images/avatar.jpg" alt="an img">
            </div>
            <div class="users-info">
              <span class="users-info-span1">
                <p><b>Name:</b> ${user.name}</p>
                <p><b>Phone:</b> ${user.phone}</p>
              </span>
              <span class="users-info-span2">
                <p><b>City:</b> ${user.address.city}</p>
                <p><b>Company Name:</b> ${user.company.name}</p>
              </span>
            </div>
            <div class="users-social">
              <p><b>Email:</b> @${user.email}</p>
              <a href="#"> ${user.website}</a>
            </div>
            <a class="users-btn-to-posts" href="posts.html?id=${user.id}">Posts</a>
          </div>
        `
      })
    } else if ( xhr.readyState === 4 ) {
      console.log( xhr.statusText );
    }
  }

  xhr.open( "get", url );

  xhr.send();
}

getXhr( "https://jsonplaceholder.typicode.com/users" )


