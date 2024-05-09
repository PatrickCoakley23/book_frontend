import axios from "axios";

const BUILD_ENV = "http://bookapi-dev.eu-west-1.elasticbeanstalk.com/" 

export default axios.create({
    baseURL: BUILD_ENV
});