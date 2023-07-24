import axios from "axios";

class Bookservice {
    static async getListComic() {
        return await axios.post('http://localhost:8080/book/')
    }
    static async addComic(data) {
        return await axios.post('http://localhost:8080/book/add', data)
    }
}

export default Bookservice