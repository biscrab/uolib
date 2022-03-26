export const getPage = (page) => {
    let p = Number(page);
    if(!p)
        p = 1;
    let l = [];

    if(p >= 3)
        l.push(p-2);
    
    if(p >= 2)
        l.push(p-1);

    l.push(p);

    if(p <= props.max-1)
        l.push(p+1);

    if(p <= props.max-2)
        l.push(p+2);
        
    return(l);
}