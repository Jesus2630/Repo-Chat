const{request,response}=require('express')


const facebookStatus=(request,response)=>{
FB.getLoginStatus(function(response) {
    console.log(statusChangeCallback(response))
})};

module.exports={
    facebookStatus
}