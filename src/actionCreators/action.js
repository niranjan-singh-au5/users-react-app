import axios from "axios";
export const loginApi = async () => {
   var data = await axios.get("https://reqres.in/api/login");
   return data
}

export const userLogin = async (username, password) => {
   const data = axios({
      method: "POST",
      url: "https://reqres.in/api/login",
      data: {
         "email": "eve.holt@reqres.in",
         "password": "pistol"
      }
   })
   return data
}

export const userDashboard = (page) => {
   let data = axios.get(`https://reqres.in/api/users?page=${page}`)

   return (dispatch) => {
      data.then(res => {
         dispatch({
            type: "user-dashboard",
            payload: res.data
         })
      }).catch(err => console.log(err))
   }
}

export const specificUser = (id) => {

   let data = axios.get(`https://reqres.in/api/users/${id}`)

   return (dispatch) => {
      data.then(res => {
         dispatch({
            type: "user-details",
            payload: res.data
         })
      }).catch(err => console.log(err))
   }
}