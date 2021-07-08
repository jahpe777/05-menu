import React from 'react';

const Menu = ({ foods }) => {
  return foods.map((food) => {
    const { id, title, price, img, desc } = food;
    return (
      <article key={id}>
        <img style={{ width: '200px' }} src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4>{price}</h4>
          <p>{desc}</p>
        </div>
      </article>
    );
  });
};

export default Menu;
