import apiRequest from "./apiRequest.js"
export const singlePageLoad = async({request,params})=>{
const res = await apiRequest("/posts/"+params.id)
 return res.data

}
export const listPageLoad = async({request,params})=>{
   const query = request.url.split("?")[1]
   const res = await apiRequest("/posts?"+query)
   return res.data
    }