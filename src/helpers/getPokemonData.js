
const baseUrlApi = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonData = async( id = '' ) => {

    try {

        const url = `${ baseUrlApi }${ id }`; 
        const resp = await fetch( url );
        const data = await resp.json();

        return data;
        
    } catch( error ) {
        console.log( error );
        return undefined;
    }

}
