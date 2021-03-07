Questions:

1. export const selectBought = (state) =>
   state.items.filter((item) => !item.isRecived);

export const selectRecived = (state) =>
state.items.filter((item) => item.isRecived);

they pretty much do the same thing.
is it better to have 2 different selectors that are used by 2 different routes
or 1 selector that recives a flag according to route?

2. how to make data persistent between routes change?

3. in fetchCurrencyRate I am trying to catch errors, but the catch doesn't work, only the try block.

4.The switch button seems a bit too much, not sure

Todos:

1. add navbar to go from "/list" to "/recived" and back => done
   1. make it visualy different when you navigate
   2. try to make the store data persistent in local storage.
2. create 2 tabs in "/list" view
3. create Card component to show item details
