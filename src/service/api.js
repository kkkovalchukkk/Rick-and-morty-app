class API {
    BASE_URL = "https://rickandmortyapi.com/api/";

    getBase = async (url = "") => {
        const resp = await fetch(`${this.BASE_URL}${url}`);
        if (!resp.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${resp.status}`);
        }
        return await resp.json();
    };

    getCharacters = async (id = "") => {
        return this.getBase(`character/${id}`);
    };

    getLocations = async (id = "") => {
        return this.getBase(`locations/${id}`);
    };

    getEpisodes = async (id = "") => {
        return this.getBase(`episodes/${id}`);
    };
}

export default API;
