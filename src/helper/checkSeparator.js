import {
	EMAIL_SEP_DENSITY_THRESHOLD,
	EMAIL_SEPARATORS
} from "../config/constants.js"

const separatorCheck = (localPart, separator) => {
	const escapedSeparator = separator.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
	const collapsedLocal = localPart.replace(new RegExp(escapedSeparator, "g"), "")
	const expectedPattern = collapsedLocal.split("").join(separator)
	return (localPart === expectedPattern && collapsedLocal.length > 1)
}

export default function checkSeparator(email) {
	
	const threats = []
	
	const localPart = email.split("@")[0]
	
	if(!localPart) return ["email_local_not_found"]
	
	if(
		separatorCheck(localPart, ".") === true ||
		separatorCheck(localPart, "-")
	) {
		threats.push("email_local_sep_abuse")
	}
	
	const consecutiveSep = /(--|__|\.\.)/
	
	if(consecutiveSep.test(localPart)) {
		threats.push("email_local_double_sep")
	}
	
	let sepCount = 0
	
	for(const char of localPart) {
		if(EMAIL_SEPARATORS.includes(char)) {
			sepCount++
		}
	}
	
	const sepRatio = sepCount / localPart.length
	
	if(sepRatio > EMAIL_SEP_DENSITY_THRESHOLD) {
		threats.push("email_local_sep_high_density")
	}
	
	return threats
	
}