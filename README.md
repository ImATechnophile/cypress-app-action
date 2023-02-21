# 1. What do Cypress's app actions mean?
Instead of interacting with the UI elements, the app actions are directly dispatched utilising the internal logic of the programme.

# 2. Why is Cypress in need of App Actions?

Bypassing the interaction between UI elements, it speeds up and improves the stability of application testing.

# 3. When do we need to use Cypress's App Actions?

We can use Cypress's App Actions if the only thing that has to be tested is the functionality.

We don't need to employ App Actions if the requirement is to do e2e testing. Here, UI interaction is necessary.

# 4. Drawback:

The internal logic of the application must be understood as a drawback. End-to-end test automation is normally carried out by the QA team without the involvement of development.

We require knowledge of the function/method names, to put it simply.

# test-todomvc-using-app-actions
## Steps

Each step is a Git tag. You can check out particular tag, install dependencies and run application and tests. Usually it would be:

```shell
git clone <tag>
npm install
npm start
# from another terminal
npm run cypress
```
