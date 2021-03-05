class Node {
    constructor() {
        this.container = document.getElementById('nodes');
    }
    increment() {
        this.container.scrollLeft += window.innerWidth;
    }
    didScroll() {
        const margin = 60;
        const predicate =
            this.container.scrollWidth - this.container.scrollLeft <= window.innerWidth + margin;
        this.container.classList = predicate ? 'reached' : '';
    }
}
