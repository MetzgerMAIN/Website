import {useKeycloak} from "@react-keycloak/web";

const Roles = {
    Administrator: "Admin",
    ShowDozent: "show_dozent",
    EditDozent: "edit_dozent",
    ShowKlasse: "show_klasse",
    EditKlasse: "edit_klasse",
    ShowMitarbeiter: "show_mitarbeiter",
    EditMitarbeiter: "edit_mitarbeiter",
    ShowModul: "show_modul",
    EditModul: "edit_modul",
    ShowRaum: "show_raum",
    EditRaum: "edit_raum",
    ShowSchueler: "show_schueler",
    EditSchueler: "edit_schueler",
}

const IsInRole = (rolesToCheckAgainst) => {
    const {keycloak, initialized} = useKeycloak()


    console.log("Cheking roles", rolesToCheckAgainst)

    if(!Object.keys(Roles).some((role) => rolesToCheckAgainst.includes(role))) 
    return false;

    if(!initialized)
    return false;

    if(!keycloak.authenticated)
    return false;

    return keycloak.tokenParsed.roles.some(
        (role) => rolesToCheckAgainst.includes(role)
    );
}

export {Roles, IsInRole};