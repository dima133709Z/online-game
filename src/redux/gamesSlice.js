import { createSlice } from '@reduxjs/toolkit';
import gamesData from './gamesData.json';

const initialState = {
    games: gamesData,
    searchTerm: '',
    filteredGames: [],
};

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
            state.filteredGames = state.games.filter((game) =>
                game.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            );
        },
        showAllGames(state) {
            state.filteredGames = state.games;
        },
    },
});

export const { setSearchTerm, showAllGames } = gamesSlice.actions;
export default gamesSlice.reducer;
