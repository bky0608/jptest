import React, { useState } from 'react';
import JpTest from 'api/jptest';
import { IRecruits } from 'interface/jpTest';
import { useQuery } from '@tanstack/react-query';
import { Bookmark, IconStar, IconWon } from 'components/svg';

const jpTest = new JpTest();

const Home = () => {
  const [state, setState] = useState(false);
  const { data: recruits, isLoading } = useQuery(
    ['recruits'],
    async () => {
      console.log('recruits API');
      const result = await jpTest.list();
      const {
        code,
        status,
        data: { recruits },
      } = result.data;
      if (code !== 200) console.log(status);
      return recruits;
    },
    { staleTime: 60 * 1000 * 1 }
  );

  console.log(recruits);

  return (
    <main className="w-wrap m-auto">
      {isLoading ? ( //
        <span>...Loading</span>
      ) : (
        <section className="grid grid-cols-3 gap-9 py-12">
          {recruits.map((item: IRecruits) => (
            <div key={item.id} className="w-box h-box border border-solid border-gray03 rounded-xl shadow-shadow01">
              <div className="inline-block relative h-180  overflow-hidden">
                <img src={item.image} alt={item.title} className="min-h-full object-cover rounded-t-xl" />
                <button type="button">
                  <Bookmark className="absolute top-5 right-4" isMark={item.bookmark} />
                </button>
              </div>

              <div className="px-5">
                <dl className="py-2.5 border-b border-solid border-gray03">
                  <dt className="text-h1 text-gray01">{item.title}</dt>
                  <dd className="text-body3 text-gray02">{item.skills}</dd>
                </dl>

                <dl className="py-3 border-b border-solid border-gray03">
                  <dt className="flex items-center text-h1 text-gray01">
                    <img className="w-6 h-6 border border-solid border-gray03 rounded object-cover" src={item.company.logo} alt={item.company.name} />
                    <span className="ml-2 text-h2 text-gray01">{item.company.name}</span>
                    <div className="flex items-center ml-2">
                      <IconStar />
                      <span className="text-h2 text-gray01">{item.company.grade}</span>
                      <span className="text-body1 text-gray02">&#40;{item.company.grade_count}&#41;</span>
                    </div>
                  </dt>
                  <dd className="text-body3 text-gray02">{item.skills}</dd>
                </dl>

                <div className="flex items-center pt-2.5 pb-4.5">
                  <IconWon />
                  <p className="text-h3 text-gray01 ml-2.5">취업 축하금: {item.reward_text}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      <button onClick={() => setState(!state)}>버튼</button>
    </main>
  );
};

export default Home;
