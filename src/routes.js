import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import DoorFrontIcon from '@mui/icons-material/DoorFront';
import Face6Icon from '@mui/icons-material/Face6';

import {
    Dozent,
    Klasse,
    Mitarbeiter,
    Modul,
    Raum,
    Schueler
} from './pages';
import DemoPage from "./pages/Demo/DemoPage";

const RouteConfigs = [
    {caption: "Schüler", path: "/schueler",         element: <Schueler/>,       icon: <PersonIcon />},
    {caption: "Dozenten", path: "/dozenten",        element: <Dozent/>,         icon: <PersonOutlineIcon />},
    {caption: "Klassen", path: "/klassen",          element: <Klasse/>,         icon: <ClassIcon />},
    {caption: "Räume", path: "/raeume",             element: <Raum/>,           icon: <DoorFrontIcon />},
    {caption: "Module", path: "/module",            element: <Modul/>,          icon: <SchoolIcon />},
    {caption: "Mitarbeiter", path: "/mitarbeiter",  element: <Mitarbeiter/>,    icon: <Face6Icon />},
    {caption: "Demo", path: "/demo",  element: <DemoPage/>,    icon: <Face6Icon />}
];

export {RouteConfigs};