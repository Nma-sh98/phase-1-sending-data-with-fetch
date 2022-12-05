// Add your code here
function submitData( name, email ) {
    // this is to send data
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
    // then handling response
      .then( function ( response ) {
        return response.json()
      } )
    // retrieves the new id value and appends it to the DOM
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
    // handling the errors
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }