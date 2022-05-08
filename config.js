const _module = {
    getStorageAccountName: () => {
        const matches = /AccountName=(.*?);/.exec('DefaultEndpointsProtocol=https;AccountName=catalogv2;AccountKey=/nae0fL8Nncvylu7l4WFQjOmPp0J+uwjv6ruXIevhIkJAJiLbQWTLS7sQ5X7J5/63P0MwCULRS5xrIdsoJwuew==;EndpointSuffix=core.windows.net'); //process.env.AZURE_STORAGE_CONNECTION_STERING
        return matches[1];
    }
};

export default _module;