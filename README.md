# News Frontend

Hellow clean code consumers, looking for an example of atomic design and good practices in react and typescript? Look no more

## What is this ?

This is a section component that showcases news in cards, You can archive them and delete them

## Ussage

`npm install` before all don't forget about the basics

create a .env file and this environment variable

`REACT_APP_API_URL=http://localhost:3004`

- ` npm run start` and you now have a webpack dev server

## What technologies can I find in this proyect?

That's a very good question dear reader, usually I just wanna go with me most simple and lightweight stack possible when developing.

### For code quality

- **Eslint** static code analysis tool to find follow best practices and find
- **Jest** this is the go to for unitary and integration testing , very handy with react-testing-library
- **TypeScript** all the power of strong typing in JavaScript , no more words needed

### Main stack

- **React** The king of front-end , unopinionated with a package for everything
- **Tailwind** This is by far the best tool I used for styling, you have an utility class for any css property , inline css so you don't have to worry about extra css files, speeds up the workflow and you have consistent units to create a cohesive design with tailored style for components.
- **TypeScript** Since I use Typescript I reduced my chrome devtools debugging by a lot, it simply makes life easier.

## Folder structure

Pretty basic here just a folder for each component and nested atomic components inside the more complexes ones
