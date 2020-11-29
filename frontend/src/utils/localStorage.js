module.exports = {
    get: (key, initial) => {
        const savedData = JSON.parse(localStorage.getItem(key));
        if (savedData !== null) return savedData;
        if (initial instanceof Function) return initial();
        return initial;
    },
    set: (key, value) => {
        localStorage.setItem(key, value);
    }
}