// async / await
const getWithAsync = async () => {
    try {
        const data = await fetch(/* url */);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

// using promise
const getWithPromise = () => {
    let data = null;
    fetch(/* url */)
        .then((res) => (data = res))
        .catch((err) => console.error(err));
};

// callback
const getWithCallBack = (callback) => {
    setTimeout(() => {
        // callback handles with the help of
        // conditionals
    }, 50);
};

function callback(err, data) {
    if (err) console.error(err);
    else console.log(data);
}
