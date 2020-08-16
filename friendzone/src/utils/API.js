import axios from "axios";
export default {
  postChat: (chat)=>{
    return axios.post("api/chat", chat);
  }
}
