function isPositive(a) {
    let pos ="YES";
    let neg ="Negative Error";
    let zer ="Zero Error";
    
    if (a>0)
    return pos;
    else
    if (a==0)
    return zer;
    else
    return neg;
    
}


function main() {
    const n = +(readLine());
    
    for (let i = 0; i < n; i++) {
        const a = +(readLine());
      
        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}