// MAIN API DOMAIN
const isProduction = false;
export const mainApiDomain = (!isProduction)
    ? 'http://localhost:3000'
    : 'https://ap-webserver.glitch.me';