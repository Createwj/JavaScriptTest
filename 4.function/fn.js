//从url中直接获取 变量
function getQueryVariable(variable)
{
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i=0;i<vars.length;i++) {
        let pair = vars[i].split("=");
        if(pair[0] === variable){return pair[1];}
    }
    return(false);
}

function GetRequest() {

    let url = location.search;  //获取url中"?"符后的字串
    let param = {};
    if (url.indexOf("?") !== -1) {  // 检测有参数
        let str = url.substr(1);
        strs = str.split("&");
        for(let i = 0; i < strs.length; i ++) {
            param[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
        }
    }
    return param;
}

let EmptyObject = new Object();
let EmptyObj = {};
let Empty = Object.create(Object.prototype);
