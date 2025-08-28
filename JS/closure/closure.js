

function outerFunc(){
    let name = "lalit"; //this is in the scope of outerfunc so basically it should be freed from memory when the outerfunc works but it doesnt 
    //cause js binds the function required data to the inner func of the parent func

    function innerFunc(){
        console.log(name);
    }

    return innerFunc;
}
let inner = outerFunc();
inner();