const ListaPacientes = () => {
  const patients = [
    {
      name: 'Patient 1',
      age: 30,
      gender: 'Male',
      id: 1
    },
    {
      name: 'Patient 2',
      age: 25,
      gender: 'Female',
      id: 2
    },
    {
      name: 'Patient 3',
      age: 35,
      gender: 'Male',
      id: 3
    },
    {
      name: 'Patient 4',
      age: 40,
      gender: 'Female',
      id: 4
    }
  ];

  return (
    <div>
      {patients.map((patient, index) => (
        <div key={index}>
          <h3>{patient.name}</h3>
          <p>Age: {patient.age}</p>
          <p>Gender: {patient.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaPacientes;
