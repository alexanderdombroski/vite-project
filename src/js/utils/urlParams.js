function getURLParameter(name, defaultValue) {
    const urlParams = new URLSearchParams(globalThis.location.search);
    const data = urlParams.get(name);
    return data ? data : defaultValue; 
}

export { getURLParameter }