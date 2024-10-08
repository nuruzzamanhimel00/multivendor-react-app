export function httpRequest(requestConfig) {
  
    return new Promise(async (resolve, reject) => {
      return await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      })
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error));
    });
  }
  