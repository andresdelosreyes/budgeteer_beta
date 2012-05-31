Ext.define('login.view.Login', {
	extend: 'Ext.form.Panel',
	xtype: 'Loginform',
	
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Email',
		'Ext.field.Password',
		'Ext.NavigationView'
	],
	config: {
		title: 'Login',
		iconCls: 'user',
		//url: './resources/login.php',
		url: 'http://andressencha.herobo.com/login/resources/php/login.php',
		cls: 'panelBackground',
		items: [
			{
				xtype: 'fieldset',
				title: 'Login',
				instructions: 'Please enter your mail and password',
				
				items: [
					{
						xtype: 'emailfield',
						name: 'username',
						label: 'Email:'
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
				text: 'send',
				ui: 'confirm',
				handler: function() {
					//gets the values from the form
					var values = this.up('Loginform').getValues();
					localStorage.setItem("loginstatus", "true");
					localStorage.setItem("username", values.username);					
					var ob = login.view.HomeP.create({
						scrollable: true
					});
					Ext.Viewport.add(ob);
					ob.show();
					this.up('Loginform').destroy();								
					
					
					//
					/*
					Ext.Ajax.request({
						//url: './resources/php/login.php',
						url: 'http://andressencha.herobo.com/login/resources/php/login.php',
						method: 'post',
						params: values,
					scope: this, 
						failure : function(response){
							 console.log(response.responseText);
							 Ext.Msg.alert('Connection error', 'Try Again', Ext.emptyFn);
						},
						success: function(response, opts) {
							var responseText = response.responseText;
							if (responseText === 'success'){
								localStorage.setItem("loginstatus", true);
								localStorage.setItem("username", values.username);
								//this.up('Loginform').Home.show();
								
								var ob = login.view.HomeP.create({
									scrollable: true
								});
								
								Ext.Viewport.add(ob);
								ob.show();
								this.up('Loginform').destroy();								

							}
							else {
								console.log(response.responseText);
								Ext.Msg.alert('Login failed', 'Try Again', Ext.emptyFn);
							}
						}
					});
					//
					*/
				}
			}
		]
	}
});