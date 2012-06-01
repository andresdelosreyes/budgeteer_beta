Ext.define('login.view.EnterExpense', {
	extend: 'Ext.form.Panel',
	xtype: 'EnterExpense',
	
	requires: [
		'Ext.field.Select',
		'Ext.field.Number',
		'Ext.field.DatePicker',
		'Ext.field.Hidden'
	],
	config: {
		title: 'Expense Entry',
		iconCls: 'compose',
		cls: 'home',
		scrollable: true,
		styleHtmlContent: true,
		items: [
			{
				xtype: 'fieldset',
				//title: 'Enter Expense',
				//instructions: 'Please enter your mail and password',
				
				items: [
					{
						xtype: 'datepickerfield',
						destroyPickerOnHide: true,
						name: 'date',
						label: 'Expense Date:',
						value: new Date(),
						picker: {
							yearFrom: 1990
						}
					},
					{
						xtype: 'numberfield',
						name: 'amount',
						minValue: 18,
						label: 'Amount:'
					},
					{
						xtype: 'selectfield',
						label: 'Category:',
						options: [
							{text: 'Food',  value: '1'},
							{text: 'Gas', value: '2'},
							{text: 'Clothes',  value: '3'},
							{text: 'Entertainment', value: '4'},
							{text: 'Utilities',  value: '5'},
							{text: 'Rent', value: '6'},
							{text: 'Other', value: '99'}

						]
					},					
					{
						xtype: 'hiddenfield',
						name: 'DescriptionText',
						id: 'DescriptionId',
						value: 'abc'
					},
					{
						xtype: 'button',
						text: 'Enter Description',
						ui: 'confirm',
						handler: function() {
							if (!this.overlay) {
								this.overlay = Ext.Viewport.add({
									xtype: 'panel',
									id: 'modalPanel',
									modal: true,
									hideOnMaskTap: true,
									showAnimation: {
										type: 'popIn',
										duration: 250,
										easing: 'ease-out'
									},
									hideAnimation: {
										type: 'popOut',
										duration: 250,
										easing: 'ease-out'
									},
									centered: true,
									width: Ext.os.deviceType == 'Phone' ? 260 : 400,
									height: Ext.os.deviceType == 'Phone' ? 220 : 400,
									styleHtmlContent: true,
									/*
									html: '<p>This is a modal, centered and floating panel. hideOnMaskTap is true by default so ' +
										'we can tap anywhere outside the overlay to hide it.</p>',
									*/
									items: [
										{
											docked: 'top',
											xtype: 'toolbar',
											title: 'Overlay Title'
										},
										{
											xtype: 'textareafield',
											name: 'description',
											id: 'description',
											label: 'Description:',
											placeHolder : 'Enter a description please...'
										},
										{
											xtype: 'button',
											text: 'Save',
											ui: 'confirm',
											handler: function() {
												var value = this.getParent().getItems().items[1].getValue();
												this.getParent().hide();												
												var temp = this.getParent().getParent().getActiveItem().down('#DescriptionId');
												temp.setValue(value);
												//console.log(temp);
											}
										},
										{
											xtype: 'button',
											text: 'Cancel',
											ui: 'decline',
											handler: function() {
												this.getParent().hide();
											}
										}										
										
										
									],
									scrollable: true
								});
							}

							this.overlay.show();
						}
						
						//////////////////////////////////////////////////////////
						/*
						handler: function() {
							var config = {xtype: 'textarea', value: 'test'};
							Ext.Msg.prompt("Enter the Description", "", function(btn, text, config){
								if (btn == 'ok'){
									// process text value...
									//var temp = this.up('EnterExpense').getItems();
									var temp = this.up('EnterExpense').down('#DescriptionId');
									temp.setValue(text);
									//form.down('DescriptionText')[0];
									//userId.setValue(text);

								}
							}, this, 4, null, { autoCapitalize : true, placeHolder : 'First-name please...' });
							//var morehelp = this.down('DescriptionText')[0];
							//morehelp.setValue(help);
							
						}
						*/
						///////////////////////////////////////////////////////
						
					}					

					/*
					{
						xtype: 'textareafield',
						name: 'description',
						label: 'Description:'
					}
					*/
					//add camera here
				]
			},
			{
				xtype: 'button',
				text: 'OK',
				ui: 'confirm',
				handler: function() {
					var values = this.up('EnterExpense').getValues();
					console.log(values);
					Ext.Msg.alert('Saving Expense', "", Ext.emptyFn);
				}
			}			
			
		]
	}
});
