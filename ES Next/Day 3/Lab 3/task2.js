let proxyHandler = {
    set(object , key , value){
        if(key in object)
        {
            if(key == 'name'){
                if(typeof value == 'string')
                {
                    if(value.length <= 7)
                    {
                        object[key] = value;
                    }
                    else{
                        throw "name must be 7 characters or less";
                    }
                }else 
                {
                    throw 'name must be a stirng ';
                }
            }
        }else 
        {
            throw 'key does not exist';
        }
    },
    set(object , key , value){
        if(key in object)
        {
            if(key == 'address'){
                if(typeof value == 'string')
                {
                    object[key] = value;
                }else 
                {
                    throw 'address must be a stirng ';
                }
            }
        }else 
        {
            throw 'key does not exist';
        }
    },
    set(object , key , value){
        if(key in object)
        {
            if(key == 'age'){
                if(typeof value == 'number')
                {
                    if(value >= 25 && value <= 60)
                    {
                        object[key] = value;
                    }
                    else{
                        throw "age must be between 25 and 60";
                    }
                }else 
                {
                    throw 'age must be a number';
                }
            }
        }else 
        {
            throw 'key does not exist';
        }
    }
}

let myobj = new Proxy({name:'' , age : 0 , address :''} , proxyHandler);

myobj.name = 'esraa'; //correct 
//myobj.name = 'esraaaaaaaaaaaaaaaaaaaaaaaaaa' //error
myobj.address = 'milky way'; //correct
//myobj.address = 5 //thrw error 
myobj.age = 40; // correct
//myobj.address = 70 //throw error