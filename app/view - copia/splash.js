Ext.define('login.view.splash', {
	extend: 'Ext.Panel',
	xtype: 'splash',
	
	config: {
		title: 'Splash',
		iconCls: 'home',
		cls: 'home',
		scrollable: true,
		styleHtmlContent: true,
		
		
		html: [
			'<img src="./resources/images/budgeteer.png" align=center/>'
		].join("")		
	}
});	