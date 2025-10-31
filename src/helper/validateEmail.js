import { rfc5322RegexRule } from "../config/regex.js"

export default function validateEmail(email) {
	const emailRegex = new RegExp(rfc5322RegexRule)
	return emailRegex.test(email)
}