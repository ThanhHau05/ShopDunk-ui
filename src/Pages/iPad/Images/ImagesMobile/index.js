function importAll(r) {
    return r.keys().map(r);
}

export const ImagesiPadMobile = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
