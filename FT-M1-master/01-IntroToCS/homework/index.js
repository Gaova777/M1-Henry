function decimaltobinario(num){
    var n = num;
    let x = []
    while(n!=0){
        x.push(n%2)
        n=Math.floor(n/2);
    }
    return x;
}

console.log(decimaltobinario(3))