export class FetchHelper {
    // Helper method to handle common fetch errors
    static handleErrors(response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    }
    // Helper method to convert response to JSON
    static async parseJSON(response) {
        return response.json();
    }
    // Helper method to merge custom headers with default headers
    static mergeHeaders(customHeaders) {
        const defaultHeaders = {
            "Content-Type": "application/json",
        };
        if (!customHeaders) {
            return defaultHeaders;
        }
        return {
            ...defaultHeaders,
            ...customHeaders,
        };
    }
    // GET method
    static async get(url, customHeaders) {
        try {
            const response = await fetch(url, {
                headers: this.mergeHeaders(customHeaders),
            });
            this.handleErrors(response);
            return this.parseJSON(response);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    // POST method
    static async post(url, data, customHeaders) {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: this.mergeHeaders(customHeaders),
                body: JSON.stringify(data),
            });
            this.handleErrors(response);
            return this.parseJSON(response);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    // PUT method
    static async put(url, data, customHeaders) {
        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: this.mergeHeaders(customHeaders),
                body: JSON.stringify(data),
            });
            this.handleErrors(response);
            return this.parseJSON(response);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    // DELETE method
    static async delete(url, customHeaders) {
        try {
            const response = await fetch(url, {
                method: "DELETE",
                headers: this.mergeHeaders(customHeaders),
            });
            this.handleErrors(response);
            return this.parseJSON(response);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
}
