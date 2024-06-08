import React from 'react';
import { useDispatch } from 'react-redux';
import { showAllGames } from '../redux/gamesSlice';
import styles from '../styles/SectionMenu.module.scss';
import SearchBar from './SearchBar';

const SectionMenu = () => {
    const dispatch = useDispatch();

    const handlePopularClick = () => {
        dispatch(showAllGames());
    };

    return (
        <div className={styles.section}>
            <div className={styles.section_inner}>

                <div className={styles.GameCategories}>

                    <div className={styles.popular} onClick={handlePopularClick}>
                        <p>POPULAR</p>
                    </div>
                    <div className={styles.new}>
                        <p>NEW</p>
                    </div>
                    <div className={styles.recommended}>
                        <p>RECOMMENDED</p>
                    </div>

                </div>

                <div className={styles.search}>
                    <SearchBar />
                </div>

            </div>
        </div>
    );
};

export default SectionMenu;
