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
			return "Andoird Browser"
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
			return "Internet Explorer Mobile"
			break
		case 'and_uc':
			return "UC for Android"
			break
		case 'bb':
			return "Blackberry"
			break
		default:
			return "Browser"
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
			return "-mox-"
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
			return "-"
	}
})


Handlebars.registerHelper('browserCurrent', function(browser_id) {

	switch (browser_id) {
		case 'ie':
			return "11"
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
			return "-mox-"
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
			return "-"
	}
})