function importAll(r) {
    return r.keys().map(r);
}

export const ImagesiPhoneMobile = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
