/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var str = "";
    var current = "";

    if (strs.length === 0) return "";

    for (var i = 0; i < strs[0].length; i++) {
        current = strs[0][i]; // take char from first word
        var isTrue = true;

        for (var j = 1; j < strs.length; j++) {
            if (strs[j][i] !== current) {
                isTrue = false;
                break;
            }
        }

        if (isTrue) {
            str = str + current;
        } else {
            break;
        }
    }

    console.log(str);
    return str;
};

longestCommonPrefix(["flower", "flow", "flight"]); // Output: "fl"
