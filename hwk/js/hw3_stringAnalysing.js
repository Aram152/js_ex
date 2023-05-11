const path = '/users/downloads/index.html'

const isHtml = path => {
    const requiredExt = '.html';

    return ((path.slice(-5)).includes(requiredExt))

    // const pathExt = path.slice(-5);
    // return requiredExt === pathExt


    // const pathExt = path.slice(-5);
    // if (requiredExt === pathExt) {
    //     return true
    // } else {return false}


    // if ((path.slice(-6)).includes(requiredExt)) {
    //     return true
    // } else {return false}


    // this is first way-my way
    // if (path.includes(requiredExt)) {
    //     return true;
    // }
    // else {return false};
}

console.log(isHtml(path))