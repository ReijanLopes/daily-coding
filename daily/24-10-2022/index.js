// different base data

const data = async (href) => {
  // return {id: number,name: string, class: number} or Array<[number=== idPerson: number]>
  let res;
  let err;
  try {
    const getData = await fetch(`http://localhost:3000/${href}`);
    res = await getData.json();
  } catch (error) {
    err = error;
  }
  return { res, err };
};

const checkingPresence = () => {
  const person = data("person");
  const callRoll = data("callRoll");

  if (person.res) {
    callRoll.res.map((item) => {
      // filtering persons presents and add presence
      const filtered = person.res.filter((filter) => filter.id === item);
      if (filtered[0]) {
        filtered[0].callRoll = "Presence";
      }
    });
  }
};

checkingPresence();
