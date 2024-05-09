const im = iframemanager();

im.run({
  onChange: ({ changedServices, eventSource }) => {
    if (eventSource.type === "click") {
      const servicesToAccept = [
        ...CookieConsent.getUserPreferences().acceptedServices["analytics"],
        ...changedServices,
      ];

      CookieConsent.acceptService(servicesToAccept, "analytics");
    }
  },
});

CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: "box inline",
      position: "bottom left",
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    functional: {},
    analytics: {},
    marketing: {},
  },

  language: {
    default: "en",
    autoDetect: "document",

    translations: {
      cs: {
        consentModal: {
          label: "Cookie Consent",
          title: "Potvrzení Souborů Cookies!",
          description:
            "Abychom mohli naše webové stránky přizpůsobit vašim požadavkům a preferencím, používáme soubory cookies.",
          acceptAllBtn: "Potvrdit vše",
          closeIconLabel: "Zamítnout vše a zavřít",
          acceptNecessaryBtn: "Zamítnout vše",
          showPreferencesBtn: "Spravovat nastavení",
          footer:
            '<a href="./ochrana-osobnich-udaju.html">Ochrana Osobních údajů</a>',
        },
        preferencesModal: {
          title: "Nastavení souborů cookies",
          acceptAllBtn: "Potvrdit vše",
          acceptNecessaryBtn: "Zamítnout vše",
          savePreferencesBtn: "Uložit nastavení",
          closeIconLabel: "Zavřít okno",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Jaké data chcete odesílat?",
              description:
                "Abychom mohli naše webové stránky přizpůsobit vašim požadavkům a preferencím, používáme soubory cookies. Níže zaklikněte, které soubory cookies chcete povolit.",
            },
            {
              title:
                'Nezbytné Cookies <span class="pm__badge">Vždy povolené</span>',
              description:
                "Tento typ Cookies je nezbytný pro správné fungování webových stránek. Bez těchto souborů cookies by webové stránky nefungovaly správně.",
              linkedCategory: "necessary",
            },
            {
              title: "Funkční Cookies",
              description:
                "Funkční cookies nám například umožňují zapamatovat si vaše nastavení jako je jazyk, preferované uspořádání nebo barvy, a to s cílem poskytnout vám personalizovanější služby.",
              linkedCategory: "functional",
            },
            {
              title: "Analytické Cookies",
              description:
                "Analytické cookies sledují způsob, jakým návštěvníci používají naše stránky, aniž by přímo identifikovaly jednotlivé návštěvníky.",
              linkedCategory: "analytics",
            },
            {
              title: "Marketingové Cookies",
              description:
                "Cílené cookies identifikují návštěvníky napříč různými webovými stránkami, aby společnosti mohly vytvořit zájmový profil návštěvníků a zobrazovat relevantní reklamy.",
              linkedCategory: "marketing",
            },
            {
              title: "Více Informací",
              description:
                'Pro více informací o fungování souborů Cookies navštivte <a class="cc__link" href="https://policies.google.com/technologies/cookies" target="__blank">Google Cookies Technology</a>.',
            },
          ],
        },
      },
      en: {
        consentModal: {
          label: "Cookie Consent",
          title: "Cookie Consent Confirmation!",
          description:
            "In order to tailor our website to your requirements and preferences, we use cookies.",
          acceptAllBtn: "Confirm all",
          closeIconLabel: "Reject all and close",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage settings",
          footer: '<a href="./privacy-policy.html">Privacy Policy</a>',
        },
        preferencesModal: {
          title: "Cookie settings",
          acceptAllBtn: "Confirm all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save settings",
          closeIconLabel: "Close window",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "What data do you want to send?",
              description:
                "In order to tailor our website to your requirements and preferences, we use cookies. Below, please select the cookies you wish to enable.",
            },
            {
              title:
                'Essential Cookies <span class="pm__badge">Always enabled</span>',
              description:
                "This type of cookies is necessary for the proper functioning of the website. Without these cookies, the website would not work properly.",
              linkedCategory: "necessary",
            },
            {
              title: "Functional Cookies",
              description:
                "Functional cookies, for example, allow us to remember your settings such as language, preferred layout, or colors, in order to provide you with more personalized services.",
              linkedCategory: "functional",
            },
            {
              title: "Analytical Cookies",
              description:
                "Analytical cookies track how visitors use our site without directly identifying individual visitors.",
              linkedCategory: "analytics",
            },
            {
              title: "Marketing Cookies",
              description:
                "Targeted cookies identify visitors across different websites so companies can create an interest profile of the visitors and display relevant ads.",
              linkedCategory: "marketing",
            },
            {
              title: "More Information",
              description:
                'For more information about how cookies work, visit <a class="cc__link" href="https://policies.google.com/technologies/cookies" target="__blank">Google Cookies Technology</a>.',
            },
          ],
        },
      },
      sk: {
        consentModal: {
          label: "Súhlas s cookies",
          title: "Potvrdenie súhlasu s cookies!",
          description:
            "Aby sme mohli našu webovú stránku prispôsobiť vašim požiadavkám a preferenciám, používame súbory cookies.",
          acceptAllBtn: "Potvrdiť všetko",
          closeIconLabel: "Odmietnuť všetko a zavrieť",
          acceptNecessaryBtn: "Odmietnuť všetko",
          showPreferencesBtn: "Spravovať nastavenia",
          footer:
            '<a href="./ochrana-osobnych-udajov.html">Ochrana osobných údajov</a>',
        },
        preferencesModal: {
          title: "Nastavenia súborov cookies",
          acceptAllBtn: "Potvrdiť všetko",
          acceptNecessaryBtn: "Odmietnuť všetko",
          savePreferencesBtn: "Uložiť nastavenia",
          closeIconLabel: "Zavrieť okno",
          serviceCounterLabel: "Služba|Služby",
          sections: [
            {
              title: "Aké údaje chcete odosielať?",
              description:
                "Aby sme mohli našu webovú stránku prispôsobiť vašim požiadavkám a preferenciám, používame súbory cookies. Nižšie si, prosím, vyberte, ktoré súbory cookies chcete povoliť.",
            },
            {
              title:
                'Nezbytné Cookies <span class="pm__badge">Vždy povolené</span>',
              description:
                "Tento typ cookies je nevyhnutný pre správne fungovanie webovej stránky. Bez týchto súborov cookies by webová stránka nefungovala správne.",
              linkedCategory: "necessary",
            },
            {
              title: "Funkčné Cookies",
              description:
                "Funkčné cookies napríklad umožňujú zapamätať si vaše nastavenia ako je jazyk, preferované usporiadanie alebo farby, s cieľom poskytnúť vám personalizovanejšie služby.",
              linkedCategory: "functional",
            },
            {
              title: "Analytické Cookies",
              description:
                "Analytické cookies sledujú spôsob, akým návštevníci používajú našu stránku, bez toho, aby priamo identifikovali jednotlivých návštevníkov.",
              linkedCategory: "analytics",
            },
            {
              title: "Marketingové Cookies",
              description:
                "Cieľové cookies identifikujú návštevníkov naprieč rôznymi webovými stránkami, aby spoločnosti mohli vytvoriť záujmový profil návštevníkov a zobrazovať relevantné reklamy.",
              linkedCategory: "marketing",
            },
            {
              title: "Viac informácií",
              description:
                'Pre viac informácií o fungovaní súborov cookies navštívte <a class="cc__link" href="https://policies.google.com/technologies/cookies" target="__blank">Google Cookies Technology</a>.',
            },
          ],
        },
      },

      pl: {
        consentModal: {
          label: "Zgoda na ciasteczka",
          title: "Potwierdzenie zgody na ciasteczka!",
          description:
            "Aby dostosować naszą stronę internetową do Twoich wymagań i preferencji, używamy plików cookie.",
          acceptAllBtn: "Zaakceptuj wszystko",
          closeIconLabel: "Odrzuć wszystko i zamknij",
          acceptNecessaryBtn: "Odrzuć wszystko",
          showPreferencesBtn: "Zarządzaj ustawieniami",
          footer:
            '<a href="./ochrona-danych-osobowych.html">Polityka prywatności</a>',
        },
        preferencesModal: {
          title: "Ustawienia plików cookie",
          acceptAllBtn: "Zaakceptuj wszystko",
          acceptNecessaryBtn: "Odrzuć wszystko",
          savePreferencesBtn: "Zapisz ustawienia",
          closeIconLabel: "Zamknij okno",
          serviceCounterLabel: "Usługa|Usługi",
          sections: [
            {
              title: "Jakie dane chcesz wysyłać?",
              description:
                "Aby dostosować naszą stronę internetową do Twoich wymagań i preferencji, używamy plików cookie. Poniżej wybierz pliki cookie, które chcesz włączyć.",
            },
            {
              title:
                'Niezbędne pliki cookie <span class="pm__badge">Zawsze włączone</span>',
              description:
                "Ten typ plików cookie jest niezbędny do prawidłowego funkcjonowania strony internetowej. Bez tych plików cookie strona nie działałaby prawidłowo.",
              linkedCategory: "necessary",
            },
            {
              title: "Funkcjonalne pliki cookie",
              description:
                "Funkcjonalne pliki cookie umożliwiają nam na przykład zapamiętanie Twoich ustawień, takich jak język, preferowane układy czy kolory, aby zapewnić Ci bardziej spersonalizowane usługi.",
              linkedCategory: "functional",
            },
            {
              title: "Analityczne pliki cookie",
              description:
                "Analityczne pliki cookie śledzą sposób, w jaki odwiedzający korzystają z naszej strony, nie identyfikując bezpośrednio poszczególnych użytkowników.",
              linkedCategory: "analytics",
            },
            {
              title: "Marketingowe pliki cookie",
              description:
                "Celowe pliki cookie identyfikują odwiedzających na różnych stronach internetowych, aby firmy mogły tworzyć profil zainteresowań odwiedzających i wyświetlać odpowiednie reklamy.",
              linkedCategory: "marketing",
            },
            {
              title: "Więcej informacji",
              description:
                'Aby uzyskać więcej informacji o działaniu plików cookie, odwiedź <a class="cc__link" href="https://policies.google.com/technologies/cookies" target="__blank">Technologia plików cookie Google</a>.',
            },
          ],
        },
      },
      de: {
        consentModal: {
          label: "Einwilligung in Cookies",
          title: "Bestätigung der Cookie-Einwilligung!",
          description:
            "Um unsere Webseite Ihren Anforderungen und Vorlieben anzupassen, verwenden wir Cookies.",
          acceptAllBtn: "Alles bestätigen",
          closeIconLabel: "Alles ablehnen und schließen",
          acceptNecessaryBtn: "Alles ablehnen",
          showPreferencesBtn: "Einstellungen verwalten",
          footer: '<a href="./datenschutz.html">Datenschutzrichtlinie</a>',
        },
        preferencesModal: {
          title: "Cookie-Einstellungen",
          acceptAllBtn: "Alles bestätigen",
          acceptNecessaryBtn: "Alles ablehnen",
          savePreferencesBtn: "Einstellungen speichern",
          closeIconLabel: "Fenster schließen",
          serviceCounterLabel: "Dienst|Dienste",
          sections: [
            {
              title: "Welche Daten möchten Sie senden?",
              description:
                "Um unsere Webseite Ihren Anforderungen und Vorlieben anzupassen, verwenden wir Cookies. Bitte wählen Sie unten die Cookies aus, die Sie aktivieren möchten.",
            },
            {
              title:
                'Notwendige Cookies <span class="pm__badge">Immer aktiviert</span>',
              description:
                "Diese Art von Cookies ist notwendig für das ordnungsgemäße Funktionieren der Webseite. Ohne diese Cookies würde die Webseite nicht richtig funktionieren.",
              linkedCategory: "necessary",
            },
            {
              title: "Funktionale Cookies",
              description:
                "Funktionale Cookies ermöglichen es uns beispielsweise, Ihre Einstellungen wie Sprache, bevorzugtes Layout oder Farben zu speichern, um Ihnen personalisiertere Dienste anzubieten.",
              linkedCategory: "functional",
            },
            {
              title: "Analytische Cookies",
              description:
                "Analytische Cookies verfolgen, wie Besucher unsere Seite nutzen, ohne einzelne Besucher direkt zu identifizieren.",
              linkedCategory: "analytics",
            },
            {
              title: "Marketing-Cookies",
              description:
                "Gezielte Cookies identifizieren Besucher über verschiedene Webseiten hinweg, sodass Unternehmen ein Interessenprofil der Besucher erstellen und relevante Anzeigen anzeigen können.",
              linkedCategory: "marketing",
            },
            {
              title: "Weitere Informationen",
              description:
                'Für weitere Informationen darüber, wie Cookies funktionieren, besuchen Sie <a class="cc__link" href="https://policies.google.com/technologies/cookies" target="__blank">Google Cookies Technology</a>.',
            },
          ],
        },
      },
    },
  },
});
