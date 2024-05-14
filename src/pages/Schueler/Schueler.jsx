import React, { useState } from 'react';

const mockData = [
  {
    "id": 1,
    "Name": "Morse Micah",
    "Geburtsdatum": "15.09.1996",
    "PLZ": 6025
  },
  {
    "id": 2,
    "Name": "Candy Bucktharp",
    "Geburtsdatum": "21.12.2004",
    "PLZ": 7553
  },
  {
    "id": 3,
    "Name": "Sonni Batie",
    "Geburtsdatum": "24.12.1992",
    "PLZ": 6591
  },
  {
    "id": 4,
    "Name": "Margaux Higgonet",
    "Geburtsdatum": "08.10.1992",
    "PLZ": 7463
  },
  {
    "id": 5,
    "Name": "Tabbitha Hedditeh",
    "Geburtsdatum": "08.12.1992",
    "PLZ": 5423
  },
  {
    "id": 6,
    "Name": "Abrahan Abrahamowitcz",
    "Geburtsdatum": "09.04.2004",
    "PLZ": 4319
  },
  {
    "id": 7,
    "Name": "Tiphani Philp",
    "Geburtsdatum": "17.02.2004",
    "PLZ": 4696
  },
  {
    "id": 8,
    "Name": "Morena Haith",
    "Geburtsdatum": "26.07.1990",
    "PLZ": 5135
  },
  {
    "id": 9,
    "Name": "Judy Hutchinson",
    "Geburtsdatum": "12.02.2001",
    "PLZ": 7435
  },
  {
    "id": 10,
    "Name": "Wilow Iwanowski",
    "Geburtsdatum": "13.05.1995",
    "PLZ": 7784
  },
  {
    "id": 11,
    "Name": "Filia Olsson",
    "Geburtsdatum": "05.04.1995",
    "PLZ": 7895
  },
  {
    "id": 12,
    "Name": "Karrah Surphliss",
    "Geburtsdatum": "21.06.1990",
    "PLZ": 5924
  },
  {
    "id": 13,
    "Name": "Ezechiel Milnes",
    "Geburtsdatum": "20.11.1990",
    "PLZ": 4823
  },
  {
    "id": 14,
    "Name": "Etti Osant",
    "Geburtsdatum": "23.10.1998",
    "PLZ": 7474
  },
  {
    "id": 15,
    "Name": "Vera Rickett",
    "Geburtsdatum": "22.03.2000",
    "PLZ": 7071
  },
  {
    "id": 16,
    "Name": "Kessia Padly",
    "Geburtsdatum": "07.02.2002",
    "PLZ": 6781
  },
  {
    "id": 17,
    "Name": "Wynne Walch",
    "Geburtsdatum": "23.11.1992",
    "PLZ": 7410
  },
  {
    "id": 18,
    "Name": "Fenelia Kalaher",
    "Geburtsdatum": "11.10.2000",
    "PLZ": 4402
  },
  {
    "id": 19,
    "Name": "Zarla Twittey",
    "Geburtsdatum": "01.07.2003",
    "PLZ": 6163
  },
  {
    "id": 20,
    "Name": "Lyndsey Fromant",
    "Geburtsdatum": "16.06.2001",
    "PLZ": 4305
  }
];
const Schueler = () => {
    const [schuelerList, setSchuelerList] = useState(mockData);
    const [newSchueler, setNewSchueler] = useState({ id: '', Name: '', Geburtsdatum: '', PLZ: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
  
    const handleAdd = () => {
      setSchuelerList([...schuelerList, newSchueler]);
      setNewSchueler({ id: '', Name: '', Geburtsdatum: '', PLZ: '' });
    };
  
    const handleDelete = (id) => {
      setSchuelerList(schuelerList.filter(schueler => schueler.id !== id));
    };
  
    const handleEdit = (id) => {
      const schuelerToEdit = schuelerList.find(schueler => schueler.id === id);
      setNewSchueler(schuelerToEdit);
      setIsEditing(true);
      setEditId(id);
    };
  
    const handleUpdate = () => {
      const updatedList = schuelerList.map(schueler => {
        if (schueler.id === editId) {
          return newSchueler;
        }
        return schueler;
      });
      setSchuelerList(updatedList);
      setNewSchueler({ id: '', Name: '', Geburtsdatum: '', PLZ: '' });
      setIsEditing(false);
      setEditId(null);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewSchueler({ ...newSchueler, [name]: value });
    };
  
    return (
      <div>
        <h1>Schüler Liste</h1>
        <ul>
          {schuelerList.map(schueler => (
            <li key={schueler.id}>
              {schueler.Name} - {schueler.Geburtsdatum} - {schueler.PLZ}
              <button onClick={() => handleEdit(schueler.id)}>Bearbeiten</button>
              <button onClick={() => handleDelete(schueler.id)}>Löschen</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Name"
          name="Name"
          value={newSchueler.Name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Geburtsdatum"
          name="Geburtsdatum"
          value={newSchueler.Geburtsdatum}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="PLZ"
          name="PLZ"
          value={newSchueler.PLZ}
          onChange={handleChange}
        />
        <button onClick={isEditing ? handleUpdate : handleAdd}>
          {isEditing ? 'Aktualisieren' : 'Hinzufügen'}
        </button>
      </div>
    );
  };
  
  export default Schueler;