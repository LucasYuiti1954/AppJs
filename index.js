//arrays, objetos

let meta = {
    value: "Ganhar títulos importantes",
    adress: 2,
    checked: false,
    log: (info) => {
        console.log(info);
    }
}

meta.value = "Mudei a meta"
meta.log(meta.value);

//function //arrow function
//const criarMeta = () => {}
//function criarMeta() {}