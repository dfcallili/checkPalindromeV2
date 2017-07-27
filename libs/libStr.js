var libStr;

module.exports = function(strCompare){
	if(strCompare == null || strCompare == "")
		return false;

	if(strCompare.length == 1)
		return true;

	var strOriginal = strCompare.replace(/[^A-Z0-9]/ig, "").toUpperCase();
	var strReverse = strOriginal.split('').reverse().join('');
		
	return strOriginal === strReverse;
}