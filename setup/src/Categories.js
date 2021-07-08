import React from 'react';

const Categories = ({ filterFoods, groups }) => {
  return (
    <article>
      {groups.map((group, index) => {
        return (
          <button key={index} type="button" onClick={() => filterFoods(group)}>
            {group}
          </button>
        );
      })}
    </article>
  );
};

export default Categories;
