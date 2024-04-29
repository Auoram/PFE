import db from '../../../../db';

const test1 = async () => {
  try {
    const [rows] = await db.execute('SELECT * FROM `vax`.`User`');
    console.log(rows);
  } catch (err) {
    console.error(err);
  }

  return <div>Welcome to my homepage!</div>;
};

export default test1;