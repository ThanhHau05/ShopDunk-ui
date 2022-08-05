function importAll(r) {
    return r.keys().map(r);
}

export const ImagesMacMobile = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
