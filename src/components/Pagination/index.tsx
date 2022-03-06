import React from 'react';
import './styles.css';

type Props = {
  pages: number;
  onClick: (num: number) => void;
  active: number;
};

/**
 *
 * @param pages Number of pages to initiate
 * @param onClick Passes clicked number to parent component
 * @param active Current active page
 * @returns Pagination component
 */
const Pagination = (props: Props) => {
  const pages = [...Array(props.pages).keys()];
  console.log('Pagination render');
  return (
    <div className="pagination">
      {pages.map((item, index) => (
        <button
          className={props.active == index ? 'pagination__btn--active' : ''}
          key={index}
          onClick={() => props.onClick(index)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
