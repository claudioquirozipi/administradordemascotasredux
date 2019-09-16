export const obtenerStorage = () => {
    const citasStorage = localStorage.getItem('citas');
    if(citasStorage === null) {
        return undefined
    }
    return JSON.parse(citasStorage);
}

export const guardarStorage = (state) => {
    const citasStorage = JSON.stringify(state);
    localStorage.setItem('citas', citasStorage);
}