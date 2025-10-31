export const emojiRegexRule = /<a?:.+?:\d{18}>|\p{Extended_Pictographic}/gu

export const rfc5322RegexRule =
	// Local-part
	"^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+" +
	"(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*" +
	// Or quoted-string
	"|" +
	'"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|' +
	'\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*"' +
	")" +
	// @
	"@" +
	// Domain check: either dot-separated labels
	"(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+" +
	"[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?" +
	// or literal IP in brackets
	"|\\[(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}" +
	"(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)" +
	"\\])$"