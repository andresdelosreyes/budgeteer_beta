Ext.define('login.view.HomeP', {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    config: {
        tabBarPosition: 'bottom',

        items: [
			{
				xtype: 'BudgetList',
			},
			{
				xtype: 'profile',
			},
			{
				xtype: 'ExpenseList',
			},			
			{
				xtype: 'EnterExpense',
			}
        ]
    }
});