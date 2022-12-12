
import axios from "axios";

function getAllProducer () {
    return axios.get("http://localhost:8000/api/producer")
}

export default getAllProducer;