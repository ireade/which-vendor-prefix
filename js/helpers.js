// Custom Handlebars Helpers

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});


Handlebars.registerHelper('browserName', function(browser_id) {

	switch (browser_id) {
		case 'ie':
			return "Internet Explorer"
			break
		case 'firefox':
			return "Firefox"
			break
		case 'chrome':
			return "Google Chrome"
			break
		case 'safari':
			return "Safari"
			break
		case 'opera':
			return "Opera"
			break
		case 'ios_saf':
			return "iOS Safari"
			break
		case 'op_mini':
			return "Opera Mini"
			break
		case 'android':
			return "Android Browser"
			break
		case 'op_mob':
			return "Opera Mobile"
			break
		case 'and_chr':
			return "Chrome for Android"
			break
		case 'and_ff':
			return "Firefox for Android"
			break
		case 'ie_mob':
			return "IE Mobile"
			break
		case 'and_uc':
			return "UC for Android"
			break
		case 'bb':
			return "Blackberry"
			break
		default:
			return "nil"
	}
})


Handlebars.registerHelper('browserPrefix', function(browser_id) {

	switch (browser_id) {
		case 'ie':
			return "-ms-"
			break
		case 'firefox':
			return "-moz-"
			break
		case 'chrome':
			return "-webkit-"
			break
		case 'safari':
			return "-webkit-"
			break
		case 'opera':
			return "-o-"
			break
		case 'ios_saf':
			return "-webkit-"
			break
		case 'op_mini':
			return "-o-"
			break
		case 'android':
			return "-webkit-"
			break
		case 'op_mob':
			return "-o-"
			break
		case 'and_chr':
			return "-webkit-"
			break
		case 'and_ff':
			return "-moz-"
			break
		case 'ie_mob':
			return "-ms-"
			break
		case 'and_uc':
			return "-webkit-"
			break
		case 'bb':
			return "-webkit-"
			break
		default:
			return "nil"
	}
})


Handlebars.registerHelper('browserCurrent', function(browser_id) {

	switch (browser_id) {
		case 'ie':
			return "11"
			break
		case 'firefox':
			return "37"
			break
		case 'chrome':
			return "42"
			break
		case 'safari':
			return "8"
			break
		case 'opera':
			return "27"
			break
		case 'ios_saf':
			return "8.1-8.3"
			break
		case 'op_mini':
			return "5.0-8.0"
			break
		case 'android':
			return "40"
			break
		case 'op_mob':
			return "24"
			break
		case 'and_chr':
			return "42"
			break
		case 'and_ff':
			return "37"
			break
		case 'ie_mob':
			return "11"
			break
		case 'and_uc':
			return "9.9"
			break
		case 'bb':
			return "10"
			break
		default:
			return "nil"
	}
})
