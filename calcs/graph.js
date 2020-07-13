const Graph = require('node-dijkstra');
const { Router } = require('express');

const cost_map = (source, destination) => {
    const cost = new Graph( {
        // BUS NO. 403
        'dwarka_B': {"rajori_MB": 5},
        'rajori_MB': {"NSP": 2,"dwarka_B":2,
                   "moti nagar_B":3, "mayapuri":3},
        'moti nagar_B': {'rajori_MB': 3, 
                         'jhande vala_B': 2},
        'jhande vala_B': {'moti nagar_B': 2, 
                          'rajiv chowk_B': 2},
        'rajiv chowk_B': {'jhande vala_B': 2, 
                          'mandi house_MB': 5,
                           CS_B:2, 'chandni chowk_MB':1},
        'mandi house_MB': {'rajiv chowk_B':5,
                          'indraprasth_B': 2},
        'indraprasth_B': {'mandi houe_MB': 2},
    
        // METRO RITHALA - SHAHEED SHTAL
        rithala: {NSP: 3},
        NSP: {'shalimar bagh': 2, rithala: 3,
               inderlok: 2, rajori_MB: 2},
        inderlok: {NSP: 2, 'shastri park': 2},
        'shastri park': {inderlok: 2, 'tiz hazari': 2},
        'tiz hazari': {'shastri park': 2,
                       'kashmiri gate_MB':3},
        'kashmiri gate_MB': {'tiz hazari': 3,
                          'civil lines_B':2, shahdra: 3, 'chandi chowk_MB': 2,
                           indraprasth_MB:10},
        shahdra: {'kashmiri gate_MB': 3,'dilshad garden':2},
        'dilshad garden': {shahdra: 2,'shaheed shtal':3},
    
        // BUS NO. 306
        'samayapur badli_B': {'azad nagar_MB':3},
        'azad nagar_MB': {'samayapur badli_B':3,
                         'mukund pur':2,
                         'vishwa vidhyalay_B':3,
                         'majis park':3},
        'vishwa vidhyalay_B': {'azad nagar_B':3, 
                               'civil lines_B':2},
        'civil lines_B': {'vishwa vidhyalay_B':2,
                          'kashmiri gate_MB':2},
        'kashmiri gate_MB': {'civil lines_B':2, 
                           'chandni chowk_MB':2,
                           'tiz hazari':3, shahdra:3, indraprasth_MB:10},
        'chandni chowk_MB': {'kashmiri gate_MB':2, 
                          'rajiv chowk_B':1},
        'rajiv chowk_B': {'chandni chowk_MB':1,
                          'jhande vala_B':2,
                          'mandi house_MB':5, CS_B:2},
        CS_B: {'rajiv chowk_B':2,indraprasth_MB:1, 
                saket_B:3},
        saket_B: {CS_B:3},
            
        // METRO KG TO MOHAN ESTATE
        'kashmiri gate_MB': {indraprasth_MB:10,
                            'civil lines_B':2, 
                            'chandni chowk_MB':2,
                            'tiz hazari':3, shahdra:3},
        indraprasth_MB: {'kashmiri gate_MB':10, 
                        'mandi house_MB':2, 
                        'mohan estate':5},
    
        // METRO MAYAPURI TO MUKUND PUR
        mayapuri: {rajori_MB:3},
        rajori_MB: {"NSP": 2,"dwarka_B":2,
                    "moti nagar_B":3, "mayapuri":3},
        NSP: {'shalimar bagh': 2, rithala: 3,
               inderlok: 2, rajori_MB: 2},
        'shalimar bagh': {NSP: 2, 'majis park':2},
        'majis park': {'shalimar bagh':2, 
                       'azad nagar_MB':3},
        'azad nagar_MB': {'samayapur badli_B':3,
                         'mukund pur':2,
                         'vishwa vidhyalay_B':3,
                         'majis park':3},
    });
    
      return cost.path(source, destination, {cost:true})
}


module.exports.cost_map = cost_map;
