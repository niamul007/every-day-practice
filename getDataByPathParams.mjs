export const getDataByPathParams = (data,locationType,location)=>{
    return data.filter((destination)=>{
        return destination[locationType].toLowerCase() === location.toLowerCase();
    })
}

export default getDataByPathParams;