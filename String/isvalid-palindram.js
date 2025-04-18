/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
        let cleaned = "";
        
        for (let i = 0; i < s.length; i++) {
            let ch = s[i];
            let code = ch.charCodeAt(0);
            
            // Check if alphanumeric
            if (
                (code >= 65 && code <= 90) ||  // A-Z
                (code >= 97 && code <= 122) || // a-z
                (code >= 48 && code <= 57)     // 0-9
            ) {
                cleaned += ch.toLowerCase();
            }
        }
    
        let left = 0;
        let right = cleaned.length - 1;
    
        while (left < right) {
            if (cleaned[left] !== cleaned[right]) return false;
            left++;
            right--;
        }
    
        return true;
    };
    