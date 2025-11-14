document.addEventListener("DOMContentLoaded", () => {
    SetupBackground();
});

window.onscroll = function () {
    AttachHeaderContent();
};

function SetupBackground() {
    // Tiny starfield with subtle parallax & twinkle — tuned for perf
    const canvas = document.getElementById("BackgroundStars");
    const ctx = canvas.getContext("2d", { alpha: true });
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let stars = [];
    let w = 0,
        h = 0;
    let mouseX = 0,
        mouseY = 0; // for gentle parallax

    const STAR_COUNT = 220; // adjust density here

    function resize() {
        w = canvas.clientWidth;
        h = canvas.clientHeight;
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function rand(a, b) {
        return a + Math.random() * (b - a);
    }

    function createStars() {
        stars = new Array(STAR_COUNT).fill(0).map(() => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: rand(0.4, 1.6),
            a: rand(0.3, 0.9), // base alpha
            tw: rand(0.002, 0.008), // twinkle speed
            phase: Math.random() * Math.PI * 2,
            z: Math.random() * 0.6 + 0.4, // depth for parallax
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        const px = (mouseX - w / 2) * 0.002;
        const py = (mouseY - h / 2) * 0.002;
        for (const s of stars) {
            const twinkle = (Math.sin(performance.now() * s.tw + s.phase) + 1) / 2; // 0..1
            const alpha = s.a * (0.6 + 0.4 * twinkle);
            const sx = s.x + px * (1 - s.z) * 50; // gentle parallax
            const sy = s.y + py * (1 - s.z) * 50;

            // soft star
            const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, 2.5 * s.r);
            grad.addColorStop(0, `hsla(260, 80%, 80%, ${alpha})`);
            grad.addColorStop(1, "hsla(260, 80%, 80%, 0)");
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(sx, sy, 2.5 * s.r, 0, Math.PI * 2);
            ctx.fill();
        }
        requestAnimationFrame(draw);
    }

    function onMove(e) {
        if (e.touches && e.touches[0]) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        } else {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
    }

    window.addEventListener("resize", () => {
        resize();
        createStars();
    });
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });

    resize();
    createStars();
    draw();
}

function AttachHeaderContent() {
    var MH_Content = document.getElementById("MH_Content");

    if (window.scrollY >= 275) {
        MH_Content.classList.add("MH_ContentFixed");
    } else {
        MH_Content.classList.remove("MH_ContentFixed");
    }
}

function SelectLanguage(Lang) {
    var Flippable = document.getElementsByClassName("Flippable");
    for (var Item of Flippable) {
        Item.classList.remove("FlipStop");
        Item.classList.add("FlipStart");
    }

    setTimeout(() => {
        if (Lang == "ENG") {
            UpdateWebsiteContent(Content.ENG);
        } else {
            UpdateWebsiteContent(Content.GER);
        }

        var Flippable = document.getElementsByClassName("Flippable");
        for (var Item of Flippable) {
            Item.classList.remove("FlipStart");
            Item.classList.add("FlipStop");
        }
    }, 500);
}

function GetQueryParams(qs) {
    qs = qs.split("+").join(" ");
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;
    while ((tokens = re.exec(qs))) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
}

function InitializeWebsiteContent() {
    const Params = GetQueryParams(document.location.search);

    const Lang = "Lang" in Params ? Params["Lang"] : "GER";
    if (Lang == "ENG") {
        UpdateWebsiteContent(Content.ENG);
    } else {
        UpdateWebsiteContent(Content.GER);
    }
}

function UpdateWebsiteContent(Data) {
    const Params = GetQueryParams(document.location.search);

    // Header
    document.getElementById("MH_PreTitle").innerText = Data.Header.PreTitle;
    if ("Name" in Params) {
        document.getElementById("MH_Title").innerText = Params["Name"];
    } else {
        document.getElementById("MH_Title").innerText = Data.Header.Title;
    }
    document.getElementById("MH_SubTitle").innerText = Data.Header.SubTitle;
    if (Data.Header.Tag == "GER") {
        document.getElementById("MH_ChangeLang").onclick = SelectLanguage.bind(null, "ENG");
    } else {
        document.getElementById("MH_ChangeLang").onclick = SelectLanguage.bind(null, "GER");
    }

    // Header Navigation
    var MH_Navigation = document.getElementById("MH_Navigation");
    for (let Idx = 0; Idx < MH_Navigation.children.length; Idx++) {
        MH_Navigation.children[Idx].children[1].innerText = Data.Header.Navigation[Idx];
    }

    // Timeline
    var Timeline = document.getElementById("Timeline");
    Timeline.innerHTML = "";
    for (const [Idx, Item] of Data.Timeline.entries()) {
        var TimelineItem = document.createElement("li");
        TimelineItem.className = "TimelineItem";
        Timeline.appendChild(TimelineItem);

        TimelineItem.innerHTML = `
            <div class="TimelineItem_Content">
                <div class="TimelineItem_Box SectionSubBox ${Idx % 2 ? "TimelineItem_Box_Right" : "TimelineItem_Box_Left"}">
                    <div class="TimelineItem_Head">
                        <i class="TimelineItem_Icon fa-solid ${Item.Icon} fa-2xl"></i>
                        <h4 class="TimelineItem_Title">${Item.Label}</h4>
                        <p class="TimelineItem_Time">${Item.Time}</p>
                    </div>
                    <div class="TimelineItem_Body">
                        <p>${Item.Text}</p>
                    </div>
                </div>
            </div>
        `;
        if (Idx % 2) {
            TimelineItem.innerHTML =
                `
                <span class="TimelineItem_Arm"></span>
                <span class="TimelineItem_Node"></span>
                ` + TimelineItem.innerHTML;
        } else {
            TimelineItem.innerHTML =
                TimelineItem.innerHTML +
                `
                <span class="TimelineItem_Node"></span>
                <span class="TimelineItem_Arm"></span>
                `;
        }
    }

    // Skills
    var Skills = document.getElementById("Skills");
    Skills.innerHTML = "";
    for (const Item of Data.Skills) {
        var SkillCard = document.createElement("li");
        SkillCard.className = "SkillCard SectionSubBox";
        Skills.appendChild(SkillCard);

        SkillCard.innerHTML = `
        <h4 class="SkillCard_Title">${Item.Label}</h4>
        <p class="SkillCard_Text">${Item.Text}</p>
        `;
    }

    // Work Projects
    var WorkProjectCardList = document.getElementById("WorkProjectCardList");
    WorkProjectCardList.innerHTML = "";
    for (const Item of Data.WorkProjects) {
        var ProjectCard = document.createElement("li");
        ProjectCard.className = "ProjectCard SectionSubBox";
        WorkProjectCardList.appendChild(ProjectCard);

        ProjectCard.innerHTML = `
            <h4 class="ProjectCard_Title">${Item.Label}</h4>
            <p class="ProjectCard_Description">${Item.Text}</p>
            <ul class="ProjectCard_Tags"></ul>
        `;

        for (const Tag of Item.Tags) {
            var ProjectCard_Tag = document.createElement("li");
            ProjectCard_Tag.className = "ProjectCard_Tag";
            ProjectCard_Tag.innerText = Tag;
            ProjectCard.children[2].appendChild(ProjectCard_Tag);
        }
    }

    // Hobby Projects
    var HobbyProjectCardList = document.getElementById("HobbyProjectCardList");
    HobbyProjectCardList.innerHTML = "";
    for (const Item of Data.HobbyProjects) {
        var ProjectCard = document.createElement("li");
        ProjectCard.className = "ProjectCard SectionSubBox";
        HobbyProjectCardList.appendChild(ProjectCard);

        ProjectCard.innerHTML = `
            <h4 class="ProjectCard_Title">${Item.Label}</h4>
            <p class="ProjectCard_Description">${Item.Text}</p>
            <ul class="ProjectCard_Tags"></ul>
        `;

        for (const Tag of Item.Tags) {
            var ProjectCard_Tag = document.createElement("li");
            ProjectCard_Tag.className = "ProjectCard_Tag";
            ProjectCard_Tag.innerText = Tag;
            ProjectCard.children[2].appendChild(ProjectCard_Tag);
        }
    }

    // Techstack
    var TechStacks = document.getElementById("TechStacks");
    TechStacks.innerHTML = "";
    for (const Item of Data.Techstack) {
        var TechStackCategory = document.createElement("li");
        TechStackCategory.className = "TechStackCategory";
        TechStacks.appendChild(TechStackCategory);

        TechStackCategory.innerHTML = `
            <h4 class="TechStackCategory_Title">${Item.Title}</h4>
            <ul class="TechStackCategory_Items"></ul>
        `;

        var TechStackCategory_Items = TechStackCategory.children[1];
        for (const CategoryItem of Item.Items) {
            var TechStackCategory_Item = document.createElement("li");
            TechStackCategory_Item.className = "TechStackCategory_Item";
            TechStackCategory_Items.appendChild(TechStackCategory_Item);

            TechStackCategory_Item.innerHTML = `
                <a class="TechStackCategory_Link" href="${CategoryItem.URL}" target="_blank">
                    <img class="TechStackCategory_Icon" src="${CategoryItem.Icon}" alt="Icon">
                    <p class="TechStackCategory_Text">${CategoryItem.Label}</p>
                </a>
            `;
        }
    }
}
