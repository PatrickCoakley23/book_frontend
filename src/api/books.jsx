import axios from "axios";

// const BUILD_ENV = "http://bookapi-dev.eu-west-1.elasticbeanstalk.com/" 
const BUILD_ENV = "http://127.0.0.1:8000/" 

export default axios.create({
    baseURL: BUILD_ENV
});