function romanToInt(s: string): number {
    const vals: {[k:string]:number} = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (i+1 < s.length && vals[s[i]] < vals[s[i+1]]) res -= vals[s[i]];
        else res += vals[s[i]];
    }
    return res;
}
