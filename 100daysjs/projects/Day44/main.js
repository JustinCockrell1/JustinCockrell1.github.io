import * as v from "./js/variables.js";
import {getUser, errorMessage} from "./js/functions.js"

v.form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let user = v.search.value.split(" ").join(""); //just removes spaces from input
    // user = v.search.value.replace(/\s+/g,"");//also removes spaces

    if(user==""){
         errorMessage("Input cannot be blank");
        // console.log("blank");
    }
    else {
        getUser(user);
        v.form.reset();
    }

});