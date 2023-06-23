import React, { useEffect } from 'react';
import JpTest from 'api/jptest';
import { IRecruits } from 'interface/jpTest';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { Bookmark, IconStar, IconWon } from 'components/svg';

const jpTest = new JpTest();

const Home = () => {
  const { ref, inView } = useInView();
  const {
    data: recruits,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['recruits'],
    async ({ pageParam = 1 }) => {
      const result = await jpTest.list(pageParam);
      const {
        code,
        status,
        data: { recruits },
      } = result.data;
      if (code !== 200) console.log(status);

      return recruits;
    },
    {
      getNextPageParam: (_, pages) => {
        if (pages.length >= 4) return;

        return pages.length + 1;
      },
      staleTime: 60 * 1000 * 1,
    }
  );

  useEffect(() => {
    if (inView) fetchNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <main className="w-wrap m-auto">
      {status === 'loading' ? ( //
        <span>Loading...</span>
      ) : (
        <section className="py-12">
          {status !== 'error' &&
            recruits.pages.map((page, index) => (
              <div key={index} className="grid grid-cols-3 gap-9 mb-9 last:mb-0">
                {page.map((item: IRecruits) => (
                  <div key={item.id} className="w-box border border-solid border-gray03 rounded-xl shadow-shadow01">
                    <div className="inline-block relative w-full h-180 overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-t-xl" />
                      <button type="button">
                        <Bookmark className="absolute top-5 right-4" isMark={item.bookmark} />
                      </button>
                    </div>

                    <div className="px-5">
                      <dl className="py-2.5">
                        <dt className="text-h1 text-gray01 whitespace-nowrap text-ellipsis overflow-hidden">{item.title}</dt>
                        <dd className="text-body3 text-gray02 whitespace-nowrap text-ellipsis overflow-hidden">{item.skills.join(', ')}</dd>
                      </dl>

                      <dl className={`${item.reward > 0 ? 'py-3' : 'pt-3 pb-6'} border-t border-solid border-gray03`}>
                        <dt className="flex items-center text-h1 text-gray01">
                          <img className="w-6 h-6 border border-solid border-gray03 rounded" src={item.company.logo} alt={item.company.name} />
                          <span className="ml-2 text-h2 text-gray01 whitespace-nowrap text-ellipsis overflow-hidden">{item.company.name}</span>
                          <div className="flex items-center ml-2">
                            <IconStar className="relative top-px" fill={`${item.company.grade_count > 0 ? '#00C362' : '#E5E6E9'}`} />
                            <span className="text-h2 text-gray01 ml-0.5">{item.company.grade % 1 === 0 ? `${item.company.grade}.0` : item.company.grade}</span>
                            <span className="text-body1 text-gray02 ml-1">&#40;{item.company.grade_count}&#41;</span>
                          </div>
                        </dt>
                        <dd className="mt-2 text-body3 text-gray02 whitespace-nowrap text-ellipsis overflow-hidden">{item.appeal}</dd>
                      </dl>

                      {item.reward > 0 && (
                        <div className="flex items-center pt-2.5 pb-4.5 border-t border-solid border-gray03">
                          <IconWon />
                          <p className="text-h3 text-gray01 ml-2">취업 축하금: {item.reward_text}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}

          {hasNextPage && (
            <button className="block m-auto" ref={ref} disabled={!hasNextPage || isFetchingNextPage}>
              {isFetchingNextPage ? 'Loading...' : ''}
            </button>
          )}
        </section>
      )}
    </main>
  );
};

export default Home;
