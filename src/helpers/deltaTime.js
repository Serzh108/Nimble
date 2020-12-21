const deltaTime = tempDate => {
  const delta = (new Date() - tempDate) / 1000;
  // const x = (time - tempDate) / 1000;
  const h = toTwoDigit(Math.floor(delta / 3600));
  const min = toTwoDigit(Math.floor(delta / 60 - h * 60));
  const sec = toTwoDigit(Math.floor(delta % 60));
  const fullTime = `${h} : ${min} : ${sec}`;
  return fullTime;
};

const toTwoDigit = data => data.toString().padStart(2, '0');

export default deltaTime;