export const getQueryParams = (data, queryObj) => {
    const { continent, country, is_open_to_public } = queryObj;

    if (continent) {
        data = data.filter(
            destination => destination.continent.toLowerCase() === continent.toLowerCase()
        );
    }

    if (country) {
        data = data.filter(
            destination => destination.country.toLowerCase() === country.toLowerCase()
        );
    }

    if (is_open_to_public !== undefined) {
        const isOpen = JSON.parse(is_open_to_public.toLowerCase()); // converts "true"/"false" to boolean
        data = data.filter(destination => destination.is_open_to_public === isOpen);
    }

    return data;
};

export default getQueryParams;
