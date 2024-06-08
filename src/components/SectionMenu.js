import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {showAllGames} from '../redux/gamesSlice';
import SearchBar from './SearchBar';
import styles from '../styles/SectionMenu.module.scss';

const SectionMenu = () => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handlePopularClick = () => {
        dispatch(showAllGames());
        if (isMobile) {
            setShowMenu(false); // Закрываем меню при нажатии на POPULAR
        }
    };

    const handleNewClick = () => {
        // Логика для NEW
        if (isMobile) {
            setShowMenu(false); // Закрываем меню при нажатии на NEW
        }
    };

    const handleRecommendedClick = () => {
        // Логика для RECOMMENDED
        if (isMobile) {
            setShowMenu(false); // Закрываем меню при нажатии на RECOMMENDED
        }
    };

    return (
        <div className={styles.section}>
            <div className={styles.section_inner}>
                {!isMobile && (
                    <div className={styles.GameCategories}>
                        <div className={styles.popular} onClick={handlePopularClick}>
                            <p>POPULAR</p>
                        </div>
                        <div className={styles.new} onClick={handleNewClick}>
                            <p>NEW</p>
                        </div>
                        <div className={styles.recommended} onClick={handleRecommendedClick}>
                            <p>RECOMMENDED</p>
                        </div>
                    </div>
                )}

                {isMobile && (
                    <div className={styles.burger} onClick={() => setShowMenu(!showMenu)}>
                        <p>☰</p>
                    </div>
                )}

                {(isMobile && showMenu) && (
                    <div className={styles.overlay}>
                        <div className={styles.GameCategories}>
                            <div className={styles.popular} onClick={handlePopularClick}>
                                <p>POPULAR</p>
                            </div>
                            <div className={styles.new} onClick={handleNewClick}>
                                <p>NEW</p>
                            </div>
                            <div className={styles.recommended} onClick={handleRecommendedClick}>
                                <p>RECOMMENDED</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className={styles.search}>
                    <SearchBar/>
                </div>
            </div>
        </div>
    );
};

export default SectionMenu;
