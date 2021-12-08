import { combineReducers } from 'redux';
import { customerReducer } from './customers/customerReducer';
import { depositsReducer } from './deposits/depositsReducer';
import { documentsReducer } from './documents/documentsReducer';
import { downpaymentsReducer } from './downpayments/downpaymentsReducer';
import { lendorsReducer } from './lendors/lendorsReducer';
import { locationReducer } from './location/locationReducer';
import { orderReducer } from './orders/orderReducer';
import { financeRequestsReducer } from './financerequests/financeRequestsReducer';
import { saleReducer } from './sales/saleReducer';
import { productReducer } from './products/productReducer';
import { tredeinsReducer } from './tredeins/tredeinsReducer';
import {  userReducer } from './users/userReducer';

export const rootReducer = combineReducers({
    userState: userReducer,
    orderState: orderReducer,
    financeRequestState: financeRequestsReducer,
    saleState: saleReducer,
    customerState: customerReducer,
    productState: productReducer,
    locationState: locationReducer,
    depositsState: depositsReducer,
    tredeinsState:tredeinsReducer,
    lendorsState:lendorsReducer,
    documentsState: documentsReducer,
    downpaymentsState:downpaymentsReducer
    
})