import axios from "axios";
const baseUrl = "https://pokemon-pichincha.herokuapp.com/pokemons"

export const serviceGetAllPokemons = async () => {
    const data = await axios.get(`${baseUrl}?idAuthor=1`)
        .then(response => {
            return response.data;
        }).catch(() => {
            return []
        });
    return data;
}

export const serviceGetPokemonById = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    const data = await response.then(response => {
        return response;
    }).catch(() => {
        return []
    });
    return data;
}

export const serviceGetPokemonByName = async (name) => {

    const data = await axios.get(`${baseUrl}?idAuthor=1&name=${name}`)
        .then(response => {
            return response.data;
        }).catch(() => {
            return []
        });
    return data;
}


export const serviceCreatePokemon = (body) => {

    const data = axios
        .post(`${baseUrl}`
            , body)
        .then((response) => {
            return response.data;
        }).catch(() => {
            return []
        });
    return data;
}

export const serviceUpdatePokemon = ({id, name, image, type, hp, attack, defense}) => {
    const data = axios
        .put(`${baseUrl}/${id}`, {name, image, type, hp, attack, defense})
        .then((response) => {

            return response.data;
        }).catch(() => {
            return []
        });
    return data;
}

export const serviceDeletePokemon = (id) => {
    const data = axios
        .delete(`${baseUrl}/${id}`)
        .then((response) => {
            return response.data;
        }).catch(() => {
            return []
        });
    return data;
}
