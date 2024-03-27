(function(cookieFactory)
{
    window.cookieMethodes = cookieFactory;
})(function()
{
    function createCookie(key , value , date){
        if(date){
            localStorage.setItem(key, value)
        }else {
            sessionStorage.setItem(key , value)
        }
    }
    function getCookie(key){
        var local = localStorage.getItem(key)
        if(local)
            return local
        else 
            return sessionStorage.getItem(key)
    }
    function removeCookie(key){
        localStorage.removeItem(key)
        sessionStorage.removeItem(key)
    }
    function getCookies() {
        var allCookies = [];
        Object.keys(localStorage).forEach(function(key) {
            allCookies.push({ key: key, value: localStorage.getItem(key) });
        });
        Object.keys(sessionStorage).forEach(function(key) {
            allCookies.push({ key: key, value: sessionStorage.getItem(key) });
        });
        return allCookies;
    }
    function removeCookies()
    {
        localStorage.clear()
        sessionStorage.clear()
    }
    return {createCookie , removeCookie , getCookie , getCookies , removeCookies};
});