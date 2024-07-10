import axios from 'axios';

const fetchData = async () => {
    const response = await axios.get(`http://localhost:3000/posts`)
    const objData = JSON.stringify(response)
    return objData
}

const postData = async () => {
    const content = {
        "posts": [
          { "id": "3", "title": "a title 3", "views": 120 },
        ],
        "comments": [
          { "id": "3", "text": "a comment about post 3", "postId": "3" },
        ],
        "profile": {
          "name": "apitesting"
        }
      }
    const response = await axios.get('http://localhost:3000/posts', content)
    const objData = JSON.stringify(response)
    return objData
}


export {fetchData, postData}

