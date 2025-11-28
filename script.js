document.addEventListener("DOMContentLoaded", () => {
    SetupBackground();
    InitializeContent();
});

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

function UpdateContent(Data) {
    // Get Queries
    const Query = GetQueryParams(document.location.search);

    // Main Header
    document.getElementById("MH_PreTitle").innerText = Data.Header.PreTitle;
    if (Query?.Name) {
        document.getElementById("MH_Title").innerText = Query.Name;
    }
    document.getElementById("MH_SubTitle").innerHTML = Data.Header.SubTitle;

    // Main Navigation
    var MH_Navigation = document.getElementById("MainNavigation");
    MH_Navigation.innerHTML = "";
    for (const Item of Data.Navigation) {
        var MN_Item = document.createElement("a");
        MN_Item.className = "MN_Item";
        MH_Navigation.appendChild(MN_Item);

        if (Item?.IsButton) {
            MN_Item.setAttribute("onclick", Item.Url);
        } else {
            MN_Item.href = Item.Url;
        }

        var MN_Item_Icon = document.createElement(Item?.IconIsImage ? "img" : "i");
        MN_Item_Icon.className = "MN_Item_Icon";
        if (Item?.IconIsImage) {
            MN_Item_Icon.src = Item.Icon;
        } else {
            MN_Item_Icon.classList.add("fa-solid");
            MN_Item_Icon.classList.add(Item.Icon);
        }
        MN_Item.appendChild(MN_Item_Icon);

        var MN_Item_Text = document.createElement("p");
        MN_Item_Text.innerText = Item.Label;
        MN_Item.appendChild(MN_Item_Text);
    }

    // Timeline
    document.getElementById("Section_Timeline").children[0].innerText = Data.Timeline.Title;
    var List_Timeline = document.getElementById("List_Timeline");
    List_Timeline.innerHTML = "";
    let TimelineReversed = true;
    for (const Item of Data.Timeline.Items) {
        TimelineReversed = !TimelineReversed;
        var TimelineRow = document.createElement("div");
        TimelineRow.className = "TimelineRow";
        if (TimelineReversed) {
            TimelineRow.classList.add("TimelineRow_Reversed");
        }
        List_Timeline.appendChild(TimelineRow);

        TimelineRow.innerHTML = `
            <div class="Timeline_Content ">
                <div class="Timeline_Spacer"></div>
                <div class="Timeline_Item SectionSubBox">
                    <div class="TimelineItem_Head">
                        <i class="TimelineItem_Icon fa-solid ${Item.Icon} fa-2xl"></i>
                        <h4 class="TimelineItem_Title">${Item.Label}</h4>
                        <p class="TimelineItem_Time">${Item.Time}</p>
                    </div>
                    <div class="TimelineItem_Body">
                        <p>${Item.Text}</p>
                    </div>
                </div>
                <div class="Timeline_Arm"></div>
            </div>
            <div class="Timeline_Line"></div>
            <div class="Timeline_Spacer"></div>
        `;
    }

    // Skills
    document.getElementById("Section_Skills").children[0].innerText = Data.Skills.Title;
    var List_Skills = document.getElementById("List_Skills");
    List_Skills.innerHTML = "";
    for (const Item of Data.Skills.Items) {
        var SectionSubBox = document.createElement("div");
        SectionSubBox.className = "SectionSubBox";
        List_Skills.appendChild(SectionSubBox);

        SectionSubBox.innerHTML = `
            <h4 class="SectionSubBox_Title SectionSubBox_Title_Center">${Item.Label}</h4>
            <p class="SectionSubBox_Description">${Item.Text}</p>
        `;
    }

    // Work Projects
    document.getElementById("Section_WorkProjects").children[0].innerText = Data.WorkProjects.Title;
    var List_WorkProjects = document.getElementById("List_WorkProjects");
    List_WorkProjects.innerHTML = "";
    for (const Item of Data.WorkProjects.Items) {
        var SectionSubBox = document.createElement("div");
        SectionSubBox.className = "SectionSubBox";
        List_WorkProjects.appendChild(SectionSubBox);

        SectionSubBox.innerHTML = `
            <h4 class="SectionSubBox_Title">${Item.Label}</h4>
            <p class="SectionSubBox_Description">${Item.Text}</p>
            <ul class="SectionSubBox_Tags"></ul>
        `;

        for (const Tag of Item.Tags) {
            var SectionSubBox_Tag = document.createElement("li");
            SectionSubBox_Tag.className = "SectionSubBox_Tag";
            SectionSubBox_Tag.innerText = Tag;
            SectionSubBox.children[2].appendChild(SectionSubBox_Tag);
        }
    }

    // Hobby Projects
    document.getElementById("Section_HobbyProjects").children[0].innerText = Data.HobbyProjects.Title;
    var List_HobbyProjects = document.getElementById("List_HobbyProjects");
    List_HobbyProjects.innerHTML = "";
    for (const Item of Data.HobbyProjects.Items) {
        var SectionSubBox = document.createElement("div");
        SectionSubBox.className = "SectionSubBox";
        List_HobbyProjects.appendChild(SectionSubBox);

        SectionSubBox.innerHTML = `
            <h4 class="SectionSubBox_Title">${Item.Label}</h4>
            <p class="SectionSubBox_Description">${Item.Text}</p>
            <ul class="SectionSubBox_Tags"></ul>
        `;

        for (const Tag of Item.Tags) {
            var SectionSubBox_Tag = document.createElement("li");
            SectionSubBox_Tag.className = "SectionSubBox_Tag";
            SectionSubBox_Tag.innerText = Tag;
            SectionSubBox.children[2].appendChild(SectionSubBox_Tag);
        }
    }

    // Techstack
    var List_Techstack = document.getElementById("List_Techstack");
    List_Techstack.innerHTML = "";
    for (const Item of Data.Techstack) {
        var TechStackCategory = document.createElement("li");
        TechStackCategory.className = "TechStackCategory";
        List_Techstack.appendChild(TechStackCategory);

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

function InitializeContent() {
    const Query = GetQueryParams(document.location.search);

    UpdateContent(Query?.Lang?.toLowerCase() == "eng" ? Content.ENG : Content.GER);
}

function ChangeLanguage(Lang) {
    var Flippable = document.getElementsByClassName("Flippable");
    for (var Item of Flippable) {
        Item.classList.remove("FlipStop");
        Item.classList.add("FlipStart");
    }

    setTimeout(() => {
        if ("URLSearchParams" in window) {
            const url = new URL(window.location);
            url.searchParams.set("Lang", Lang);
            history.pushState(null, "", url);
        }

        UpdateContent(Lang == "ENG" ? Content.ENG : Content.GER);

        var Flippable = document.getElementsByClassName("Flippable");
        for (var Item of Flippable) {
            Item.classList.remove("FlipStart");
            Item.classList.add("FlipStop");
        }
    }, 500);
}
