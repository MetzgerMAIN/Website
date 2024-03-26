import schuelerData from './mock/schueler_mock.json';
const SchuelerDataService = {
    fetchAll: () => {
        return schuelerData;
    },
    fetchById: (id) => {
        return schuelerData.find(schueler => schueler.Id === id)
    }
}

export {SchuelerDataService}