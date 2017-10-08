import {div} from '@cycle/dom'
import xs from 'xstream'

const initialState = ({
	listData: [1,"hello"]
});

var store = {State: initialState};

export const App = sources => {
  const sinks = {
    DOM: Render(store.State)
  }
  return sinks
}

const Render = state =>
{
  const vtree$ = xs.of(false).map(a => div('hello'))

  return vtree$;
};



