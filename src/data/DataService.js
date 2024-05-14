import axios from 'axios';

const SchuelerService = {
    /**
     * Retrieve all the data from the database.
     *
     * @returns {Promise} A Promise that resolves with the data retrieved from the database.
     */
    getAll: async function() {
        let response = await axios.get(endpointSchueler)
        return await response.data;
    },
    /**
     * Retrieves data based on the provided ID.
     *
     * @param {string} id - The ID of the data to retrieve.
     * @returns {Promise<any>} - A Promise that resolves with the retrieved data.
     */
    get: async function (id) {
        let response = await axios.get(`${endpointSchueler}/${id}`);
        return await response.data;
    },
    /**
     * Sends a POST request with the given data.
     *
     * @async
     * @param {Object} data - The data to be sent in the request.
     * @returns {Promise<Object>} - The response data from the request.
     */
    post: async function (data) {
        let response = await axios.post(endpointSchueler, data);
        return await response.data;
    },
    /**
     * Updates the data for a specified ID.
     *
     * @param {string} id - The ID of the data entry to be updated.
     * @param {object} data - The updated data to be associated with the ID.
     * @returns {Promise} - A promise representing the completion status of the update.
     */
    put: async function (id, data) {
        let response = await axios.put(`${endpointSchueler}/${id}`, data);
        return await response.data;
    },
    /**
     * Deletes a record with the specified id.
     *
     * @async
     * @param {number} id - The id of the record to be deleted.
     * @returns {Promise<number>} A promise that resolves with the HTTP status code when the record is successfully deleted.
     */
    delete: async function (id) {
        let response = await axios.delete(`${endpointSchueler}/${id}`);
        return response.status;
    },
};

const KlasseService = {
    /**
     * Retrieve all the data from the database.
     *
     * @returns {Promise} A Promise that resolves with the data retrieved from the database.
     */
    getAll: async function() {
        let response = await axios.get(endpointKlasse)
        return await response.data;
    },
    /**
     * Retrieves data based on the provided ID.
     *
     * @param {string} id - The ID of the data to retrieve.
     * @returns {Promise<any>} - A Promise that resolves with the retrieved data.
     */
    get: async function (id) {
        let response = await axios.get(`${endpointKlasse}/${id}`);
        return await response.data;
    },
    /**
     * Sends a POST request with the given data.
     *
     * @async
     * @param {Object} data - The data to be sent in the request.
     * @returns {Promise<Object>} - The response data from the request.
     */
    post: async function (data) {
        let response = await axios.post(endpointKlasse, data);
        return await response.data;
    },
    /**
     * Updates the data for a specified ID.
     *
     * @param {string} id - The ID of the data entry to be updated.
     * @param {object} data - The updated data to be associated with the ID.
     * @returns {Promise} - A promise representing the completion status of the update.
     */
    put: async function (id, data) {
        let response = await axios.put(`${endpointKlasse}/${id}`, data);
        return await response.data;
    },
    /**
     * Deletes a record with the specified id.
     *
     * @async
     * @param {number} id - The id of the record to be deleted.
     * @returns {Promise<number>} A promise that resolves with the HTTP status code when the record is successfully deleted.
     */
    delete: async function (id) {
        let response = await axios.delete(`${endpointKlasse}/${id}`);
        return response.status;
    },
};

const MitarbeiterService = {
    /**
     * Retrieve all the data from the database.
     *
     * @returns {Promise} A Promise that resolves with the data retrieved from the database.
     */
    getAll: async function() {
        let response = await axios.get(endpointMitarbeiter)
        return await response.data;
    },
    /**
     * Retrieves data based on the provided ID.
     *
     * @param {string} id - The ID of the data to retrieve.
     * @returns {Promise<any>} - A Promise that resolves with the retrieved data.
     */
    get: async function (id) {
        let response = await axios.get(`${endpointMitarbeiter}/${id}`);
        return await response.data;
    },
    /**
     * Sends a POST request with the given data.
     *
     * @async
     * @param {Object} data - The data to be sent in the request.
     * @returns {Promise<Object>} - The response data from the request.
     */
    post: async function (data) {
        let response = await axios.post(endpointMitarbeiter, data);
        return await response.data;
    },
    /**
     * Updates the data for a specified ID.
     *
     * @param {string} id - The ID of the data entry to be updated.
     * @param {object} data - The updated data to be associated with the ID.
     * @returns {Promise} - A promise representing the completion status of the update.
     */
    put: async function (id, data) {
        let response = await axios.put(`${endpointMitarbeiter}/${id}`, data);
        return await response.data;
    },
    /**
     * Deletes a record with the specified id.
     *
     * @async
     * @param {number} id - The id of the record to be deleted.
     * @returns {Promise<number>} A promise that resolves with the HTTP status code when the record is successfully deleted.
     */
    delete: async function (id) {
        let response = await axios.delete(`${endpointMitarbeiter}/${id}`);
        return response.status;
    },
};


const ModulService = {
    /**
     * Retrieve all the data from the database.
     *
     * @returns {Promise} A Promise that resolves with the data retrieved from the database.
     */
    getAll: async function() {
        let response = await axios.get(endpointRaum)
        return await response.data;
    },
    /**
     * Retrieves data based on the provided ID.
     *
     * @param {string} id - The ID of the data to retrieve.
     * @returns {Promise<any>} - A Promise that resolves with the retrieved data.
     */
    get: async function (id) {
        let response = await axios.get(`${endpointRaum}/${id}`);
        return await response.data;
    },
    /**
     * Sends a POST request with the given data.
     *
     * @async
     * @param {Object} data - The data to be sent in the request.
     * @returns {Promise<Object>} - The response data from the request.
     */
    post: async function (data) {
        let response = await axios.post(endpointRaum, data);
        return await response.data;
    },
    /**
     * Updates the data for a specified ID.
     *
     * @param {string} id - The ID of the data entry to be updated.
     * @param {object} data - The updated data to be associated with the ID.
     * @returns {Promise} - A promise representing the completion status of the update.
     */
    put: async function (id, data) {
        let response = await axios.put(`${endpointRaum}/${id}`, data);
        return await response.data;
    },
    /**
     * Deletes a record with the specified id.
     *
     * @async
     * @param {number} id - The id of the record to be deleted.
     * @returns {Promise<number>} A promise that resolves with the HTTP status code when the record is successfully deleted.
     */
    delete: async function (id) {
        let response = await axios.delete(`${endpointRaum}/${id}`);
        return response.status;
    },
};

const RaumService = {
    /**
     * Retrieve all the data from the database.
     *
     * @returns {Promise} A Promise that resolves with the data retrieved from the database.
     */
    getAll: async function() {
        let response = await axios.get(endpointRaum)
        return await response.data;
    },
    /**
     * Retrieves data based on the provided ID.
     *
     * @param {string} id - The ID of the data to retrieve.
     * @returns {Promise<any>} - A Promise that resolves with the retrieved data.
     */
    get: async function (id) {
        let response = await axios.get(`${endpointRaum}/${id}`);
        return await response.data;
    },
    /**
     * Sends a POST request with the given data.
     *
     * @async
     * @param {Object} data - The data to be sent in the request.
     * @returns {Promise<Object>} - The response data from the request.
     */
    post: async function (data) {
        let response = await axios.post(endpointRaum, data);
        return await response.data;
    },
    /**
     * Updates the data for a specified ID.
     *
     * @param {string} id - The ID of the data entry to be updated.
     * @param {object} data - The updated data to be associated with the ID.
     * @returns {Promise} - A promise representing the completion status of the update.
     */
    put: async function (id, data) {
        let response = await axios.put(`${endpointRaum}/${id}`, data);
        return await response.data;
    },
    /**
     * Deletes a record with the specified id.
     *
     * @async
     * @param {number} id - The id of the record to be deleted.
     * @returns {Promise<number>} A promise that resolves with the HTTP status code when the record is successfully deleted.
     */
    delete: async function (id) {
        let response = await axios.delete(`${endpointRaum}/${id}`);
        return response.status;
    },
};

const DozentService = {
    /**
     * Retrieve all the data from the database.
     *
     * @returns {Promise} A Promise that resolves with the data retrieved from the database.
     */
    getAll: async function() {
        let response = await axios.get(endpointDozent)
        return await response.data;
    },
    /**
     * Retrieves data based on the provided ID.
     *
     * @param {string} id - The ID of the data to retrieve.
     * @returns {Promise<any>} - A Promise that resolves with the retrieved data.
     */
    get: async function (id) {
        let response = await axios.get(`${endpointDozent}/${id}`);
        return await response.data;
    },
    /**
     * Sends a POST request with the given data.
     *
     * @async
     * @param {Object} data - The data to be sent in the request.
     * @returns {Promise<Object>} - The response data from the request.
     */
    post: async function (data) {
        let response = await axios.post(endpointDozent, data);
        return await response.data;
    },
    /**
     * Updates the data for a specified ID.
     *
     * @param {string} id - The ID of the data entry to be updated.
     * @param {object} data - The updated data to be associated with the ID.
     * @returns {Promise} - A promise representing the completion status of the update.
     */
    put: async function (id, data) {
        let response = await axios.put(`${endpointDozent}/${id}`, data);
        return await response.data;
    },
    /**
     * Deletes a record with the specified id.
     *
     * @async
     * @param {number} id - The id of the record to be deleted.
     * @returns {Promise<number>} A promise that resolves with the HTTP status code when the record is successfully deleted.
     */
    delete: async function (id) {
        let response = await axios.delete(`${endpointDozent}/${id}`);
        return response.status;
    },
};


const endpointSchueler = 'http://localhost:8000/schueler';
const endpointDozent = 'http://localhost:8000/dozent';
const endpointKlasse = 'http://localhost:8000/klasse';
const endpointMitarbeiter = 'http://localhost:8000/mitarbeiter';
const endpointModul = 'http://localhost:8000/modul';
const endpointRaum = 'http://localhost:8000/raum';

export {SchuelerService, DozentService, RaumService, MitarbeiterService, ModulService, KlasseService}