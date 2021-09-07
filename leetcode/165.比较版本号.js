/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    let v1=version1.split('.')
    let v2=version2.split('.')
    let n=Math.max(v1.length,v2.length)
    for (let i=0; i<n; i++) {
        if ((+v1[i])!==(+v2[i])) {
            return compare(+v1[i],+v2[i])
        }
    }

    function compare(v1, v2) {
        if(v1>v2) {
            return 1
        }
        return -1;
}
};


console.log(compareVersion("1.01","1.001"));
