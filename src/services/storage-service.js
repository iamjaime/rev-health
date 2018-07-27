import settings from '../config/config';

const StorageService = {

    /**
     * Saves a JSON object in local storage.
     * @param key  {string}  The key that will be used as storage.
     * @param data  {object}  The json object to save in local storage.
     */
    save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },

    /**
     * Handles retrieving the locally stored data object.
     * @param key  {string}  The key that was used when setting the storage object.
     * @returns {any}
     */
    get(key){
        let data = localStorage.getItem(key);
        return JSON.parse(data);
    },

    /**
     * Handles removing a specific storage object from the storage
     * @param key  {string}  The key that was used when setting the storage object.
     */
    remove(key){
      localStorage.removeItem(key);
    }

};

export default StorageService;