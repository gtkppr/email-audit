import { emojiRegexRule } from "../config/regex.js"
import { shannonEntropy } from "../lib/entropy.js"
import {
	EMAIL_DIGITS_RATIO,
	EMAIL_LOCAL_ENTROPY,
	EMAIL_MAX_REPEAT_CHARS
} from "../config/constants.js"

const hasRepeatedChars = (localPart) => {
	const counts = {}
	for(const c of localPart) {
		counts[c] = (counts[c] || 0) + 1
		if(counts[c] >= EMAIL_MAX_REPEAT_CHARS) {
			return true
		}
	}
	return false
}

const hasMixedScripts = (localPart) => {
	const hasLatin = /[A-Za-z]/.test(localPart)
	const hasCyrillic = /[\u0400-\u04FF]/.test(localPart)
	const hasGreek = /[\u0370-\u03FF]/.test(localPart)
	return hasLatin && (hasCyrillic || hasGreek)
}

export default function checkComposition(email) {
	
	const localPart = email.split("@")[0]
	
	if(!localPart) return ["email_local_not_found"]
	
	const len = localPart.length
	const digitCount = (localPart.match(/\d/g) || []).length
	
	const threats = []
	
	if(len < 2) {
		threats.push("email_local_too_short")
	} else if(len > 30) {
		threats.push("email_local_too_long")
	}
	
	if(/^[0-9]+$/.test(localPart)) {
		threats.push("email_local_digits_only")
	} else if(digitCount / len >= EMAIL_DIGITS_RATIO) {
		threats.push("email_local_high_digit_ratio")
	} else if(/\d{5,}/.test(localPart)) {
		threats.push("email_local_consec_digits5")
	} else if(!(/[aeiou]/i.test(localPart))) {
		threats.push("email_local_lacks_vowels")
	}
	
	if(shannonEntropy(localPart) >= EMAIL_LOCAL_ENTROPY) {
		threats.push("email_local_high_entropy")
	}
	
	if(hasRepeatedChars(localPart)) {
		threats.push("email_local_repeated_chars")
	}
	
	if(hasMixedScripts(localPart)) {
		threats.push("email_local_mixed_scripts")
	}
	
	const emojiRegex = new RegExp(emojiRegexRule)
	
	if(emojiRegex.test(localPart)) {
		threats.push("email_local_emoji")
	}
	
	return threats
	
}