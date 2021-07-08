import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = [
  'all',
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];

function App() {
  const [foods, setFoods] = useState(items);
  const [groups, setGroups] = useState(allCategories);

  const filterFoods = (category) => {
    if (category === 'all') {
      setFoods(items);
      return;
    }
    setFoods(items.filter((item) => item.category === category));
  };

  return (
    <main style={{ textAlign: 'center' }}>
      <section>
        <div>
          <h2>Our Menu</h2>
        </div>
        <Categories groups={groups} filterFoods={filterFoods} />
      </section>
      <section>
        <Menu foods={foods} />
      </section>
    </main>
  );
}

export default App;
