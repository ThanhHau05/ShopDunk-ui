function importAll(r) {
    return r.keys().map(r);
}

export const ImagesMac = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
