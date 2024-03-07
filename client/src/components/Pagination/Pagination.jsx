import React from 'react';
import styles from './Pagination.module.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  
    return (
      <div className={styles.paginationContainer}>
        {currentPage > 1 && <button 
        className={styles.pageButton} 
        onClick={() => onPageChange(currentPage - 1)}>PREVIOUS</button>}
            {pages.map(page => (
            <button
                key={page}
                className={`${styles.pageButton} ${page === currentPage ? styles.active : ''}`}
                onClick={() => onPageChange(page)}
            >
                {page}
            </button>
            ))}
        {currentPage < totalPages && <button className={styles.pageButton} onClick={() => onPageChange(currentPage + 1)}>NEXT PAGE</button>}
      </div>
    );
  };
  
  export default Pagination;