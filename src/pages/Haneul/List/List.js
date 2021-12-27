import React, { useState, useEffect } from 'react';
import TopNav from '../components/TopNav';
import CoffeeCard from '../components/CoffeeCard';
import './List.scss';

function List() {
  
  const [mockdata, setMockData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/Haneul/data.json")
      .then((res) => res.json())
      .then((res) => setMockData(res));
  }, []);

  return (
    <div className="background">
      <TopNav />
      <section id="cold-brew" className="wrap">
        <div className="notice">
          <p>
            콜드 브루 커피{' '}
            <img alt="커피" src="/images/Haneul/coffee-cup.png" width="18px" />
            <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
          </p>
        </div>
        <article>
          <ul className="coffee-list">
            {mockdata.cold && mockdata.cold.map((e, i) => {
              return <CoffeeCard key={i} item={e} />;
            })}
          </ul>
        </article>
      </section>
      <section id="brewed-coffee" className="wrap">
        <div className="notice">
          <p>
            브루드 커피{' '}
            <img alt="커피" src="/images/Haneul/coffee-cup.png" width="18px" />
            <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
          </p>
        </div>
        <article>
          <ul className="coffee-list">
            {mockdata.brewed && mockdata.brewed.map((e, i) => {
              return <CoffeeCard key={i} item={e} />;
            })}
          </ul>
        </article>
      </section>
    </div>
  );
}

export default List;
