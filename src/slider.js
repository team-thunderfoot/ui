/**
 * Styles
 */
// import "./index.scss";

/**
 * Lazy Loading
 */
import Slider01 from "./Slider01"

class Index {
    constructor() {
        this.init()
    }
    init() {
        new Slider01()
    }
}

export default Index
new Index()
