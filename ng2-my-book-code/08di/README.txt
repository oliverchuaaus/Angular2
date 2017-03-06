Create component that has a button:
1. that calls MyService
2. that calls MyService2, which is an alias of MyService, check identical instance
3. that calls MyService2, which uses existing MyService, check identical instance

4. that calls MyParamService, that accepts string param in constructor
5. that calls MyValueService, that accepts string param in constructor, and string param defined separately

6. that calls SmallService if viewport < 800 pixels and LargeService otherwise.
Math.max(document.documentElement.clientWidth,window.innerWidth || 0);
service should change dynamically when window is resized and button clicked.

Create a component:
1. that is a part of a separate module
2. import module and component into the original component  

This project shows how to:
1. implement dependency injection by declaring in provider, using constructor to pass in dependency
2. 