# Getting Practice with Test-Driven Development

"Write out tests for the features you want built!"

## End-to-End 
### Outside-In 

E2E tests involve multiple assertions. Because they test EACH assertion EVERY time, they can be slow and cumbersome, BUT they are an excellent way to confirm all of the pieces of the Component Tests (about to get to that!) have already passed individually.

## Component Tests
### Inside-Out

These tests are an excellent starting point when you begin implementing features in a component-based structure for your application. They involve singular assertions for each test, meaning they are quick and fantastic for specific functionality confirmation. 

## So how does this all fit together?

Using Component Tests and E2E we can verify each feature works AND ensure the application as a whole is working properly; if everything is playing nicely together, we can have full coverage in our testing!

## Okay, but why does that matter?

Building and maintaining an application can be extremely involved and can sometimes become difficult to juggle. Using TDD, we can make sure from the very beginning that we don't have needless features AND that our user's experience is ideal. Our design is inherently driven by how we approach testing of each feature. Pretty neat, yeah? We can keep our code from turning into an amorphous monster by keeping things minimal and, wouldn't you know it, our app can be refactored later and go live without tedious manual tests or long delays. 

### I can't think of a reason NOT to use TDD in applications, can you?
