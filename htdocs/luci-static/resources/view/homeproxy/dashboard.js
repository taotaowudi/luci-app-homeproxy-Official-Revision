'use strict';
'require view';

return view.extend({
	render: function() {
		window.location.href = '/luci-static/resources/homeproxy/zashboard/index.html';
		return E([]);
	}
});