## React useWebWorker hook

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Author: `Andrzej Kowal`.

## Available Scripts

To check how it actually works - just run `yarn start` or `npm start`. After open Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

There also will be some console.log calls, som open the browser console too.

## What's going on?

The article:
https://dev.to/sumankalia/web-workers-in-reactjs-4bc7

It's an example (basic) implementation of hook `useWebWorker` which can be used to run worker inside of the React component. Hook also will handle `running` state, `error` and the final worker execution `result`.

Worker script: `src/worker/script.ts`.

useWebWorker hook: `src/worker/useWebWorker.ts`

Helpful utility for creating new Worker instance: `src/worker/webWorker.ts`

There are also some pure components in `components` directory. They only display some data based on props.

Everything connected in single place: `src/App.tsx`

Let me know what do you think in the comments here:
https://dev.to/sumankalia/web-workers-in-reactjs-4bc7
