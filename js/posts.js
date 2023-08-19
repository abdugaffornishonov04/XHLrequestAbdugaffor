
let mainPostRow = document.querySelector( ".posts-row" );

const urlParams = new URLSearchParams( window.location.search );
const userId = urlParams.get( 'id' );
let uId = +userId ;

function getXhr( url ) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if ( xhr.readyState === 4 && xhr.status === 200 ) {
      let resJson = xhr.response;
      let res = JSON.parse( resJson );
      console.log(res);
      let filteredRes = res.filter( ( user ) => user.userId === uId );
      console.log(filteredRes);
      filteredRes.map( ( user ) => {
        mainPostRow.innerHTML += `
        <div class="posts-card">
            <p><i>UserID:</i> ${user.userId}</p>
            <h2><b>Title</b>: ${user.title}</h2>
            <p><b>Body</b>: ${user.body}</p>
            <a href="./photos.html?id=${user.id}">Photos</a>
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



getXhr( "https://jsonplaceholder.typicode.com/posts" )

