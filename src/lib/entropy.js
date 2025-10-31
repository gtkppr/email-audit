export const shannonEntropy = (string) => {
	const len = string.length
	if(len === 0) return 0
	const freq = {}
	for(const c of string) {
		freq[c] = (freq[c] || 0) + 1
	}
	let entropy = 0
	for(const c in freq) {
		const p = freq[c] / len
		entropy -= p * Math.log2(p)
	}
	return entropy
}