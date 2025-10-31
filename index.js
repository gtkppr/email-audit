import checkSuspiciousTag from "./src/helper/checkSuspiciousTag.js"
import checkComposition from "./src/helper/checkComposition.js"
import checkGenericRole from "./src/helper/checkGenericRole.js"
import checkSeparator from "./src/helper/checkSeparator.js"
import validateEmail from "./src/helper/validateEmail.js"
import checkIfAlias from "./src/helper/checkIfAlias.js"

export {
	checkSuspiciousTag,
	checkComposition,
	checkGenericRole,
	checkSeparator,
	validateEmail,
	checkIfAlias
}

export default function inspect(email) {
	
	const isValid = validateEmail(email)
	const threats = []
	
	if(!isValid) {
		threats.push("email_not_valid")
		return threats
	}
	
	const composition = checkComposition(email)
	threats.push(...composition)
	
	const genericRole = checkGenericRole(email)
	threats.push(...genericRole)
	
	const separator = checkSeparator(email)
	threats.push(...separator)
	
	const tag = checkSuspiciousTag(email)
	threats.push(...tag)
	
	const isAlias = checkIfAlias(email)
	threats.push(...isAlias)
	
	return {
		suspicious: threats.length !== 0,
		threats
	}
	
}