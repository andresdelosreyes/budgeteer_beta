Ext.define('login.view.Profile', {
	extend: 'Ext.form.Panel',
	xtype: 'profile',
	
	requires: [
		'Ext.field.Select'
	],
	
	config: {
		title: 'Profile',
		iconCls: 'user',
		cls: 'home',
		scrollable: true,
		styleHtmlContent: true,
		items: [
			{
				xtype: 'fieldset',
				title: 'Add User',
				//instructions: 'Please enter your mail and password',
				
				items: [
					{
						xtype: 'textfield',
						name: 'name',
						label: 'Name:'
					},
					{
						xtype: 'passwordfield',
						name: 'password',
						label: 'Password:'
					}			
				]
			},
			{
				xtype: 'button',
				text: 'Save User',
				ui: 'confirm',
				handler: function() {
					Ext.Msg.alert('Saving User', 'Pleas wait', Ext.emptyFn);
				}
			},
			
			
			
			{
				xtype: 'fieldset',
				title: 'Add Account',
				//instructions: 'Please enter your mail and password',
				
				items: [
					{
						xtype: 'textfield',
						name: 'accountname',
						label: 'Account Name:'
					},
					{

						xtype: 'selectfield',
						label: 'Project type:',
						options: [
							{text: 'Timeline based',  value: '1'},
							{text: 'Project based', value: '2'}
						]

					}			
				]
			},
			{
				xtype: 'button',
				text: 'Save Account',
				ui: 'confirm',
				handler: function() {
					Ext.Msg.alert('Saving Account', 'Pleas wait', Ext.emptyFn);
				}
			}			
			
			
			
			
			
		]
	}
});