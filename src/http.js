class EasyHTTP {
    // Make an HTTP GET request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }


    // Make an HTTP POST request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            header: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP PUT request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            header: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP DELETE request
    async delete(url) {
        await fetch(url, {
            method: 'DELETE',
            header: {
                'Content-type': 'application/json'
            }
        });
        return 'Resource deleted!';
    }    
}

export const http = new EasyHTTP();