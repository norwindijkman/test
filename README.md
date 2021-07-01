Testopdracht 01 juli 2021

## Beginnen

Dit is een next.js website. Je kan de volgende cli tools gebruiken:

```bash
yarn # install website dependencies
yarn dev # run on localhost
yarn build # build website
yarn export # export website
```

Open [http://localhost:3000](http://localhost:3000) met je browser om de beginnen.

## Plan van aanpak

Je kan de git commit messages lezen om het plan van aanpak te volgen. Hier staan de stappen in het kort beschreven:

1. Lees de opdracht goed en bekijk de gegeven resources.
2. Aangezien het toegestaan is om een framework te gebruiken heb ik ervoor gekozen om een Next.js website te beginnen met `yarn create next-app`
3. Allereerst heb ik de video data geladen in de website. Aangezien ik niet verwacht dat de videos erg vaak en snel veranderen en omdat de website daar sneller van wordt, heb ik ervoor gekozen om de video API data op te halen tijdens build tijd met getStaticProps.
4. De videos worden gerenderd op de website.
5. Voordat ik alles mooi ga stijlen, wil iik eerst testen of de videos goed weergeven op verschillende browsers.
6. Na het testen van de videos worden de eerste belangrijkste css styles toegevoegd.
7. Om de website nog mooier te maken, en als er nog tijd over is, worden er nog extra styles en functies toegevoegd aan de website.
8. De webpage wordt nog een keer getest. En eventueel verbeterd.
