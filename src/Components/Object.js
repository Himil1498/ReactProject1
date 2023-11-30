const Object = () => {
  let info = [
    {
      name: "Himil",
      age: 25,
      address: "Modasa",
      gender: "Male",
    },
  ];
  return (
    <>
      <div>
        <h2>(9)</h2>
        <h2>Student Information</h2>
        {info.map((i) => {
          return (
            <div>
              <h3>Name :- {i.name}</h3>
              <h3>Age :- {i.age}</h3>
              <h3>Gender :- {i.address}</h3>
              <h3>Address :- {i.gender}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Object;
