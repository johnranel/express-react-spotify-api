export const getHashParams = () => {
    let params_string = window.location.hash.substring(1);
    let params_object = Object.fromEntries(new URLSearchParams(params_string));
    return params_object;
}

export const millisecondsToMinutes = (ms) => {
    const ms_to_seconds = ms/1000;
    const minutes = Math.floor(ms_to_seconds/60);
    const seconds = Math.floor(ms_to_seconds%60);
    return `${minutes}:${(seconds < 10) ? '0'+seconds : seconds }`;
}

export const catchErrors = func => 
    function (...args) {
        return func(...args).catch(err => console.error("Please refresh page an error was encountered: " + err.message));
    };