Ext.define('login.store.Grid', {
    extend : 'Ext.data.Store',

    requires : [
        'login.model.Grid'
    ],

    config : {
        model : 'login.model.Grid',
        data  : [
            { date : '05/30', category: 'Clothes',   amount : 10.00  },
            { date : '12/31', category: 'Entertainment',  amount : 2.34  },
            { date : '01/01', category: 'Food', amount : 0.03  },
            { date : '02/10', category: 'Utilities', amount : 44.32  },
            { date : '05/31', category: 'Clothes', amount : 99.99  },
            { date : '08/14', category: 'Food',  amount : 543.3  },
            { date : '08/21', category: 'Clothes', amount : 2234.00  },
            { date : 'Jan 05', category: 'Utilites', amount : 8.09  },
            { date : 'Sep 17', category: 'Entertainment', amount : 93.12  },
            { date : 'Nov 14', category: 'Entertainment',  amount : 10.33 }
        ]
    }
});