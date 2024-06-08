import React from 'react';
import {useDispatch} from 'react-redux';
import {setSearchTerm} from '../redux/gamesSlice';
import styles from '../styles/SearchBar.module.scss';

const SearchBar = () => {

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

    return (
        <div className={styles.search}>
            <div className={styles.search_inner}>
                <input
                    type="text"
                    placeholder="Search games..."
                    onChange={handleSearch}
                />
            </div>
        </div>
    );
};

export default SearchBar;
