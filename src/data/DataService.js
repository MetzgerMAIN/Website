import schuelerData from './mock/schueler_mock.json';
import raumData from './mock/raum_mock.json';
const SchuelerDataService = {
    fetchAll: () => {
        return schuelerData;
    },
    fetchById: (id) => {
        return schuelerData.find(schueler => schueler.Id === id)
    }
}
const RaumDataService = {
    fetchAll: () => {
        return raumData;
    },
    fetchById: (id) => {
        return raumData.find(raum => raum.Id === id)
    }
}
export {SchuelerDataService,RaumDataService}