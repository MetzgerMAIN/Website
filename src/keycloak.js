import Keycloak from "keycloak-js"; 
const keycloak = new Keycloak({
    url: "https://identity.pritz-it.com",
    realm: "m294",
    clientId: "react-app",
});

export default keycloak;
