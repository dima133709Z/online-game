import { createSlice } from '@reduxjs/toolkit';
import gamesData from './gamesData.json'; // Import the game data from the JSON file

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
    },
});

export const { setSearchTerm } = gamesSlice.actions;
export default gamesSlice.reducer;
