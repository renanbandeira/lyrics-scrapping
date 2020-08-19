# lyrics-scrapping
Scrapping Lyrics from letras.mus.br made with node and express

This API was made to deal with CORS on letras.mus.br

# API
GET with url query param:
`server/?url=https://www.letras.mus.br/backstreet-boys/165570/`
Returns 200
Response: DOM body from https://www.letras.mus.br/backstreet-boys/165570

# Instalation
1- Clone the repository
2- Run `yarn install`
3- Run `yarn start` and test the GET method
