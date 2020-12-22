const deltaTime = tempDate => {
  const delta = (Date.parse(new Date()) - Date.parse(tempDate)) / 1000;

  // console.log('!+! new Date() = ', new Date());
  // console.log('!+! tempDate = ', tempDate);
  // console.log('!+! typeof(tempDate) = ', typeof(tempDate));
  // console.log('!+! typeof(Date(tempDate)) = ', typeof(Date(tempDate)));
  // console.log('!+! (new Date() = ', new Date());
  // console.log('!+! delta = ', delta);

  const h = toTwoDigit(Math.floor(delta / 3600));
  const min = toTwoDigit(Math.floor(delta / 60 - h * 60));
  const sec = toTwoDigit(Math.floor(delta % 60));
  const fullTime = `${h} : ${min} : ${sec}`;
  return fullTime;
};

const toTwoDigit = data => data.toString().padStart(2, '0');

export default deltaTime;
