import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory();

export const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

export const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}