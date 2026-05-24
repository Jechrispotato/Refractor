/* ===================================================
   Mermaid Flowchart Visualizer — app.js
   =================================================== */

/* ---- Predefined diagrams from diagrams.md ---- */
const DIAGRAMS = [
  {
    label: 'Fig 1 — Conceptual Model',
    code: `flowchart TB
    subgraph Input["INPUT"]
        I1[/Knowledge Requirements/]
        I2[/Software Requirements/]
        I3[/Hardware Requirements/]
    end

    subgraph Process["PROCESS"]
        P1[Requirements Gathering]
        P2[System Design]
        P3[Development]
        P4[Testing]
        P5[Evaluation]
        P6[Review and Improvement]
    end

    subgraph Output["OUTPUT"]
        O1[/E-Services Portal/]
        O2[/Service Directory & Citizen Guide/]
        O3[/Issue Reporting & Request Tracking/]
        O4[/News, Forum, Chatbot, Maps/]
        O5[/LGU Admin & Super Admin Dashboards/]
    end

    subgraph Evaluation["EVALUATION"]
        E1[/Functionality, Usability,
Performance & Effectiveness/]
    end

    Input --> Process --> Output --> Evaluation`
  },
  {
    label: 'Fig 2 — Project Design',
    code: `flowchart TB
    subgraph Users["👥 Users"]
        C[Citizen<br/>Mobile App]
        SA[Super Administrator<br/>Web Browser]
        LA[LGU Administrator<br/>Web Browser]
        LP[LGU Personnel<br/>Web Browser]
    end

    subgraph Backend["🖥️ AGAPP Backend"]
        API[Node.js + NestJS API]
    end

    subgraph Storage["💾 Data Storage"]
        DB[(PostgreSQL + PostGIS)]
        Stor[Supabase Storage<br/>Photos/Attachments]
    end

    C <-->|HTTP/REST| API
    SA <-->|HTTP/REST| API
    LA <-->|HTTP/REST| API
    LP <-->|HTTP/REST| API
    API <-->|SQL| DB
    API <-->|Upload/Download| Stor`
  },
  {
    label: 'Fig 3A — Super Admin Auth',
    code: `flowchart TD
    Start([Start]) --> Login[/Enter Email and Password/]
    Login --> Auth{Authenticated?}
    Auth -->|No| Login
    Auth -->|Yes| Main[Main Interface]
    Main --> OP1((A))
    Main --> OP2((B))`
  },
  {
    label: 'Fig 3B — Super Admin Core Mgmt',
    code: `flowchart TD
    OP1((A)) --> LM[LGU Management]
    OP1 --> CA[Cross-LGU Analytics]
    OP1 --> FF[Feature Flags]

    LM --> Provision[Register New LGU Municipality]
    LM --> Deactivate[Deactivate Existing LGU]
    LM --> EditLGU[Edit LGU Details]

    CA --> Metrics[View Aggregated Metrics]
    CA --> Leader[Leaderboards: Resolution Time & Satisfaction]

    FF --> Toggle[Enable or Disable Modules per LGU]

    Provision --> Done([End])
    Deactivate --> Done
    EditLGU --> Done
    Metrics --> Done
    Leader --> Done
    Toggle --> Done`
  },
  {
    label: 'Fig 3C — Super Admin Tools',
    code: `flowchart TD
    OP2((B)) --> Comp[Compliance]
    OP2 --> Settings[Configure Auth, Notification & Storage]
    OP2 --> UM[Oversee Accounts Across All LGUs]
    OP2 --> Logout([End])

    Comp --> Audit[Monitor Audit Logs]
    Comp --> DPO[Check DPO Designation Status]
    Comp --> DPA[Review Data Privacy Artifacts]

    Audit --> Done([End])
    DPO --> Done
    DPA --> Done
    Settings --> Done
    UM --> Done`
  },
  {
    label: 'Fig 4A — LGU Admin Auth',
    code: `flowchart TD
    Start([Start]) --> Login[/Enter Email and Password/]
    Login --> Auth{Authenticated?}
    Auth -->|No| Login
    Auth -->|Yes| Main[Main Interface]
    Main --> OP1((C))
    Main --> OP2((D))`
  },
  {
    label: 'Fig 4B — LGU Admin Core Ops',
    code: `flowchart TD
    OP1((C)) --> Dash[Dashboard]
    OP1 --> SR[Service Requests]
    OP1 --> IR[Issue Reports]
    OP1 --> News[News and Announcements]
    OP1 --> Forum[Forum Moderation]

    Dash --> Metrics[View Real-Time Municipal Metrics]
    SR --> Queue[Access Citizen Document Applications]
    IR --> MapQueue[Monitor GPS-Based Citizen Reports]

    News --> Publish[Publish Official Advisories]
    Forum --> Moderate[Review Flagged Posts]

    Metrics --> Done([End])
    Queue --> Done
    MapQueue --> Done
    Publish --> Done
    Moderate --> Done`
  },
  {
    label: 'Fig 4C — LGU Admin Functions',
    code: `flowchart TD
    OP2((D)) --> OA[Configure Report Routing Rules]
    OP2 --> KB[Maintain Chatbot Source Documents]
    OP2 --> UM[Oversee LGU Staff Accounts]
    OP2 --> Logout([End])

    OA --> Done([End])
    KB --> Done
    UM --> Done`
  },
  {
    label: 'Fig 5 — Dashboard',
    code: `flowchart TD
    Start([Start]) --> Open[Open Dashboard]
    Open --> Gather[Gather Key Metrics]
    Gather --> Display[/Display Graphs and Heatmap of Municipality/]
    Display --> Filter{Apply Filters?}
    Filter -->|Yes| Adjust[Adjust Metrics by Date, Barangay, Category or Status]
    Filter -->|No| Generate[Generate Report]
    Adjust --> Generate
    Generate --> Export[/Print or Export Report/]
    Export --> End([End])`
  },
  {
    label: 'Fig 6 — Service Requests (LGU Admin)',
    code: `flowchart TD
    Start([Start]) --> Open[Open Service Requests Page]
    Open --> Queue[/Queue of Incoming Citizen Document Applications/]
    Queue --> Filter{Apply Filters?}
    Filter -->|Yes| Filtered[Filter by Service Type, Status or Office]
    Filter -->|No| Action[Select Application from Queue]
    Filtered --> Action
    Action --> Decision{Select Action}
    Decision -->|Update Status| Update[Move to Submitted, In Progress or Resolved]
    Decision -->|Assign Personnel| Assign[Assign to LGU Staff]
    Decision -->|Attach Document| Attach[Attach Released Document]
    Decision -->|Reject| Reject[Reject with Stated Reason]
    Update --> Log[Record State Transition in Audit Log]
    Assign --> Log
    Attach --> Log
    Reject --> Log
    Log --> End([End])`
  },
  {
    label: 'Fig 7 — Issue Reports (LGU Admin)',
    code: `flowchart TD
    Start([Start]) --> Open[Open Issue Reports Page]
    Open --> MapView[/Map View of All Open Reports/]
    Open --> Queue[/Queue Grouped by Category/]
    Queue --> AutoRoute[Auto-Routing Engine Assigns to Office]
    AutoRoute --> Decision{Admin Action}
    Decision -->|Verify| Acknowledge[Acknowledge Report]
    Decision -->|Reroute| Reroute[Reroute to Another Office]
    Decision -->|Reject| Reject[Reject with Stated Reason]
    Acknowledge --> Status[Update Status]
    Reroute --> Status
    Status --> Notify[/Push Notification Sent to Citizen/]
    Notify --> Resolved{Resolved?}
    Resolved -->|No| Status
    Resolved -->|Yes| Log[/Generate Printable Resolution Log/]
    Reject --> End([End])
    Log --> End`
  },
  {
    label: 'Fig 8 — News and Announcements',
    code: `flowchart TD
    Start([Start]) --> Open[Open News and Announcements Page]
    Open --> PostList[/List of Existing Announcements/]
    PostList --> Action{Select Action}
    Action -->|Create New| Draft[Open Draft Editor]
    Action -->|Edit Existing| Edit[Edit Selected Post]
    Draft --> Attach[Attach Images or PDFs]
    Edit --> Attach
    Attach --> Schedule{Schedule for Later?}
    Schedule -->|Yes| SetDate[Set Publish Date and Time]
    Schedule -->|No| Publish[Publish Immediately]
    SetDate --> Wait[Wait for Scheduled Date]
    Wait --> Publish
    Publish --> Visible[/Post Visible in Citizen Mobile App/]
    Visible --> Notify[/Push Notification Sent to Citizens/]
    Notify --> End([End])`
  },
  {
    label: 'Fig 9 — Forum Moderation',
    code: `flowchart TD
    Start([Start]) --> Open[Open Forum Moderation Page]
    Open --> NewPost[/Citizen Submits New Post/]
    NewPost --> Filter[Automated Profanity Filter and Image Safety Scan]
    Filter --> Pass{Passes Filter?}
    Pass -->|Yes| Publish[Publish Post Immediately]
    Pass -->|No| Queue[Place in Moderation Queue]
    Queue --> Review[Admin Reviews Queued Post]
    Review --> Decision{Admin Decision}
    Decision -->|Approve| Publish
    Decision -->|Edit| EditPost[Edit Post Content]
    EditPost --> Publish
    Decision -->|Reject| Reject[Reject with Stated Reason]
    Publish --> Notify1[/Citizen Notified: Post Published/]
    Reject --> Notify2[/Citizen Notified: Post Rejected/]
    Notify1 --> Log[Action Logged]
    Notify2 --> Log
    Log --> End([End])`
  },
  {
    label: 'Fig 10 — Office Assignments',
    code: `flowchart TD
    Start([Start]) --> Open[Open Office Assignments Page]
    Open --> View[/View Current Routing Ruleset/]
    View --> Action{Select Action}
    Action -->|Add New Rule| Add[Add New Routing Rule]
    Action -->|Edit Existing| Edit[Edit Selected Rule]
    Action -->|Archive| Archive[Archive Outdated Rule]
    Add --> Map[Map Report Category and Barangay]
    Edit --> Map
    Map --> Office[Assign to Target LGU Office]
    Office --> SLA[Set RA 11032 Service-Level Category]
    SLA --> Save[Save Rule]
    Archive --> Save
    Save --> Apply[Apply to All Newly Received Reports]
    Apply --> End([End])`
  },
  {
    label: 'Fig 11A — User Mgmt Access',
    code: `flowchart TD
    Start([Start]) --> Open[Open User Management Page]
    Open --> Users[/View List of User Accounts/]
    Users --> Filter{Apply Filters?}
    Filter -->|Yes| Search[Filter by Role or Status]
    Filter -->|No| OP1((E))
    Search --> OP1`
  },
  {
    label: 'Fig 11B — User Mgmt Actions',
    code: `flowchart TD
    OP1((E)) --> Action{Select Action}
    Action -->|Add User| Add[Add New User Account]
    Action -->|Edit User| Edit[Edit User Details]
    Action -->|Archive User| Archive[Archive User Account]
    Add --> Save[Save Changes]
    Edit --> Save
    Archive --> Save
    Save --> Done([End])
    Action -->|Generate Report| OP2((F))`
  },
  {
    label: 'Fig 11C — User Mgmt Reports',
    code: `flowchart TD
    OP2((F)) --> Report[/Generate User Report/]
    OP2 --> Logs[/View User Activity Logs/]
    OP2 --> Backup[Perform Backup or Restore]

    Report --> End([End])
    Logs --> End
    Backup --> End`
  },
  {
    label: 'Fig 12A — Citizen Auth',
    code: `flowchart TD
    Start([Start]) --> Choice{New or Returning?}
    Choice -->|New Citizen| SignUp[/Enter Email and Password/]
    Choice -->|Returning| Login[/Enter Credentials or OTP/]
    SignUp --> OTP[Send OTP to Email]
    OTP --> Verify{OTP Verified?}
    Verify -->|No| OTP
    Verify -->|Yes| Profile[Complete Profile Form]
    Login --> Auth{Authenticated?}
    Auth -->|No| Login
    Auth -->|Yes| Main[Main Interface]
    Profile --> Main
    Main --> OP1((G))
    Main --> OP2((H))`
  },
  {
    label: 'Fig 12B — Citizen Core Svcs',
    code: `flowchart TD
    OP1((G)) --> SD[Service Directory]
    OP1 --> SR[Submit Report]
    OP1 --> TR[Track Report]
    OP1 --> News[News and Announcements]
    OP1 --> Map[Town Map]
    OP1 --> SOS[Emergency Hotlines]
    OP1 --> Forum[Community Forum]
    OP1 --> Chat[Chatbot]

    SD --> Apply[Apply for LGU Documents]
    SR --> Report[Submit GPS-Based Issue Report]
    TR --> Status[/Check Submission Status/]
    News --> ViewNews[View Page]
    Map --> I((I))
    SOS --> J((J))
    Forum --> K((K))
    Chat --> L((L))

    Apply --> Done([End])
    Report --> Done
    Status --> Done
    ViewNews --> Done`
  },
  {
    label: 'Fig 12C — Citizen Account',
    code: `flowchart TD
    OP2((H)) --> Settings[Manage Account Settings]
    OP2 --> History[View Submission History]
    OP2 --> Logout([End])

    Settings --> Done([End])
    History --> Done`
  },
  {
    label: 'Fig 13 — Service Directory (Citizen)',
    code: `flowchart TD
    Start([Start]) --> Browse[Browse Catalog of Available LGU Services]
    Browse --> Select[Select Service]
    Select --> Form[/Fill Out Guided Application Form/]
    Form --> Draft{Save as Draft?}
    Draft -->|Yes| Save[Save Draft]
    Draft -->|No| Submit[Submit Application]
    Save --> Continue{Continue Later?}
    Continue -->|Yes| Form
    Continue -->|No| End([End])
    Submit --> QR[/Generate Reference Number and QR Code/]
    QR --> Present[Present QR Code at Municipal Hall Counter]
    Present --> End`
  },
  {
    label: 'Fig 14 — Submit Report (Citizen)',
    code: `flowchart TD
    Start([Start]) --> Form[Open Report Submission Form]
    Form --> Category[/Select Report Category/]
    Category --> Photo[/Capture Photo Using In-App Camera/]
    Photo --> GPS[/Confirm GPS Location on Map/]
    GPS --> Check{Category is Pothole?}

    Check -->|Yes| YOLO[Run On-Device YOLOv8n Pothole Detector]
    YOLO --> Confidence{Confidence Above Threshold?}
    Confidence -->|Yes| Desc[/Add Optional Description/]
    Confidence -->|No| Warn[Show Low-Confidence Warning]
    Warn --> Confirm{Citizen Confirms Submission?}
    Confirm -->|Yes| Desc
    Confirm -->|No| Cancel[Cancel Report]

    Check -->|No| Desc
    Desc --> Submit[Submit Report]
    Submit --> Ref[/Generate Reference Number/]
    Ref --> Track[Add to Citizen Tracking List]
    Track --> Success([End])
    Cancel --> End([End])`
  },
  {
    label: 'Fig 15 — Track Report (Citizen)',
    code: `flowchart TD
    Start([Start]) --> Open[Open Track Report Screen]
    Open --> List[/View List of Service Requests and Issue Reports/]
    List --> Select[Select a Submission]
    Select --> Status[/View Current Status and Assigned Office/]
    Status --> StatusVal{Current Status}
    StatusVal -->|Submitted| S1[Submitted]
    StatusVal -->|Under Review| S2[Under Review]
    StatusVal -->|In Progress| S3[In Progress]
    StatusVal -->|Rejected| S4[Rejected]
    StatusVal -->|Resolved| S5[Resolved]
    S5 --> Rate{Rate the Resolution?}
    Rate -->|Yes| Feedback[/Provide Feedback and Rating/]
    Feedback --> Score[Update LGU Citizen-Satisfaction Score]
    Rate -->|No| End([End])
    S1 --> End
    S2 --> End
    S3 --> End
    S4 --> End
    Score --> End`
  },
  {
    label: 'Fig 16 — Town Map (Citizen)',
    code: `flowchart TD
    Start((I)) --> Open[Open Town Map]
    Open --> OSM[/Render OpenStreetMap Tiles with Key Landmarks/]
    OSM --> Action{User Action}
    Action -->|Search| Search[/Enter Landmark Name/]
    Action -->|Tap Pin| Details[View Landmark Details]
    Action -->|Get Directions| Navigate[Get Route to Location]
    Search --> Pin[Drop Pin on Matching Landmark]
    Pin --> Details
    Details --> Info[/Display Office Hours and Contact Information/]
    Navigate --> Route[/Display Route to Selected Location/]
    Info --> End([End])
    Route --> End`
  },
  {
    label: 'Fig 17 — Emergency Hotlines (Citizen)',
    code: `flowchart TD
    Start((J)) --> Open[Open Emergency Hotlines Screen]
    Open --> Select[/Select a Hotline/]
    Select --> Type{Hotline Type}
    Type -->|Police| Call1[Place Call to Police]
    Type -->|Fire Department| Call2[Place Call to Fire Dept]
    Type -->|Hospital| Call3[Place Call to Hospital]
    Type -->|MDRRMO| Call4[Place Call to MDRRMO Duty Desk]
    Call1 --> SOS{Activate SOS?}
    Call2 --> SOS
    Call3 --> SOS
    Call4 --> SOS
    SOS -->|Yes| Share[/Share GPS Location with MDRRMO Duty Desk/]
    SOS -->|No| End([End])
    Share --> Duty[Notify MDRRMO Duty Desk]
    Duty --> End`
  },
  {
    label: 'Fig 18 — Community Forum (Citizen)',
    code: `flowchart TD
    Start((K)) --> Open[Open Community Forum]
    Open --> Action{Select Action}
    Action -->|Browse| Browse[/Browse Recent Posts/]
    Action -->|Search| Search[/Enter Keyword/]
    Action -->|Compose| Compose[/Write New Forum Post/]
    Browse --> Interact[Like, Comment on, or Report a Post]
    Search --> Results[/Display Matching Posts/]
    Results --> Interact
    Compose --> Filter[Automated Profanity Filter and Image Safety Scan]
    Filter --> Pass{Passes Filter?}
    Pass -->|Yes| Published[Post Published Immediately]
    Pass -->|No| Await[Post Placed in Moderation Queue]
    Published --> Notify1[/Citizen Notified: Post Published/]
    Await --> Notify2[/Citizen Notified: Post Pending Moderation/]
    Notify1 --> End([End])
    Notify2 --> End
    Interact --> End`
  },
  {
    label: 'Fig 19 — Chatbot (Citizen)',
    code: `flowchart TD
    Start((L)) --> Open[Open Chatbot Interface]
    Open --> Input[/Citizen Types a Question/]
    Input --> FAQ[Search LGU FAQ Knowledge Base]
    FAQ --> Match{FAQ Match Found?}

    Match -->|Yes| Answer[Retrieve Matching FAQ Answer]
    Answer --> Source[/Return Answer with Source Document/]
    Source --> Done([End])

    Match -->|No| Gemini[Query Gemini AI for Answer]
    Gemini --> GemRes[/Return Gemini-Generated Answer/]
    GemRes --> Done`
  },
  {
    label: 'Fig 20 — Account Settings (Citizen)',
    code: `flowchart TD
    Start([Start]) --> Open[Open Account Settings Screen]
    Open --> Review[/Review Current Preferences/]
    Review --> Change{Changes Needed?}
    Change -->|No| Main[Return to Main Interface]
    Change -->|Yes| Edit{Select Setting to Edit}
    Edit -->|Password| Pass[/Enter New Password/]
    Edit -->|Notifications| Notif[/Set Notification Preferences/]
    Edit -->|Language| Lang[/Select Language: English or Filipino/]
    Edit -->|Theme| Theme[/Select Theme: Light or Dark Mode/]
    Pass --> Submit[Submit Changes]
    Notif --> Submit
    Lang --> Submit
    Theme --> Submit
    Submit --> Confirm[/Confirm Modifications Applied/]
    Confirm --> Links[/View External Links: Official Facebook and YouTube/]
    Links --> Main
    Main --> End([End])`
  },
  {
    label: 'Fig 32 — Use Case: Super Administrator',
    code: `flowchart LR
    SA([Super Administrator])

    subgraph AGAPP[" "]
        UC1([Register LGU Municipalities])
        UC2([Deactivate LGU Accounts])
        UC3([Manage Feature Flags])
        UC4([Monitor Cross-LGU Analytics])
        UC5([Supervise Compliance])
        UC6([Oversee User Accounts])
    end

    SA --> UC1
    SA --> UC2
    SA --> UC3
    SA --> UC4
    SA --> UC5
    SA --> UC6`
  },
  {
    label: 'Fig 33 — Use Case: LGU Administrator',
    code: `flowchart LR
    LA([LGU Administrator])

    subgraph AGAPP[" "]
        UC1([Manage Service Requests])
        UC2([Process Issue Reports])
        UC3([Configure Office Assignments])
        UC4([Publish News])
        UC5([Moderate Forum])
        UC6([Maintain Knowledge Base])
        UC7([Manage Staff Accounts])
        UC8([Monitor RA 11032 Compliance])
    end

    LA --> UC1
    LA --> UC2
    LA --> UC3
    LA --> UC4
    LA --> UC5
    LA --> UC6
    LA --> UC7
    LA --> UC8`
  },
  {
    label: 'Fig 34 — Use Case: LGU Personnel',
    code: `flowchart LR
    LP([LGU Personnel])

    subgraph AGAPP[" "]
        UC1([View Assigned Reports])
        UC2([Update Status])
        UC3([Attach Documents])
        UC4([Post Status Updates])
        UC5([Add Internal Notes])
    end

    LP --> UC1
    LP --> UC2
    LP --> UC3
    LP --> UC4
    LP --> UC5`
  },
  {
    label: 'Fig 35 — Use Case: Citizen',
    code: `flowchart LR
    CIT([Citizen])

    subgraph AGAPP[" "]
        UC1([Sign Up / Login])
        UC2([Apply for Documents])
        UC3([Submit Issue Report])
        UC4([Track Submission Status])
        UC5([View News])
        UC6([Open Town Map])
        UC7([Call Emergency Hotlines])
        UC8([Participate in Forum])
        UC9([Ask Chatbot])
    end

    CIT --> UC1
    CIT --> UC2
    CIT --> UC3
    CIT --> UC4
    CIT --> UC5
    CIT --> UC6
    CIT --> UC7
    CIT --> UC8
    CIT --> UC9`
  },
  {
    label: 'Fig 36 — Agile Scrum Model',
    code: `flowchart LR
    subgraph Sprint0["Sprint 0: Initiation"]
        S0[Client Interviews<br/>Scope Document<br/>Wireframes<br/>DB Schema]
    end

    subgraph Sprint1["Sprint 1: Auth"]
        S1[Login/OTP<br/>Role Access<br/>Data Isolation]
    end

    subgraph Sprint2["Sprint 2: Service Directory"]
        S2[Content Modules<br/>Service Catalog<br/>Offline Caching]
    end

    subgraph Sprint3["Sprint 3: Issue Reporting + ML"]
        S3[Geotagged Reports<br/>YOLOv8n Detection<br/>Status Workflow]
    end

    subgraph Sprint4["Sprint 4: News/Forum/Chatbot"]
        S4[News Publishing<br/>Forum Moderation<br/>FAQ Chatbot + Gemini]
    end

    subgraph Sprint5["Sprint 5: Admin Dashboards"]
        S5[Routing Rules<br/>SLA Tracker<br/>Analytics]
    end

    subgraph Sprint6["Sprint 6: Hardening"]
        S6[Security Review<br/>Performance Testing<br/>Privacy Compliance]
    end

    subgraph Sprint7["Sprint 7: UAT + Capstone Deployment"]
        S7[UAT with Respondents<br/>Bug Fixes<br/>Expo / APK + Free-Tier Cloud Deploy]
    end

    Sprint0 --> Sprint1 --> Sprint2 --> Sprint3 --> Sprint4 --> Sprint5 --> Sprint6 --> Sprint7

    style Sprint0 fill:#e1f5fe
    style Sprint1 fill:#e8f5e9
    style Sprint2 fill:#fff3e0
    style Sprint3 fill:#fce4ec
    style Sprint4 fill:#f3e5f5
    style Sprint5 fill:#e0f2f1
    style Sprint6 fill:#fff8e1
    style Sprint7 fill:#d1c4e9`
  },
];

/* ---- DOM References ---- */
const inputEl        = document.getElementById('mermaid-input');
const previewEl      = document.getElementById('preview-container');
const placeholderEl  = document.getElementById('preview-placeholder');
const btnRender      = document.getElementById('btn-render');
const btnLoadSample  = document.getElementById('btn-load-sample');
const btnClear       = document.getElementById('btn-clear');
const btnSVG         = document.getElementById('btn-download-svg');
const btnPNG         = document.getElementById('btn-download-png');
const diagramListEl  = document.getElementById('diagram-list');

/* ---- State ---- */
let hasValidDiagram = false;   // tracks whether a valid SVG is currently rendered
let debounceTimer   = null;    // holds the debounce timeout ID

/* ---- Mermaid Initialization ---- */
mermaid.initialize({
  startOnLoad: false,          // we call mermaid.run() manually
  theme: 'default',
  securityLevel: 'loose',      // allows richer diagrams (subgraphs, etc.)
  flowchart: {
    htmlLabels: true,          // allows <br/> in node labels
    curve: 'basis',
  },
  fontFamily: "'Segoe UI', system-ui, sans-serif",
});

/* ===================================================
   RENDER FUNCTION
   =================================================== */
async function renderDiagram() {
  const code = inputEl.value.trim();

  // Nothing to render — show placeholder
  if (!code) {
    showPlaceholder();
    return;
  }

  // Show a spinner while Mermaid processes
  showLoading();

  try {
    // Pre-validate the syntax before attempting full render
    await mermaid.parse(code);

    // Create a fresh wrapper div for Mermaid to render into
    const outputDiv = document.createElement('div');
    outputDiv.className = 'mermaid-output';

    // mermaid.render() returns { svg } — we use a unique ID each call
    const renderId = 'mermaid-render-' + Date.now();
    const { svg } = await mermaid.render(renderId, code);

    outputDiv.innerHTML = svg;

    // Swap preview content with the rendered SVG
    clearPreview();
    previewEl.appendChild(outputDiv);

    // Mark as valid and enable export buttons
    hasValidDiagram = true;
    setExportEnabled(true);

  } catch (err) {
    // Show a user-friendly error instead of crashing
    showError(err);
    hasValidDiagram = false;
    setExportEnabled(false);
  }
}

/* ===================================================
   PREVIEW STATE HELPERS
   =================================================== */

/** Remove all children from the preview container */
function clearPreview() {
  while (previewEl.firstChild) {
    previewEl.removeChild(previewEl.firstChild);
  }
}

/** Show the initial empty-state placeholder */
function showPlaceholder() {
  clearPreview();
  hasValidDiagram = false;
  setExportEnabled(false);
  previewEl.appendChild(placeholderEl);
}

/** Show a spinner while rendering */
function showLoading() {
  clearPreview();
  const loadingEl = document.createElement('div');
  loadingEl.className = 'preview-loading';
  loadingEl.innerHTML = `<div class="spinner"></div><span>Rendering…</span>`;
  previewEl.appendChild(loadingEl);
}

/** Display a formatted error box in the preview panel */
function showError(err) {
  clearPreview();
  const box = document.createElement('div');
  box.className = 'error-box';

  // Extract a clean message from the Mermaid error object
  const rawMessage = err?.message || String(err);
  const cleanMessage = rawMessage
    .replace(/^\s*Error:\s*/i, '')
    .replace(/\[object Object\]/g, '')
    .trim();

  box.innerHTML = `
    <div class="error-title">⚠ Invalid Mermaid Syntax</div>
    <pre>${escapeHtml(cleanMessage || 'Unknown error. Check your Mermaid syntax.')}</pre>
  `;
  previewEl.appendChild(box);
}

/** Enable or disable the export buttons */
function setExportEnabled(enabled) {
  btnSVG.disabled = !enabled;
  btnPNG.disabled = !enabled;
}

/** Escape HTML special characters for safe display inside <pre> */
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ===================================================
   DEBOUNCED AUTO-RENDER
   Waits 600ms after the user stops typing, then renders.
   =================================================== */
inputEl.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(renderDiagram, 600);
});

/* ===================================================
   BUTTON EVENT HANDLERS
   =================================================== */

/** Manual render button */
btnRender.addEventListener('click', () => {
  clearTimeout(debounceTimer);
  renderDiagram();
});

/** Load the built-in sample flowchart (Fig 3) */
btnLoadSample.addEventListener('click', () => {
  loadDiagram(2);  // index 2 = Figure 3
});

/** Clear the editor and reset the preview */
btnClear.addEventListener('click', () => {
  inputEl.value = '';
  clearTimeout(debounceTimer);
  showPlaceholder();
});

/* ===================================================
   SVG EXPORT
   Serializes the rendered <svg> element and downloads it.
   =================================================== */
btnSVG.addEventListener('click', () => {
  if (!hasValidDiagram) return;

  const svgEl = previewEl.querySelector('svg');
  if (!svgEl) return;

  // Serialize SVG to a string
  const serializer = new XMLSerializer();
  let svgString = serializer.serializeToString(svgEl);

  // Ensure the SVG has the correct XML namespace declaration
  if (!svgString.includes('xmlns="http://www.w3.org/2000/svg"')) {
    svgString = svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  }

  // Create a Blob and trigger download
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  triggerDownload(URL.createObjectURL(blob), 'flowchart.svg');
});

/* ===================================================
   PNG EXPORT
   Uses html2canvas to capture the preview as a canvas,
   then downloads the resulting image as a PNG file.
   =================================================== */
btnPNG.addEventListener('click', async () => {
  if (!hasValidDiagram) return;

  const outputDiv = previewEl.querySelector('.mermaid-output');
  if (!outputDiv) return;

  try {
    // Temporarily disable scrolling/clipping so the full diagram is captured
    const originalOverflow = previewEl.style.overflow;
    previewEl.style.overflow = 'visible';

    const canvas = await html2canvas(outputDiv, {
      backgroundColor: '#ffffff',
      scale: 2,                  // 2× for sharper PNG output
      useCORS: true,
      logging: false,
    });

    previewEl.style.overflow = originalOverflow;

    // Convert canvas to PNG and download
    canvas.toBlob((blob) => {
      triggerDownload(URL.createObjectURL(blob), 'flowchart.png');
    }, 'image/png');

  } catch (err) {
    alert('PNG export failed: ' + (err?.message || 'Unknown error'));
  }
});

/* ===================================================
   DOWNLOAD HELPER
   Creates a temporary <a> tag to trigger file download.
   =================================================== */
function triggerDownload(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Revoke the object URL after a short delay to free memory
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/* ===================================================
   DIAGRAM LIST
   =================================================== */

let activeDiagramIndex = -1;

/** Load a diagram by index into the editor and render it */
function loadDiagram(index) {
  activeDiagramIndex = index;
  inputEl.value = DIAGRAMS[index].code;
  clearTimeout(debounceTimer);
  renderDiagram();
  // Update active state on buttons
  document.querySelectorAll('.diagram-list-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
}

/** Build the diagram list buttons in the left panel */
function buildDiagramList() {
  DIAGRAMS.forEach((diagram, index) => {
    const btn = document.createElement('button');
    btn.className = 'diagram-list-btn';
    btn.textContent = diagram.label;
    btn.title = diagram.label;
    btn.addEventListener('click', () => loadDiagram(index));
    diagramListEl.appendChild(btn);
  });
}

/* ===================================================
   INITIAL PAGE LOAD
   =================================================== */
window.addEventListener('DOMContentLoaded', () => {
  buildDiagramList();
  loadDiagram(2);  // start on Figure 3A (Super Admin Auth)
});
