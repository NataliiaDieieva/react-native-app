// outsource dependencies
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// local dependencies
import reducers from './reducers';
import saga from './sagas';
import { navMiddleware } from './navigation';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, applyMiddleware(sagaMiddleware, navMiddleware));

sagaMiddleware.run(saga);
