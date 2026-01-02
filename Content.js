const Content = {
    GER: {
        Header: {
            PreTitle: "Hallo, ich bin",
            SubTitle: "Ein <b>Software Entwickler</b> & <b>System Administrator</b>",
        },
        Navigation: [
            {
                Icon: "fa-timeline",
                Label: "Lebenslauf",
                Url: "#Section_Timeline",
            },
            {
                Icon: "fa-book",
                Label: "Fähigkeiten",
                Url: "#Section_Skills",
            },
            {
                Icon: "fa-briefcase",
                Label: "Arbeitsprojekte",
                Url: "#Section_WorkProjects",
            },
            {
                Icon: "fa-dice",
                Label: "Hobby Projekte",
                Url: "#Section_HobbyProjects",
            },
            {
                Icon: "fa-microchip",
                Label: "Techstack",
                Url: "#Section_TechStack",
            },
            {
                Icon: "fa-globe",
                Label: "English Version",
                Url: "ChangeLanguage('ENG')",
                IsButton: true,
            },
        ],
        Timeline: {
            Title: "Lebenslauf",
            Items: [
                {
                    Label: "Unreal Engine",
                    Icon: "fa-gamepad",
                    Time: "Februar 2014",
                    Text: "Schon früh faszinierten mich Videospiele - insbesondere die Frage, wie ihre technischen Grundlagen aufgebaut sind. Diese Neugier brachte mich dazu, mich intensiv mit der Unreal Engine auseinanderzusetzen und erste eigene Projekte zu realisieren.",
                },
                { Label: "C++", Icon: "fa-square-binary", Time: "April 2015", Text: "Mit der Zeit entstand der Anspruch, die technischen Hintergründe noch umfassender zu verstehen. Daher erlernte ich C++ und vertiefte mein Wissen in der Softwareentwicklung sowie der Spieleprogrammierung." },
                {
                    Label: "Ausbildung",
                    Icon: "fa-graduation-cap",
                    Time: "Juli 2023",
                    Text: "Mein Interesse entwickelte sich zu einer beruflichen Leidenschaft: 2023 schloss ich meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung erfolgreich ab. In dieser Zeit konnte ich meine Fähigkeiten in Programmierung, Softwaredesign und projektorientierter Arbeit wesentlich ausbauen.",
                },
                {
                    Label: "Lasertag",
                    Icon: "fa-gun",
                    Time: "September 2024",
                    Text: "Nach meiner Ausbildung übernahm ich einen Nebenjob in einer Lasertag-Halle, in dem ich sowohl für technische Abläufe als auch für die Pflege und Weiterentwicklung der Website verantwortlich bin. Dabei kann ich meine IT-Kenntnisse gezielt in einem praxisnahen Umfeld einsetzen.",
                },
                {
                    Label: "Praktikum",
                    Icon: "fa-briefcase",
                    Time: "März 2025",
                    Text: "Zur weiteren beruflichen Entwicklung absolvierte ich ein Praktikum bei der Absolute Software GmbH, wo ich Einblicke in professionelle Entwicklungsprozesse erhielt und an der Umsetzung konkreter Softwaremodule mitwirkte. Dabei vertiefte ich mein Verständnis moderner Tools, Workflows und kollaborativer Entwicklungsabläufe.",
                },
            ],
        },
        Skills: {
            Title: "Fähigkeiten",
            Items: [
                {
                    Label: "Asperger Autismus",
                    Text: "Mein Asperger-Autismus stärkt meine Fähigkeit, komplexe Sachverhalte schnell zu erfassen, klar zu strukturieren und analytisch zu durchdringen. Ich erkenne Muster früh, arbeite mich tief in technische Themen ein und kann mich außergewöhnlich fokussiert und ausdauernd auf ein Fachgebiet konzentrieren. Diese Eigenschaften unterstützen mich besonders in der Anwendungsentwicklung, wo ich Probleme systematisch analysiere und präzise, technisch fundierte Lösungen entwickle.",
                },
                {
                    Label: "Autodidaktisches Lernen",
                    Text: "Ich eignete mir früh die Fähigkeit an, neues Wissen selbstständig zu erarbeiten. Bereits in jungen Jahren brachte ich mir das Programmieren aus eigenem Antrieb bei - getragen von Neugier, dem Reiz technischer Herausforderungen und echter Freude am Lernen. Diese Haltung prägt meine Arbeit bis heute: Ich arbeite mich effizient in neue Themenfelder ein, entwickle kreative Lösungsansätze und erweitere meine Kompetenzen kontinuierlich und eigenverantwortlich. So kann ich mich schnell an neue Technologien, Werkzeuge und Arbeitsmethoden anpassen und zielgerichtet Fortschritte erzielen.",
                },
                {
                    Label: "Motiviert",
                    Text: "Ich verfüge über ausgeprägte Eigenmotivation und klare Zielorientierung. Herausforderungen betrachte ich als Chance, meine Fähigkeiten gezielt einzusetzen und weiterzuentwickeln. Dieser Antrieb ermöglicht es mir, auch bei komplexen Aufgaben konzentriert und lösungsorientiert zu arbeiten. So behalte ich den Gesamtüberblick, erreiche Ergebnisse effizient und leiste einen spürbaren Beitrag zum Fortschritt jedes Projekts.",
                },
            ],
        },
        WorkProjects: {
            Title: "Arbeitsprojekte",
            Items: [
                {
                    Label: "Verkehrssimulation",
                    Text: "Die Verkehrssimulation ist ein Softwareprojekt zur Modellierung und Analyse des Straßenverkehrs. Sie simuliert das Verhalten von Fahrzeugen, Ampelschaltungen und Verkehrsteilnehmern in einer virtuellen Umgebung. Ziel ist es, Verkehrsflüsse zu visualisieren, Engpässe zu erkennen und die Effizienz von Verkehrssteuerungen zu verbessern.",
                    Tags: ["C++", "Unreal Engine"],
                },
                {
                    Label: "Multimodaler Chatbot",
                    Text: "Der multimodale Chatbot unterstützt Kundinnen und Kunden im Baumarkt bei der Artikelsuche. Über Sprachbefehle können Produkte einfach abgefragt werden - ganz ohne Tippen oder Bildschirm. Dank integrierter Gesichtserkennung erkennt der Chatbot wiederkehrende Besucher und kann sie individuell ansprechen oder frühere Suchanfragen berücksichtigen. So entsteht ein intuitives, persönliches und modernes Einkaufserlebnis direkt im Markt.",
                    Tags: ["Python", "OpenAI", "Mediapipe"],
                },
                {
                    Label: "Lasertag Webseite",
                    Text: "Diese Webseite wurde für unsere Lasertag-Arena erstellt, um Besucher schnell und übersichtlich über Angebote, Öffnungszeiten und Preise zu informieren. Sie bietet eine moderne, responsive Gestaltung und ermöglicht es Kunden, Kontakt aufzunehmen, Spiele zu buchen und aktuelle Aktionen zu entdecken. Das Ziel war, eine leicht zu pflegende und ansprechende Online-Präsenz zu schaffen, die das Erlebnis der Arena schon digital vermittelt.",
                    Tags: ["HTML", "CSS", "Javascript"],
                },
            ],
        },
        HobbyProjects: {
            Title: "Hobby Projekte",
            Items: [
                {
                    Label: "Game Engine",
                    Text: "Die Game Engine ist ein Prototyp einer modernen, modularen Entwicklungsplattform für interaktive Echtzeitanwendungen. Der Fokus liegt auf einer performanten und flexiblen Architektur, die aktuelle Grafik-APIs wie Vulkan und DirectX 12 unterstützt. Durch einen dedizierten Render Thread werden Logik- und Rendering-Prozesse effizient voneinander getrennt, was eine stabile und flüssige Darstellung ermöglicht. Ein integriertes Asset Management sorgt für ein zentrales und performantes Handling aller Ressourcen, während das Editor Interface Entwicklern eine intuitive Oberfläche zur Szenenverwaltung und Fehleranalyse bietet. Das Material- und Shader-System erlaubt die Erstellung individueller Effekte und sorgt für maximale gestalterische Freiheit. Der Prototyp dient als technische Grundlage für zukünftige Erweiterungen und legt den Schwerpunkt auf Stabilität, Performance und eine klare Architektur.",
                    Tags: ["C++", "DirectX12", "Vulkan"],
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
                    Label: "MQL Language",
                    Text: "Die MQL Language Erweiterung bringt volle Unterstützung für die Programmiersprachen MQL4 und MQL5 in Visual Studio Code. Sie bietet Syntax-Highlighting, Code-Vervollständigung, Fehlererkennung und hilfreiche Snippets, um die Entwicklung von Expert Advisors, Indikatoren und Skripten für MetaTrader deutlich zu vereinfachen. Mit ihrem klaren Design und ihrer stabilen Integration sorgt die Erweiterung für ein modernes, effizientes und angenehmes Entwicklungserlebnis im vertrauten VS Code-Umfeld.",
                    Tags: ["VS Code", "Javascript"],
                },
            ],
        },
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
            SubTitle: "A <b>Software Developer</b> & <b>System Administrator</b>",
        },
        Navigation: [
            {
                Icon: "fa-timeline",
                Label: "Timeline",
                Url: "#Section_Timeline",
            },
            {
                Icon: "fa-book",
                Label: "Skills",
                Url: "#Section_Skills",
            },
            {
                Icon: "fa-briefcase",
                Label: "Work Projects",
                Url: "#Section_WorkProjects",
            },
            {
                Icon: "fa-dice",
                Label: "Hobby Projects",
                Url: "#Section_HobbyProjects",
            },
            {
                Icon: "fa-microchip",
                Label: "Techstack",
                Url: "#Section_TechStack",
            },
            {
                Icon: "fa-globe",
                Label: "Deutsche Version",
                Url: "ChangeLanguage('GER')",
                IsButton: true,
            },
        ],
        Timeline: {
            Title: "Timeline",
            Items: [
                { Label: "Unreal Engine", Icon: "fa-gamepad", Time: "February 2014", Text: "Early on, I was fascinated by video games—especially by how their technical foundations are built. This curiosity led me to explore the Unreal Engine in depth and to develop my first own projects." },
                { Label: "C++", Icon: "fa-square-binary", Time: "April 2015", Text: "Over time, I developed the ambition to gain a more comprehensive understanding of the underlying technology. This led me to learn C++ and deepen my expertise in software development as well as game programming." },
                {
                    Label: "Training",
                    Icon: "fa-graduation-cap",
                    Time: "July 2023",
                    Text: "My initial interest evolved into a professional passion. In 2023, I successfully completed my training as an IT specialist in application development. During this period, I significantly expanded my abilities in programming, software design, and project-oriented work.",
                },
                {
                    Label: "Lasertag",
                    Icon: "fa-gun",
                    Time: "September 2024",
                    Text: "After completing my training, I took on a part-time position at a laser tag arena, where I am responsible for both technical operations and the maintenance and further development of the website. This role allows me to apply my IT expertise effectively in a hands-on, practical environment.",
                },
                {
                    Label: "Internship",
                    Icon: "fa-briefcase",
                    Time: "March 2025",
                    Text: "For my further professional development, I completed an internship at Absolute Software GmbH, where I gained insight into professional development processes and contributed to the implementation of concrete software modules. This experience deepened my understanding of modern tools, workflows, and collaborative development practices.",
                },
            ],
        },
        Skills: {
            Title: "Skills",
            Items: [
                {
                    Label: "Asperger's Autism",
                    Text: "My Asperger's autism enhances my ability to grasp complex matters quickly, structure them clearly, and analyze them with precision. I recognize patterns early, dive deeply into technical topics, and maintain exceptional focus and persistence in specialized areas. These strengths are particularly valuable in application development, where I approach problems systematically and create precise, technically sound solutions.",
                },
                {
                    Label: "Autodidactic Learning",
                    Text: "I developed the ability to acquire new knowledge independently at an early age. Even as a teenager, I taught myself programming-driven by curiosity, the appeal of technical challenges, and a genuine enthusiasm for learning. This mindset continues to shape my work today: I quickly familiarize myself with new domains, develop creative solution approaches, and continuously expand my skills with initiative and accountability. This enables me to adapt rapidly to new technologies, tools, and working methods and to make focused progress.",
                },
                {
                    Label: "Motivation",
                    Text: "I possess strong self-motivation and a clear sense of purpose. I view challenges as opportunities to apply and expand my skills in a targeted way. This drive enables me to remain focused and solution-oriented, even when dealing with complex tasks. As a result, I maintain a comprehensive overview, deliver results efficiently, and make a meaningful contribution to the progress of every project.",
                },
            ],
        },
        WorkProjects: {
            Title: "Work Projects",
            Items: [
                {
                    Label: "Traffic Simulation",
                    Text: "The traffic simulation is a software project for modeling and analyzing road traffic. It simulates the behavior of vehicles, traffic light cycles, and other road users within a virtual environment. Its purpose is to visualize traffic flows, identify bottlenecks, and improve the efficiency of traffic control systems.",
                    Tags: ["C++", "Unreal Engine"],
                },
                {
                    Label: "Multimodal Chatbot",
                    Text: "The multimodal chatbot assists customers in hardware stores with product searches. Using voice commands, products can be requested effortlessly—without typing or interacting with a screen. With integrated facial recognition, the chatbot identifies returning visitors and can address them personally or take previous queries into account. This creates an intuitive, personalized, and modern in-store shopping experience.",
                    Tags: ["Python", "OpenAI", "Mediapipe"],
                },
                {
                    Label: "Lasertag Website",
                    Text: "This website was created for our laser tag arena to provide visitors with a clear and efficient overview of available offers, opening hours, and pricing. It features a modern, responsive design and allows customers to get in touch, book games, and explore current promotions. The goal was to create an easy-to-maintain and engaging online presence that conveys the arena experience even before visitors arrive.",
                    Tags: ["HTML", "CSS", "Javascript"],
                },
            ],
        },
        HobbyProjects: {
            Title: "Hobby Projects",
            Items: [
                {
                    Label: "Game Engine",
                    Text: "The game engine is a prototype of a modern, modular development platform for interactive real-time applications. Its focus is on a high-performance, flexible architecture that supports contemporary graphics APIs such as Vulkan and DirectX 12. A dedicated render thread cleanly separates logic and rendering processes, ensuring stable and smooth output. Integrated asset management provides a centralized and efficient way to handle all resources, while the editor interface offers developers an intuitive environment for scene management and debugging. The material and shader system enables the creation of custom effects, giving developers maximum creative flexibility. The prototype serves as a technical foundation for future extensions, emphasizing stability, performance, and a clear architectural design.",
                    Tags: ["C++", "DirectX12", "Vulkan"],
                },
                {
                    Label: "Reflection System",
                    Text: "A flexible reflection system for C++ that provides developers with a straightforward way to capture and leverage type information at runtime. The project enables dynamic registration and inspection of classes, functions, and variables, making it well-suited for use cases such as serialization, debugging, and tool integration.",
                    Tags: ["C++"],
                },
                {
                    Label: "C++ Preprocessor",
                    Text: "The C++ preprocessor is a lightweight tool for analyzing and preprocessing C++ code. It supports automatic macro detection and substitution, header file inclusion, and conditional compilation. Its modular architecture allows it to be easily integrated into existing build processes or used for code analysis.",
                    Tags: ["C++"],
                },
                {
                    Label: "MQL Language",
                    Text: "The MQL Language Extension delivers full support for the MQL4 and MQL5 programming languages in Visual Studio Code. It provides syntax highlighting, code completion, error detection, and helpful snippets that significantly streamline the development of Expert Advisors, indicators, and scripts for MetaTrader. With its clean design and robust integration, the extension ensures a modern, efficient, and enjoyable development experience within the familiar VS Code environment.",
                    Tags: ["VS Code", "Javascript"],
                },
            ],
        },
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
