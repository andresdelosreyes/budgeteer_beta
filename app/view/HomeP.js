Ext.define('login.view.HomeP', {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    config: {
        tabBarPosition: 'bottom',

        items: [
			{
				xtype: 'splash',
			},
			{
				xtype: 'profile',
			},
			{
				xtype: 'EnterExpense',
			},
			{
				xtype: 'ExpenseList',
			}
        ]
    }
});