export function formValidationChecker(e){
var {name, value} =e.target
switch(name){
    case 'name':
        if(value.length===0)
        return name + "Filed Must Required"
    else if(value.length<3 || value.length>30)
    return name + " Filed Must Contains Atleast 3 Character And Must Be Less Then 50 Characters "
else
return ""
}
}