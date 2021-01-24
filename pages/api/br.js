async function tempo(request, response){

    const dynamicDate = new Date();

    const coronavirusDeaths = await fetch("https://covid19-brazil-api.now.sh/api/report/v1");

    const coronavirusDeathsJson = await coronavirusDeaths.json();

    const Deaths = coronavirusDeathsJson;
    /*const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

    const pokemonJson = await pokemon.json();
    const ditto = pokemonJson;
    */

    response.json({
	date: dynamicDate.toGMTString(),
	coronavirusDeaths: Deaths
    })

}

export default tempo;
