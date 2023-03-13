export  function sortResultHelper (action: any) {
    return action.payload.results.sort((a: any, b: any) => a.name.localeCompare(b.name));
}