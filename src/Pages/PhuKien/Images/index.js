function importAll(r) {
    return r.keys().map(r);
}

export const ImagesPhuKien = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
