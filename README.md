# Welke tech wordt in dit project gebruikt?
- NextJS (React framework)
- MUI (UI-toolkit)
- Emotion (SASS/CSS)
- Eslint (Code style)
- JSON-server (backend)

Je installeert als eerst de dependencies:
```
npm install
```

Om de applicatie te starten voer je de volgende commando uit:
```
npm start
```

De server start standaard op poort 3000. Dit is instelbaar via de environment variable "PORT".
De applicatie is dus standaard te bereiken via http://localhost:3000

NextJS + JSON-server
Ik wou graag gebruik maken van 1 URL. Ik heb dus JSON-server binnen NextJS geimplementeerd.

# Welke features zijn geimplementeerd?
- Huisstijl
- Mobile responsiveness
- Artiesten overzicht met zoekfilter
- Artiest detail pagina met alle nummers

# Hoe werkt de app?
Als je op de website terecht komt (http://localhost:3000) zie je meteen het artiesten overzicht.
Op deze pagina vindt je een titel welke ook het aantal artiesten weergeeft.
Daarnaast zie je een invoerveld waarmee je kan filteren op de artiesten met naam.
Wanneer je iets invult in dit veld, dan moet je op ENTER drukken om daadwerkelijk te filteren.
Dit is een bewuste keuze, zodat er niet teveel traffic naar de backend gaat.
Onder de filter zie je een lijst met alle artiesten. Wanneer je op een artiest klikt, kom je op de detail pagina terecht.
Op de detail pagina zie je de artiest met hoeveel liedjes deze heeft.
De liedjes zijn ook terug te vinden in een lijst.

# QA
Ik heb niet optimaal QA kunnen implementeren. Normaal gesproken werk ik met Jest, Mocha, Chai, Enzyme, Selenium.
Echter bij het implementeren van Enzyme kwam ik erachter dat er alleen adapters zijn voor React 16.
Ik maak gebruik van de laatste versie van NextJS en React, waardoor Enzyme geen mogelijkheid is.
Ik heb wel een test case gebouwd met Selenium. Om de Selenium test uit te voeren gebruik je de volgende commando:
```
npm run selenium
```

# Extra requirements
- Responsive applicatie
- Vang onbekende urls af in routing
- Nette error afhandeling backend calls
- Caching (minder backend calls, snellere performance laadtijd etc)

Het is niet per se een design pattern, maar heb ook gebruik gemaakt van smart & dumb components.
Qua performance heb ik ook gebruik gemaakt van React.memo, zodat niet bij elke letter die getypd wordt, de hele lijst met artiesten ook opnieuw rendered.
