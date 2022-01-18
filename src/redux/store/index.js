import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers"; 

// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware];

function configureStore(preloadedState) {
//   const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    preloadedState,
    // composeEnhancers(applyMiddleware(...middlewares))
  );

//   sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("../reducers/index", () => {
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store = configureStore();

// const persistor = persistStore(store);

export { store };