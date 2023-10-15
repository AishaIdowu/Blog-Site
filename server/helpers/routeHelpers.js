function isActiveRoute(Route, currentRoute) {
    return route === currentRoute ? 'active' : '';
}

// This changes the color of the links as determined in the css.

module.exports = { isActiveRoute}