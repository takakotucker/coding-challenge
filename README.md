Requirement
- node12

This repository contains two sub folders:

## API [ /api ]

Contains a basic Apollo server implementation intended to serve the document data. This will need to be started before the UI.

1. yarn install
1. cd api
2. yarn build (copies document data into a local json array)
3. yarn start - starts a graphQL playground - click docs panel on right to view schema

## UI [ /ui ]

Contains a simple React app that renders data from the graphql interface.

1. yarn install
2. cd ui
3. yarn start

