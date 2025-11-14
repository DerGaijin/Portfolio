const Content = {
    GER: {
        Header: {
            PreTitle: "Hallo, ich bin",
            Title: "DerGaijin",
            SubTitle: "Ein Software Entwickler & System Administrator",
            Navigation: ["Lebenslauf", "Fähigkeiten", "Arbeitsprojekte", "Hobby Projekte", "Tech Stack", "Change Language"],
            Tag: "GER",
        },
        Timeline: [
            {
                Label: "Unreal Engine",
                Icon: "fa-gamepad",
                Time: "Februar 2014",
                Text: "Schon in jungen Jahren begeisterten mich Videospiele - vor allem die Frage, wie sie im Inneren funktionieren. Diese Neugier führte dazu, dass ich begann, mich intensiv mit der Unreal Engine zu beschäftigen und eigene Projekte umzusetzen.",
            },
            { Label: "C++", Icon: "fa-square-binary", Time: "April 2015", Text: "Mit der Zeit wuchs der Wunsch, die technischen Hintergründe noch besser zu verstehen. Daher brachte ich mir C++ bei und erweiterte so mein Wissen in der Softwareentwicklung und Spieleprogrammierung." },
            {
                Label: "Ausbildung",
                Icon: "fa-graduation-cap",
                Time: "Juli 2023",
                Text: "Mein Interesse wurde zu einer beruflichen Leidenschaft: 2023 schloss ich erfolgreich meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung ab. Während dieser Zeit konnte ich meine Kenntnisse in Programmierung, Softwaredesign und Projektarbeit deutlich vertiefen.",
            },
            {
                Label: "Lasertag",
                Icon: "fa-gun",
                Time: "September 2024",
                Text: "Nach meiner Ausbildung begann ich einen Nebenjob in einer Lasertag-Halle, wo ich mich um technische Abläufe sowie die Pflege und Weiterentwicklung der Website kümmere. Dabei kann ich meine IT-Kenntnisse in einem praktischen Umfeld einbringen.",
            },
            { Label: "Praktikum", Icon: "fa-briefcase", Time: "März 2025", Text: "Zur weiteren beruflichen Entwicklung absolvierte ich ein Praktikum bei der Absolute Software GmbH, wo ich wertvolle Praxiserfahrungen im Bereich Softwareentwicklung sammeln konnte." },
        ],
        Skills: [
            {
                Label: "Asperger Autismus",
                Text: "Mein Asperger-Autismus ermöglicht es mir, komplexe Sachverhalte auf eine besondere Weise zu erfassen und zu strukturieren. Ich habe ein stark ausgeprägtes logisches und analytisches Denken, erkenne Muster und Zusammenhänge oft schneller als andere und kann mich außergewöhnlich tief in ein Thema einarbeiten. Durch meine Inselbegabung besitze ich die Fähigkeit, mich intensiv und über längere Zeit auf ein Fachgebiet zu konzentrieren, wodurch ich in meinem Interessensbereich sehr präzise, ausdauernd und leistungsfähig bin. Diese Eigenschaften helfen mir besonders in der Anwendungsentwicklung, da ich komplexe Probleme systematisch analysiere und kreative, technisch saubere Lösungen finde.",
            },
            {
                Label: "Autodidaktisches Lernen",
                Text: "Ich habe früh gelernt, mir neues Wissen selbstständig anzueignen. Schon in jungen Jahren habe ich mir das Programmieren eigenständig beigebracht - aus Neugier, Herausforderung und Spaß am Lernen. Seitdem nutze ich diese Fähigkeit kontinuierlich, um mich in neue Themen einzuarbeiten, Probleme kreativ zu lösen und meine Kompetenzen eigenverantwortlich weiterzuentwickeln. Diese Lernfähigkeit hilft mir, mich schnell an neue Technologien, Tools oder Arbeitsweisen anzupassen und selbstständig Fortschritte zu erzielen.",
            },
            {
                Label: "Motiviert",
                Text: "Ich zeichne mich durch eine hohe Eigenmotivation und Zielorientierung aus. Herausforderungen sehe ich als Gelegenheit, mein Können unter Beweis zu stellen und weiterzuentwickeln. Diese innere Antriebskraft ermöglicht es mir, auch bei komplexen Aufgaben fokussiert und engagiert zu bleiben. Durch meine Motivation behalte ich stets den Überblick, arbeite effizient auf Ergebnisse hin und trage aktiv zum Fortschritt von Projekten bei.",
            },
        ],
        WorkProjects: [
            {
                Label: "Carrerabahn Gedankensteuerung",
                Text: "Mit der Carrera-Bahn Gedankensteuerung wird Kindheitserinnerung auf futuristische Weise neu erfunden. Dieses Projekt ermöglicht es, eine Carrera-Bahn nicht mit dem klassischen Handregler, sondern durch Gedankensteuerung zu bedienen. Über ein EEG-Headset werden Gehirnströme gemessen und in Echtzeit in Steuersignale umgewandelt, die die Geschwindigkeit der Fahrzeuge beeinflussen. Das Ergebnis: Ein faszinierendes Zusammenspiel aus Neurowissenschaft, Signalverarbeitung und Embedded Systems - und ein Schritt in Richtung Mensch-Maschine-Interaktion der Zukunft.",
                Tags: ["C#"],
            },
            {
                Label: "Verkehrssimulation",
                Text: "Die Verkehrssimulation ist ein Softwareprojekt zur Modellierung und Analyse des Straßenverkehrs. Sie simuliert das Verhalten von Fahrzeugen, Ampelschaltungen und Verkehrsteilnehmern in einer virtuellen Umgebung. Ziel ist es, Verkehrsflüsse zu visualisieren, Engpässe zu erkennen und die Effizienz von Verkehrssteuerungen zu verbessern.",
                Tags: ["C++", "Unreal Engine"],
            },
            {
                Label: "Multimodaler Chatbot",
                Text: "Der multimodale Chatbot unterstützt Kundinnen und Kunden im Baumarkt bei der Artikelsuche. Über Sprachbefehle können Produkte einfach abgefragt werden - ganz ohne Tippen oder Bildschirm. Dank integrierter Gesichtserkennung erkennt der Chatbot wiederkehrende Besucher und kann sie individuell ansprechen oder frühere Suchanfragen berücksichtigen. So entsteht ein intuitives, persönliches und modernes Einkaufserlebnis direkt im Markt.",
                Tags: ["Python"],
            },
            {
                Label: "Schwarzes Brett",
                Text: "Das Schwarze Brett dient als zentrale Informationsplattform für interne Mitteilungen und Aushänge. Hier werden aktuelle Ankündigungen, wichtige organisatorische Informationen sowie Hinweise zur Belegschaft und Vertretungen veröffentlicht.",
                Tags: ["HTML", "CSS", "Javascript"],
            },
            {
                Label: "Lasertag Webseite",
                Text: "Diese Webseite wurde für unsere Lasertag-Arena erstellt, um Besucher schnell und übersichtlich über Angebote, Öffnungszeiten und Preise zu informieren. Sie bietet eine moderne, responsive Gestaltung und ermöglicht es Kunden, Kontakt aufzunehmen, Spiele zu buchen und aktuelle Aktionen zu entdecken. Das Ziel war, eine leicht zu pflegende und ansprechende Online-Präsenz zu schaffen, die das Erlebnis der Arena schon digital vermittelt.",
                Tags: ["HTML", "CSS", "Javascript"],
            },
        ],
        HobbyProjects: [
            {
                Label: "Game Engine",
                Text: "Die Game Engine ist ein Prototyp einer modernen, modularen Entwicklungsplattform für interaktive Echtzeitanwendungen. Der Fokus liegt auf einer performanten und flexiblen Architektur, die aktuelle Grafik-APIs wie Vulkan und DirectX 12 unterstützt. Durch einen dedizierten Render Thread werden Logik- und Rendering-Prozesse effizient voneinander getrennt, was eine stabile und flüssige Darstellung ermöglicht. Ein integriertes Asset Management sorgt für ein zentrales und performantes Handling aller Ressourcen, während das Editor Interface Entwicklern eine intuitive Oberfläche zur Szenenverwaltung und Fehleranalyse bietet. Das Material- und Shader-System erlaubt die Erstellung individueller Effekte und sorgt für maximale gestalterische Freiheit. Der Prototyp dient als technische Grundlage für zukünftige Erweiterungen und legt den Schwerpunkt auf Stabilität, Performance und eine klare Architektur.",
                Tags: ["C++"],
            },
            {
                Label: "Reflection System",
                Text: "Ein flexibles Reflection-System für C++, das Entwicklern eine einfache Möglichkeit bietet, Typinformationen zur Laufzeit zu erfassen und zu nutzen. Das Projekt ermöglicht es, Klassen, Funktionen und Variablen dynamisch zu registrieren und zu inspizieren - ideal für Anwendungen wie Serialisierung, Debugging oder Tool-Integration.",
                Tags: ["C++"],
            },
            {
                Label: "C++ Preprocessor",
                Text: "Der C++ Preprocessor ist ein leichtgewichtiges Tool zur Analyse und Vorverarbeitung von C++-Code. Er unterstützt das automatische Erkennen und Ersetzen von Makros, das Einbinden von Header-Dateien sowie die bedingte Kompilierung. Durch den modularen Aufbau lässt sich das Tool einfach in bestehende Build-Prozesse integrieren oder zur Code-Analyse verwenden.",
                Tags: ["C++"],
            },
            {
                Label: "Natural Language",
                Text: "Natural Language ist ein Forschungsprojekt im Bereich der natürlichen Sprachverarbeitung (NLP), das sich auf die Verbindung von Textverständnis und semantischen Wissensstrukturen konzentriert. Ziel ist die Entwicklung von Methoden, um Sprache mithilfe eines Knowledge Graphs präziser zu analysieren und zu interpretieren. Dadurch können Konzepte, Beziehungen und Bedeutungen in Texten automatisch erkannt und in strukturierte Wissensmodelle überführt werden.",
                Tags: ["C++"],
            },
            {
                Label: "Async Console Input/Output",
                Text: "Dieses Projekt implementiert ein asynchrones Ein- und Ausgabesystem für die Konsole in C++. Es ermöglicht die gleichzeitige Verarbeitung von Benutzereingaben und Programmausgaben, ohne dass der Hauptthread blockiert wird. Durch den Einsatz von Multithreading und nicht-blockierenden Streams wird eine flüssige Interaktion mit der Konsole erreicht - ideal für Tools, Spiele oder Anwendungen mit Echtzeit-Feedback.",
                Tags: ["C++"],
            },
            {
                Label: "Trading Robot",
                Text: "Der Trading Robot ist ein automatisiertes Handelssystem für die MetaTrader-5-Plattform. Er analysiert Marktdaten in Echtzeit, erkennt Handelschancen und führt Positionen vollautomatisch aus. Der Fokus liegt auf stabiler Performance, klaren Handelsregeln und effizienter Umsetzung ohne manuelles Eingreifen. Ziel des Projekts ist es, den Handel zu automatisieren und durch konsequente Strategieausführung menschliche Fehler zu vermeiden.",
                Tags: ["MQL5"],
            },
            {
                Label: "MQL Language",
                Text: "Die MQL Language Erweiterung bringt volle Unterstützung für die Programmiersprachen MQL4 und MQL5 in Visual Studio Code. Sie bietet Syntax-Highlighting, Code-Vervollständigung, Fehlererkennung und hilfreiche Snippets, um die Entwicklung von Expert Advisors, Indikatoren und Skripten für MetaTrader deutlich zu vereinfachen. Mit ihrem klaren Design und ihrer stabilen Integration sorgt die Erweiterung für ein modernes, effizientes und angenehmes Entwicklungserlebnis im vertrauten VS Code-Umfeld.",
                Tags: ["VS Code", "Javascript"],
            },
        ],
        Techstack: [
            {
                Title: "Frontend",
                Items: [
                    { Label: "C#", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", URL: "https://de.wikipedia.org/wiki/C-Sharp" },
                    { Label: "Unreal Engine", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg", URL: "https://de.wikipedia.org/wiki/Unreal_Engine" },
                    { Label: "HTML5", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", URL: "https://de.wikipedia.org/wiki/HTML5" },
                    { Label: "CSS3", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", URL: "https://de.wikipedia.org/wiki/Cascading_Style_Sheets" },
                    { Label: "Javascript", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", URL: "https://de.wikipedia.org/wiki/JavaScript" },
                    { Label: "Python", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", URL: "https://de.wikipedia.org/wiki/Python_(Programmiersprache)" },
                    { Label: "Java", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", URL: "https://de.wikipedia.org/wiki/Java_(Programmiersprache)" },
                    { Label: "Vulkan", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vulkan/vulkan-original.svg", URL: "https://de.wikipedia.org/wiki/Vulkan_(API)" },
                    { Label: "DirectX11", Icon: "https://e7.pngegg.com/pngimages/845/68/png-clipart-directx-direct3d-11-computer-icons-windows-7-direct-selling-software-logo-windows.png", URL: "https://de.wikipedia.org/wiki/DirectX#DirectX_11" },
                    { Label: "DirectX12", Icon: "https://upload.wikimedia.org/wikipedia/commons/6/67/DirectX_12_Ultimate.png", URL: "https://de.wikipedia.org/wiki/DirectX#DirectX_12" },
                    { Label: "Electron", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg", URL: "https://en.wikipedia.org/wiki/Electron_(software_framework)" },
                ],
            },
            {
                Title: "Backend",
                Items: [
                    { Label: "C++", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", URL: "https://de.wikipedia.org/wiki/C%2B%2B" },
                    { Label: "PHP", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", URL: "https://de.wikipedia.org/wiki/PHP" },
                    { Label: "NodeJS", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", URL: "https://de.wikipedia.org/wiki/Node.js" },
                    { Label: "MQL5", Icon: "https://upload.wikimedia.org/wikipedia/commons/b/b1/MQL5_Community_Logo.png", URL: "https://de.wikipedia.org/wiki/MetaQuotes_Language_MQL4/MQL5" },
                ],
            },
            {
                Title: "Tools",
                Items: [
                    { Label: "VS Code", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", URL: "https://de.wikipedia.org/wiki/Visual_Studio_Code" },
                    { Label: "Visual Studio", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg", URL: "https://de.wikipedia.org/wiki/Visual_Studio" },
                    { Label: "Git", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", URL: "https://de.wikipedia.org/wiki/Git" },
                    { Label: "Github", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", URL: "https://de.wikipedia.org/wiki/GitHub" },
                ],
            },
        ],
    },
    ENG: {
        Header: {
            PreTitle: "Hello, i am",
            Title: "DerGaijin",
            SubTitle: "A Software Developer & System Administrator",
            Navigation: ["Timeline", "Skills", "Workprojects", "Hobby Projects", "Tech Stack", "Sprache Ändern"],
            Tag: "ENG",
        },
        Timeline: [
            { Label: "Unreal Engine", Icon: "fa-gamepad", Time: "February 2014", Text: "Even at a young age, I was fascinated by video games - especially the question of how they work internally. This curiosity led me to start studying the Unreal Engine intensively and to implement my own projects." },
            { Label: "C++", Icon: "fa-square-binary", Time: "April 2015", Text: "Over time, the desire to understand the technical background even better grew. Therefore, I taught myself C++ and thus expanded my knowledge in software development and game programming." },
            {
                Label: "Ausbildung",
                Icon: "fa-graduation-cap",
                Time: "July 2023",
                Text: "My interest turned into a professional passion: in 2023, I successfully completed my training as an IT specialist in application development. During this time, I was able to significantly deepen my knowledge in programming, software design, and project work.",
            },
            {
                Label: "Lasertag",
                Icon: "fa-gun",
                Time: "September 2024",
                Text: "After completing my training, I started a part-time job at a laser tag arena, where I'm responsible for technical operations as well as maintaining and further developing the website. This allows me to apply my IT skills in a practical environment.",
            },
            { Label: "Praktikum", Icon: "fa-briefcase", Time: "March 2025", Text: "To further my professional development, I completed an internship at Absolute Software GmbH, where I was able to gain valuable practical experience in the field of software development." },
        ],
        Skills: [
            {
                Label: "Asperger's Autism",
                Text: "My Asperger's autism allows me to understand and structure complex issues in a unique way. I have highly developed logical and analytical thinking skills, often recognize patterns and connections faster than others, and can delve exceptionally deeply into a subject. Thanks to my savant-like abilities, I can concentrate intensely on a specific field for extended periods, making me very precise, persistent, and efficient in my area of interest. These qualities are particularly helpful in software development, as I systematically analyze complex problems and find creative, technically sound solutions.",
            },
            {
                Label: "Autodidactic Learning",
                Text: "I learned early on to acquire new knowledge independently. Even at a young age, I taught myself programming - out of curiosity, a desire for a challenge, and a love of learning. Since then, I have continuously used this ability to familiarize myself with new topics, solve problems creatively, and independently develop my skills. This learning ability helps me to quickly adapt to new technologies, tools, or working methods and to make progress independently.",
            },
            {
                Label: "Motivation",
                Text: "I am characterized by a high level of self-motivation and goal orientation. I see challenges as opportunities to demonstrate and further develop my skills. This inner drive allows me to remain focused and committed, even when faced with complex tasks. Thanks to my motivation, I always maintain an overview, work efficiently towards results, and actively contribute to the progress of projects.",
            },
        ],
        WorkProjects: [
            {
                Label: "Carrerabahn Gedankensteuerung",
                Text: "Mit der Carrera-Bahn Gedankensteuerung wird Kindheitserinnerung auf futuristische Weise neu erfunden. Dieses Projekt ermöglicht es, eine Carrera-Bahn nicht mit dem klassischen Handregler, sondern durch Gedankensteuerung zu bedienen. Über ein EEG-Headset werden Gehirnströme gemessen und in Echtzeit in Steuersignale umgewandelt, die die Geschwindigkeit der Fahrzeuge beeinflussen. Das Ergebnis: Ein faszinierendes Zusammenspiel aus Neurowissenschaft, Signalverarbeitung und Embedded Systems - und ein Schritt in Richtung Mensch-Maschine-Interaktion der Zukunft.",
                Tags: ["C#"],
            },
            {
                Label: "Traffic Simulation",
                Text: "Traffic simulation is a software project for modeling and analyzing road traffic. It simulates the behavior of vehicles, traffic lights, and road users in a virtual environment. The goal is to visualize traffic flows, identify bottlenecks, and improve the efficiency of traffic control systems.",
                Tags: ["C++", "Unreal Engine"],
            },
            {
                Label: "Multimodal Chatbot",
                Text: "The multimodal chatbot assists customers in the DIY store with product searches. Products can be easily queried using voice commands - without any typing or screen interaction. Thanks to integrated facial recognition, the chatbot recognizes returning customers and can address them individually or take previous search queries into account. This creates an intuitive, personalized, and modern shopping experience right in the store.",
                Tags: ["Python"],
            },
            {
                Label: "Notice Board",
                Text: "The notice board serves as a central information platform for internal announcements and notices. Current announcements, important organizational information, and notices regarding staff and representatives are published here.",
                Tags: ["HTML", "CSS", "Javascript"],
            },
            {
                Label: "Lasertag Website",
                Text: "This website was created for our laser tag arena to provide visitors with quick and clear information about our offers, opening hours, and prices. It features a modern, responsive design and allows customers to contact us, book games, and discover current promotions. The goal was to create an easy-to-maintain and appealing online presence that digitally conveys the experience of the arena.",
                Tags: ["HTML", "CSS", "Javascript"],
            },
        ],
        HobbyProjects: [
            {
                Label: "Game Engine",
                Text: "The game engine is a prototype of a modern, modular development platform for interactive real-time applications. The focus is on a high-performance and flexible architecture that supports current graphics APIs such as Vulkan and DirectX 12. A dedicated render thread efficiently separates logic and rendering processes, enabling stable and fluid rendering. Integrated asset management ensures centralized and efficient handling of all resources, while the editor interface provides developers with an intuitive interface for scene management and debugging. The material and shader system allows for the creation of custom effects and provides maximum creative freedom. The prototype serves as the technical foundation for future extensions and emphasizes stability, performance, and a clear architecture.",
                Tags: ["C++"],
            },
            {
                Label: "Reflection System",
                Text: "A flexible reflection system for C++ that provides developers with an easy way to access and utilize type information at runtime. The project allows for dynamic registration and inspection of classes, functions, and variables - ideal for applications such as serialization, debugging, or tool integration.",
                Tags: ["C++"],
            },
            {
                Label: "C++ Preprocessor",
                Text: "The C++ preprocessor is a lightweight tool for analyzing and preprocessing C++ code. It supports the automatic detection and replacement of macros, the inclusion of header files, and conditional compilation. Its modular design makes it easy to integrate the tool into existing build processes or use it for code analysis.",
                Tags: ["C++"],
            },
            {
                Label: "Natural Language",
                Text: "Natural Language is a research project in the field of natural language processing (NLP) that focuses on connecting text comprehension with semantic knowledge structures. The goal is to develop methods for more precisely analyzing and interpreting language using a knowledge graph. This allows concepts, relationships, and meanings in texts to be automatically identified and transformed into structured knowledge models.",
                Tags: ["C++"],
            },
            {
                Label: "Async Console Input/Output",
                Text: "This project implements an asynchronous input and output system for the console in C++. It allows for the simultaneous processing of user input and program output without blocking the main thread. By utilizing multithreading and non-blocking streams, it achieves smooth interaction with the console - ideal for tools, games, or applications requiring real-time feedback.",
                Tags: ["C++"],
            },
            {
                Label: "Trading Robot",
                Text: "The trading robot is an automated trading system for the MetaTrader 5 platform. It analyzes market data in real time, identifies trading opportunities, and executes trades fully automatically. The focus is on stable performance, clear trading rules, and efficient execution without manual intervention. The goal of the project is to automate trading and avoid human errors through consistent strategy execution.",
                Tags: ["MQL5"],
            },
            {
                Label: "MQL Language",
                Text: "The MQL Language extension brings full support for the MQL4 and MQL5 programming languages to Visual Studio Code. It offers syntax highlighting, code completion, error detection, and helpful snippets to significantly simplify the development of Expert Advisors, indicators, and scripts for MetaTrader. With its clean design and stable integration, the extension provides a modern, efficient, and enjoyable development experience within the familiar VS Code environment.",
                Tags: ["VS Code", "Javascript"],
            },
        ],
        Techstack: [
            {
                Title: "Frontend",
                Items: [
                    { Label: "C#", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", URL: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" },
                    { Label: "Unreal Engine", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg", URL: "https://en.wikipedia.org/wiki/Unreal_Engine" },
                    { Label: "HTML5", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", URL: "https://en.wikipedia.org/wiki/HTML5" },
                    { Label: "CSS3", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", URL: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets" },
                    { Label: "Javascript", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", URL: "https://en.wikipedia.org/wiki/JavaScript" },
                    { Label: "Python", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", URL: "https://en.wikipedia.org/wiki/Python_(programming_language)" },
                    { Label: "Java", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", URL: "https://en.wikipedia.org/wiki/Java_(programming_language)" },
                    { Label: "Vulkan", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vulkan/vulkan-original.svg", URL: "https://en.wikipedia.org/wiki/Vulkan" },
                    { Label: "DirectX11", Icon: "https://e7.pngegg.com/pngimages/845/68/png-clipart-directx-direct3d-11-computer-icons-windows-7-direct-selling-software-logo-windows.png", URL: "https://en.wikipedia.org/wiki/DirectX#DirectX_11" },
                    { Label: "DirectX12", Icon: "https://upload.wikimedia.org/wikipedia/commons/6/67/DirectX_12_Ultimate.png", URL: "https://en.wikipedia.org/wiki/DirectX#DirectX_12" },
                    { Label: "Electron", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg", URL: "https://en.wikipedia.org/wiki/Electron_(software_framework)" },
                ],
            },
            {
                Title: "Backend",
                Items: [
                    { Label: "C++", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", URL: "https://en.wikipedia.org/wiki/C%2B%2B" },
                    { Label: "PHP", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", URL: "https://en.wikipedia.org/wiki/PHP" },
                    { Label: "NodeJS", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", URL: "https://en.wikipedia.org/wiki/Node.js" },
                    { Label: "MQL5", Icon: "https://upload.wikimedia.org/wikipedia/commons/b/b1/MQL5_Community_Logo.png", URL: "https://de.wikipedia.org/wiki/MetaQuotes_Language_MQL4/MQL5" },
                ],
            },
            {
                Title: "Tools",
                Items: [
                    { Label: "VS Code", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", URL: "https://en.wikipedia.org/wiki/Visual_Studio_Code" },
                    { Label: "Visual Studio", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg", URL: "https://en.wikipedia.org/wiki/Visual_Studio" },
                    { Label: "Git", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", URL: "https://en.wikipedia.org/wiki/Git" },
                    { Label: "Github", Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", URL: "https://en.wikipedia.org/wiki/GitHub" },
                ],
            },
        ],
    },
};
