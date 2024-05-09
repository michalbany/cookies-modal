# Nové Cookies

##### Autor: Michael Bany @marf.cz | 2024

Tento repozitář obsahuje základní implementaci souhlasu s cookies pro webové stránky. Využívá externí knihovny `cookieconsent[v3.0.0]` a `iframemanager[v1.2.5]` pro správu cookies a iframe obsahu. Poslední verze by měla podporovat posílání dat Google.
> Jedná se o opravu od změny zákona v Evropské únii v roce 2024.

## Důležité Upozornění!
Tento kód nebyl prozatím testovaný v živém prostředí. Proužívejte s rozvahou.

## Soubory

Repositář obsahuje tyto soubory:

- `index.html` - Hlavní HTML soubor, který zahrnuje integraci cookie souhlasu, následné podmínky pro scripty a tlačítko pro změnu nastavení cookies.
- `Cookies.js` - JavaScriptový soubor, který obsahuje logiku pro inicializaci a správu souhlasu s cookies.

## Jak Používat

Repozitář byl zpracován tak, aby byl flexibilní pro různé typy webů. Nastavení zobrazení je možné upravit v `javascriptovém souboru`. Pro konkrétní projekt bude třeba upravit `texty` případně `jazykové mutace`, které lze implementovat přímo v inicializaci. 

Soubor obsahuje základní jazykové mutace.


| Zkratka | Jazyk                |
| ------- | -------------------- |
| en      | **Angličtina** (Výchozí) |
| cs      | **Čeština**          |
| sk      | **Slovenština**      |
| pl      | **Polština**         |
| de      | **Němčina**          |


1. **Stáhněte Soubor `Cookies.js`:** Nejprve si stáhněte JavaScriptový soubor, který vložte do složky s JavaScriptem v projektu.
2. **Přidejte odkazy:** Do hlavní stránky webu (zpravidla index.html/php nebo @layout.latte) přidejte odkazy pro externí knihovny. Propojte zároveň i vložený JavaScriptový soubor v závislosti na struktuře vašeho projektu.
3. **Nastavte podmínky**: Pro jednotlivé scripty je nutné nastavit podmínky v závislosti na povolených cookies. Příklad použití je v `index.html`.
3. **Modifikace a Testování:** Implementujte vlastní nastavní, buď podle zakomentovaných částí kódu nebo podle dokumentace knihovny. Otestujte funkčnost a máte hotovo.

## Důležité Odkazy

- **Dokumentace:** Pro podrobné informace a pokyny k implementaci a konfiguraci navštivte oficiální dokumentaci [zde](https://cookieconsent.orestbida.com/).
- **Playground:** Pro experimentování s různými nastaveními a konfiguracemi cookie souhlasu využijte [playground](https://playground.cookieconsent.orestbida.com/).

## Poděkování

Tento projekt využívá knihovny:
- `cookieconsent` od [orestbida](https://github.com/orestbida/cookieconsent)
- `iframemanager` od [orestbida](https://github.com/orestbida/iframemanager)

Speciální poděkování autorům těchto knihoven za poskytnutí nástrojů pro lepší správu souhlasu s cookies.
