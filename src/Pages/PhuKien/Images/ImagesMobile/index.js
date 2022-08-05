function importAll(r) {
    return r.keys().map(r);
}

export const ImagesPhuKienMobile = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
