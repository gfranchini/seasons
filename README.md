This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


# Dockerizing

### Building the container and running it

```bash
$ docker build -t sample:dev .

$ docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev
```
