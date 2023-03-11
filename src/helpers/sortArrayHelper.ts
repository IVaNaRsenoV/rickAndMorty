function sortByInputHelper (state: any, action: any) {
    return action.payload.results.filter((el: any) => 
        el.name.includes(state.input))
                .sort((a: any, b: any) => a.name.localeCompare(b.name));
}
  
export  function sortResultHelper (action: any) {
    return action.payload.results.sort((a: any, b: any) => a.name.localeCompare(b.name));
}
  
export function sortArrayHelpers (state: any, action: any) {
    if (state.input === '') {
        state.arr = sortResultHelper(action);
    } else {
        state.arr =  sortByInputHelper(state, action);
    }
}