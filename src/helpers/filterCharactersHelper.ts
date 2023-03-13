export const filterCharactersHelper = (state: any, action: any) => {
    state.input = action.payload;
    if (state.search.length !== 0) {
        state.search = state.search.filter((el: any) => el.name.includes(action.payload)).sort((a: any, b: any) => a.name.localeCompare(b.name));
    };
};