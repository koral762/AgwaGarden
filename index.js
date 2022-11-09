import * as ReactDOMClient from 'react-dom/client';
import App from 'App';

const container = document.getElementById('app');

// Create *and* render a root with hydration.
const root = ReactDOMClient.hydrateRoot(container, <App tab="home" />);
