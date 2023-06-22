import React, { useEffect, useState } from 'react';
import JpTest from 'api/jptest';
import { list } from 'interface/jpTest';

const Home = () => {
  const [recruits, setRecruits] = useState<list[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const jpTest = new JpTest();
      jpTest
        .list()
        .then(result => {
          const {
            code,
            status,
            data: { recruits },
          } = result.data;
          if (code === 200) {
            setRecruits(recruits);
          } else {
            console.log(status);
          }
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(recruits);

  return (
    <>
      {loading ? ( //
        <span>...Loading</span>
      ) : (
        recruits.map(item => (
          <section key={item.id}>
            <img src={item.image} alt={item.title} />
            <dl>
              <dt>{item.appeal}</dt>
              <dd></dd>
            </dl>
          </section>
        ))
      )}
    </>
  );
};

export default Home;
