export const throttle = (func,delay) => {
    let last = 0;
    return (...args) => {
        let now = new Date().getTime();
        if(now - last < delay) {
            return;
        }
        last = now;
        func(...args);
    }
}

export const debounce = (func,delay) => {
    let timeoutFunction;
    return function(...args) {
        if(timeoutFunction){
            clearTimeout(timeoutFunction)
        }
        timeoutFunction = setTimeout(() => {
            func(...args);
        },delay)
    }
}

export const searchFilters = (products,searchValue) => {
    let allProducts = [...products];
    let filteredData;
    let search = searchValue.toLowerCase();
    if(searchValue.length > 1){
        filteredData = allProducts.filter(product => product.category.toLowerCase().includes(search) || product.prodcutName.toLowerCase().includes(search))
    }
    return filteredData;
}
