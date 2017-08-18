Source: http://tutorialzine.com/2016/07/learn-typescript-in-30-minutes/

How to setup and run in Visual Studio Code?
https://code.visualstudio.com/docs/languages/typescript

Setup
1. install typescript globally: npm install -g typescript
2. Create tsconfig.json:
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "sourceMap": true
    }
}

Run
1. Translate ts to js using Tasks > Run Build Task > tsc: build tsconfig.json
2. Optionally ctrl-shift-b after setting tsc: build tsconfig.json as Default Build Task
3. Run js with Start Debugging

6 onwards are my own