/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s)
 {
    let vocale=[];
    let consoane=[];
    let ctvoc=1;
    let ctcons=1;
    var i;
    for (i=0;i<=s.length-1;i++)
     if (s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u')
      {
          vocale[ctvoc]=s[i];
          ctvoc++;
      }
      else
      {
          consoane[ctcons]=s[i];
          ctcons++;
      }
      
      for (i=1;i<ctvoc;i++)
       console.log(vocale[i]);
      for (i=1;i<ctcons;i++)
      console.log(consoane[i]);
 }


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}