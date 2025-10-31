export default function checkIfAlias(email) {
	
	const localPart = email.split("@")[0]
	
	if(!localPart) return ["email_local_not_found"]
	
	const withoutTag = localPart.split("+")[0]
	
	const withoutSeparators = withoutTag.replace(/[._-]/g, "")
	
	const isAlias = withoutSeparators !== localPart
	
	return isAlias ? ["email_is_alias"] : []
	
}