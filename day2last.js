function getLetter(s) {
    let letter;
    var i;
    let v=0;
    let cons1=0;
    let cons2=0;
    let cons3=0;
    for (i=0;i<=s.length-1;i++)
     if (s[0]=='a' || s[0]=='e' || s[0]=='i' || s[0]=='o' || s[0]=='u')
       v++;
       else
     if (s[0]=='b' || s[0]=='c' || s[0]=='d' || s[0]=='f' || s[0]=='g') 
       cons1++;
       else
    if (s[0]=='k' || s[0]=='j' || s[0]=='h' || s[0]=='l' || s[0]=='m') 
       cons2++;
       else
    if (s[0]=='n' || s[0]=='p' || s[0]=='q' || s[0]=='r' || s[0]=='s'
         || s[0]=='t' || s[0]=='v' || s[0]=='w' || s[0]=='x' || s[0]=='y' || s[0]=='z')
         cons3++;
      if (v>0)
            letter = 'A';
            //console.log('A');
            else
    if (cons1>0)
            {
            letter = 'B';
            //console.log('B');
            }
    else if (cons2>0)
    {
            letter = 'C';
            //console.log('C');
    }
    else
    if (cons3>0)
    {
            letter = 'D';
            //console.log('D');
    }
        
    
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}