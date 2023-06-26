/**
 * Styles
 */
// import "./index.scss";

/**
 * Lazy Loading
 */
import SliderA from "./SliderA"

class Index {
    constructor() {
        this.init()
    }
    init() {
        new SliderA()
    }
}

export default Index
new Index()
