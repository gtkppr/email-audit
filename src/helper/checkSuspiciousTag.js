import { EMAIL_SEPARATORS } from "../config/constants.js"
import { shannonEntropy } from "../lib/entropy.js"

/**
 * Check if the tag matches the heuristic:
 * - At least 8 characters
 * - Entropy > 3.5
 * - (Optional) Regex pattern match
 */

const isSuspiciousTag = (tag) => {
	const entropy = shannonEntropy(tag)
	const regex = /^(?:.+)$/
	return (
		tag.length >= 8 &&
		Math.ceil(entropy) >= 3 &&
		regex.test(tag)
	)
}

export default function checkSuspiciousTag(email) {
	
	const localPart = email.split("@")[0]
	
	if(!localPart) return ["email_local_not_found"]
	
	let separatorIndex = -1
	let separatorChar = null
	
	for(const sep of EMAIL_SEPARATORS) {
		const index = localPart.indexOf(sep)
		if(index !== -1 && (separatorIndex === -1 || index < separatorIndex)) {
			separatorIndex = index
			separatorChar = sep
		}
	}
	
	const tag = localPart.slice(separatorIndex + 1)
	
	return isSuspiciousTag(tag) ? ["email_tag_suspicious"] : []
	
}