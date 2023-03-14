import { ref, computed } from 'vue'
export function userMethods() {
	var data = ref( null )
	var error = ref(null)
	axios.get( 'http://localhost:3000/api/tutorials' )
		.then( function( res ) {
			data = res.data[0]
			console.log( res.data[0] )
			// return res.data
		}).catch( function( err ) {
			console.log( err )
			error = err
			// return err
		})

	return { data, error }
	// function getAll() {		
	// }
}