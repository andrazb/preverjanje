# Preverjanje usposobljenosti
Rešitev je v podmapah **angular-app**, **hello_java** in **hello_node**. 
Pri obeh REST servisih je uporabljen samopodpisani certifikat in je pri testu potrebno v brskalniku omogočiti izjemo oz. curl zagnati s parametrom -k (npr. `curl -k https://localhost/hello`).

## hello_java
 - REST servis napisan v Javi z uporabo Spring Boot frameworka
 - uporabljena verzija Java 11
 - omogočen je https
 - zapakirana Angular aplikacija je v podmapi *static* in je po zagonu dosegljiva na *https://localhost*
 - zagon z ukazom `mvn spring-boot:run`

## hello_node
 - REST servis napisan v node.js
 - omogočen je https
 - instalacija potrebnih paketov z `npm install`
 - zapakirana Angular aplikacija je v podmapi *dist* in je po zagonu dosegljiva na *https://localhost*
 - zagon aplikacije z `node index.js`

## angular-app
- web aplikacija narejena z uporabo Angular 12
- zagon z `ng serve`
- z `ng build` je bil narejen paket, ki predstavlja statično spletno stran in se je iz mape *dist/angular-app* prenesel v oba projekta za REST servisa
