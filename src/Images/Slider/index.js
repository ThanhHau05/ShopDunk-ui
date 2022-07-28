function importAll(r) {
    return r.keys().map(r);
}

export const ImageSlider = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
