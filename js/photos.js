let mainPhotoRow = document.querySelector( ".photos-row" );

const urlParams = new URLSearchParams( window.location.search );
const userId = urlParams.get( 'id' );
let theUId = +userId;
console.log(theUId);

function getXhr( url ) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if ( xhr.readyState === 4 && xhr.status === 200 ) {
      let resJson = xhr.response;
      let res = JSON.parse( resJson );
      console.log( res );
      let filteredRes = res.filter( ( user ) => user.albumId === theUId );
      console.log( filteredRes );
      filteredRes.map( ( user ) => {
        mainPhotoRow.innerHTML += `
        <div class="photos-card">
            <p><i>Album ID: </i> ${user.albumId}</p>
            <h2>${user.title}</h2>
            <img src="${user.url}" alt="an img">
          </div>
        `
      } )
    } else if ( xhr.readyState === 4 ) {
      console.log( xhr.statusText );
    }
  }

  xhr.open( "get", url );

  xhr.send();
}



getXhr( "https://jsonplaceholder.typicode.com/photos" )