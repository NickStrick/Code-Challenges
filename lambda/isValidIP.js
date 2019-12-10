function isValidIP(str) {
    str = str.split('.')
    if (str.length === 4) {
        for (let s of str) {
            if (s.length > 1) {
                if (s[0] === '0') {
                    return false;
                }
            }
            if (s.indexOf(' ') || s.indexOf('/n')) {
                return false
            }
            const parsed = parseInt(s, 10)
            if (isNaN(parsed) || parsed > 255 || parsed < 0) return false;
        }
        return true;
    }
    return false;
}

function isValidIP(str) {
    return str.split('.').filter(function (v) { return v == Number(v).toString() && Number(v) < 256 }).length == 4;
}