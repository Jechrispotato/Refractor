# CHAPTER III

## **CHAPTER III**

## **METHODOLOGY**

### **Project Design**

*Figure 2. Project Design of the Automated Governance and Public Service Platform*

Figure 2 presents the project design of the Automated Governance and Public Service Platform (AGAPP). The diagram identifies four user roles that will interact with the platform: the Citizen, who will access the system through the AGAPP mobile application on Android and iOS devices, and the Super Administrator, the LGU Administrator, and the LGU Personnel, who will each access the system through a web browser. All four user clients will communicate with the AGAPP backend, implemented as a Node.js application built on the NestJS framework, over HTTP/REST. The backend will in turn connect to two storage components: a PostgreSQL database extended with PostGIS, used over SQL for citizen accounts, service requests, geotagged issue reports, news posts, forum entries, chatbot knowledge-base entries, and audit logs; and Supabase Storage, used for uploading and downloading photos and other attachments submitted by citizens. The two-way arrows between the clients and the backend, and between the backend and each storage component, indicate that data will be both sent and received during normal operation, allowing personnel inside the Municipal Hall and citizens from any location to connect to the system, retrieve information, and save new submissions. Different groups will use the platform for different purposes, with separate levels of access and responsibilities based on their roles within the local government service-delivery process.

### **Flowchart**

Several flowcharts in this chapter are split into sub-figures connected by lettered off-page connectors (A through L). Each lettered circle on one sub-figure points to the matching circle on the continuation sub-figure, so that the workflow can be read across pages without losing continuity.

*Figure 3A. Flowchart of the Main Interface for Super Administrator — Authentication*

Figure 3A presents the authentication portion of the Super Administrator workflow. The process will begin when the Super Administrator opens the dashboard, enters an email address and a password, and is checked against the authentication service. If the credentials are not valid, the form will be re-displayed for another attempt. If they are valid, the Super Administrator will be brought to the Main Interface, from which two off-page connectors, labeled A and B, will branch out to the next two sub-figures: A leads to Core Management (Figure 3B) and B leads to Admin Tools (Figure 3C).

*Figure 3B. Flowchart of the Main Interface for Super Administrator — Core Management*

Figure 3B continues from off-page connector A and presents the three core-management modules of the Super Administrator dashboard. From the Main Interface, the Super Administrator will be able to enter LGU Management, where they will register a new LGU municipality, deactivate an existing LGU, or edit the details of an LGU; Cross-LGU Analytics, where they will view aggregated metrics and leaderboards of resolution time and citizen-satisfaction scores across all LGUs; and Feature Flags, where they will enable or disable individual modules on a per-LGU basis. Every branch terminates at the End node.

*Figure 3C. Flowchart of the Main Interface for Super Administrator — Admin Tools*

Figure 3C continues from off-page connector B and presents the administrative tools of the Super Administrator. From the Main Interface, the Super Administrator will be able to open Compliance, where they will monitor audit logs, check the Data Protection Officer designation status of each LGU, and review the data-privacy artifacts; configure global authentication, notification, and storage settings; oversee user accounts across all LGUs; or log out. The Compliance branch and the other tools all terminate at the End node.

*Figure 4A. Flowchart of the Main Interface for LGU Administrator — Authentication*

Figure 4A presents the authentication portion of the LGU Administrator workflow. The LGU Administrator will enter an email address and a password, which will be validated by the authentication service. If the credentials are not valid, the form will be shown again. If they are valid, the LGU Administrator will reach the Main Interface, from which two off-page connectors, labeled C and D, will branch out: C leads to Core Operations (Figure 4B) and D leads to Admin Functions (Figure 4C).

*Figure 4B. Flowchart of the Main Interface for LGU Administrator — Core Operations*

Figure 4B continues from off-page connector C and presents the day-to-day modules of the LGU Administrator. From the Main Interface, the LGU Administrator will be able to open the Dashboard to view real-time municipal metrics, enter Service Requests to access citizen document applications, enter Issue Reports to monitor GPS-based citizen reports, open News and Announcements to publish official advisories, or open Forum Moderation to review flagged posts. Each branch concludes at the End node.

*Figure 4C. Flowchart of the Main Interface for LGU Administrator — Admin Functions*

Figure 4C continues from off-page connector D and presents the administrative configuration tools of the LGU Administrator. From the Main Interface, the LGU Administrator will be able to configure report routing rules, maintain the source documents used by the chatbot's knowledge base, oversee LGU staff accounts, or log out. Every branch terminates at the End node.

*Figure 5. Flowchart of the Dashboard for Super Administrator and LGU Administrator*

Figure 5 illustrates the dashboard reporting flow used by both the Super Administrator and the LGU Administrator. After opening the dashboard, the system will gather the key metrics and display them as graphs and a heatmap of the municipality. The administrator will then decide whether to apply filters; if so, the displayed metrics will be adjusted by date, barangay, category, or status before the report is generated, and otherwise the report will be generated directly. The final step will allow the administrator to print or export the report.

*Figure 6. Flowchart of Service Requests for LGU Administrator*

Figure 6 presents the workflow for handling citizen document applications. After the LGU Administrator opens the Service Requests page, the system will display the queue of incoming applications. The LGU Administrator will decide whether to apply filters; if so, the queue will be filtered by service type, status, or office. From the queue, the LGU Administrator will select an application and choose one of four actions: update its status to Submitted, In Progress, or Resolved; assign it to LGU staff; attach the released document; or reject it with a stated reason. Each of these actions will be recorded as a state transition in the audit log before the workflow ends.

*Figure 7. Flowchart of Issue Reports for LGU Administrator*

Figure 7 presents the workflow for handling GPS-based citizen reports. After the LGU Administrator opens the Issue Reports page, the system will provide a map view of all open reports as well as a queue grouped by category. The auto-routing engine will assign each new report to the responsible office. The LGU Administrator will then choose to acknowledge a report and verify it, reroute it to a different office, or reject it with a stated reason. Verified or rerouted reports will move into a status-update loop, and a push notification will be sent to the citizen on every transition. The loop will continue until the report is marked as resolved, at which point the system will generate a printable resolution log. Rejected reports will go directly to the End node.

*Figure 8. Flowchart of News and Announcements for LGU Administrator*

Figure 8 presents the publishing workflow for official LGU content. After opening the News and Announcements page, the LGU Administrator will see the list of existing announcements and decide to either create a new post in the draft editor or edit an existing post. After attaching any images or PDFs, they will choose whether to schedule the post; if scheduling is selected, the system will wait for the configured publish date before publishing, and otherwise the post will be published immediately. Once published, the post will become visible in the citizen mobile application, and a push notification will be sent to subscribed citizens.

*Figure 9. Flowchart of Forum Moderation for LGU Administrator*

Figure 9 presents the workflow for moderating the community forum from the LGU Administrator's side. When a citizen submits a new post, the system will run an automated profanity filter and an image safety scan. Posts that pass will be published immediately, while those that fail will be placed in a moderation queue for the LGU Administrator to review. From the queue, the LGU Administrator will approve a post, edit its content before publishing, or reject it with a stated reason. The citizen will be notified of the outcome — either that the post has been published or that it has been rejected — and the action will be recorded in the audit log.

*Figure 10. Flowchart of Office Assignments for LGU Administrator*

Figure 10 presents the configuration workflow for the auto-routing engine. After opening the Office Assignments page, the LGU Administrator will view the current routing ruleset and choose to add a new rule, edit an existing rule, or archive an outdated rule. When adding or editing a rule, the LGU Administrator will map a combination of report category and barangay to a target LGU office and assign a service-level category as defined by Republic Act No. 11032. Once the rule is saved — whether newly created, edited, or archived — the system will apply it to all newly received reports.

*Figure 11A. Flowchart of User Management — Access and Filter*

Figure 11A presents the access portion of the User Management workflow used by both the Super Administrator and the LGU Administrator. After opening the User Management page, the user list will be displayed. The administrator will then decide whether to apply filters; if so, the list will be filtered by role or status. In either case, the workflow will continue through off-page connector E into Figure 11B.

*Figure 11B. Flowchart of User Management — User Actions*

Figure 11B continues from off-page connector E and presents the actions that can be performed on a selected user. The administrator will choose to add a new user account, edit an existing user's details, or archive a user account. Whichever action is selected, the changes will be saved before the workflow ends. From the same action selector, the administrator may also choose to generate a report, which transitions through off-page connector F into Figure 11C.

*Figure 11C. Flowchart of User Management — Reporting*

Figure 11C continues from off-page connector F and presents the reporting and data-protection options of User Management. The administrator will be able to generate a user report, view the user activity logs, or perform a backup or restore. Each path terminates at the End node.

*Figure 12A. Flowchart of the Main Interface for Citizen — Authentication*

Figure 12A presents the authentication portion of the Citizen workflow. The citizen will first indicate whether they are a new or returning user. New citizens will provide an email address and a password, after which an email one-time password will be sent and verified before they complete a short profile form. Returning citizens will sign in with their credentials or with an emailed one-time password as an alternative for passwordless login or password recovery. After successful authentication, both paths converge at the Main Interface, from which two off-page connectors, labeled G and H, branch out: G leads to Core Services (Figure 12B) and H leads to Account Options (Figure 12C).

*Figure 12B. Flowchart of the Main Interface for Citizen — Core Services*

Figure 12B continues from off-page connector G and presents the citizen-facing services. From the Main Interface, eight branches are available. Service Directory leads to Apply for LGU Documents, Submit Report leads to Submit GPS-Based Issue Report, Track Report leads to Check Submission Status, and News and Announcements leads to a View Page; all four of these paths terminate at the End node. The remaining four services transition through off-page connectors to their dedicated flowcharts: Town Map continues through off-page connector I into Figure 16, Emergency Hotlines through off-page connector J into Figure 17, Community Forum through off-page connector K into Figure 18, and Chatbot through off-page connector L into Figure 19.

*Figure 12C. Flowchart of the Main Interface for Citizen — Account Options*

Figure 12C continues from off-page connector H and presents the secondary options of the Citizen Main Interface. The citizen will be able to manage their account settings, view their submission history, or log out, with each path terminating at the End node.

*Figure 13. Flowchart of the Service Directory for Citizen*

Figure 13 presents the citizen's document-application flow. The citizen will browse the catalog of available LGU services, select a service, and fill out the guided application form that captures only the data required for that service. The citizen will decide whether to save the form as a draft; if saved, the citizen may continue later, which loops back to the form, or end the session for now. If the form is submitted, the system will generate a reference number and a QR code, which the citizen will present at the Municipal Hall counter, after which the workflow ends.

*Figure 14. Flowchart of Submit Report for Citizen*

Figure 14 presents the GPS-based reporting flow. The citizen will open the report submission form, select a report category, capture a photo using the in-app camera, and confirm the GPS location on the map. If the selected category is Pothole, the on-device YOLOv8n pothole detector will run on the photo. If the model's confidence is above the configured threshold, the citizen will proceed to add an optional description; otherwise, a low-confidence warning will be shown, and the citizen will decide whether to confirm the submission anyway. If the citizen confirms, they will continue to the description step; if not, the report will be cancelled. For non-pothole categories, the description step is reached directly. After the citizen submits, the system will generate a reference number and add the report to the citizen's tracking list before the workflow ends.

*Figure 15. Flowchart of Track Report for Citizen*

Figure 15 presents the workflow for monitoring submissions. After opening the Track Report screen, the citizen will see the list of their service requests and issue reports and select one. The screen will then show the current status and the assigned office. The status branches into Submitted, Under Review, In Progress, Rejected, and Resolved. For Resolved submissions, the citizen will be asked whether they want to rate the resolution; if yes, they will provide feedback and a rating that will update the LGU's citizen-satisfaction score. All other status values lead directly to the End node.

*Figure 16. Flowchart of the Town Map for Citizen*

Figure 16 continues from off-page connector I and presents the interactive map flow. After opening the Town Map, the system will render OpenStreetMap tiles with key landmarks highlighted. The citizen will choose one of three actions: search for a landmark by name, tap a pin directly, or request directions. Searching will drop a pin on the matching landmark and lead to its details view, which will display office hours and contact information. Requesting directions will display a route to the selected location. Each path terminates at the End node.

*Figure 17. Flowchart of Emergency Hotlines for Citizen*

Figure 17 continues from off-page connector J and presents the one-tap emergency-contact flow. After opening the Emergency Hotlines screen, the citizen will select a hotline type — Police, Fire Department, Hospital, or the MDRRMO Duty Desk — and the device will place the corresponding outgoing call. After the call is initiated, the citizen will be asked whether to activate the SOS payload; if yes, the citizen's GPS location will be shared with the MDRRMO Duty Desk and the duty desk will be notified, and otherwise the workflow ends.

*Figure 18. Flowchart of the Community Forum for Citizen*

Figure 18 continues from off-page connector K and presents the moderated forum flow from the citizen's perspective. After opening the Community Forum, the citizen will choose to browse recent posts, search by keyword, or compose a new post. Browsing or searching leads to the post list, where the citizen will be able to like, comment on, or report a post. Composing a new post triggers the automated profanity filter and image safety scan; posts that pass the filter will be published immediately, while those that fail will be placed in a moderation queue. The citizen will be notified either that the post has been published or that it is pending moderation, and the workflow ends.

*Figure 19. Flowchart of the Chatbot for Citizen*

Figure 19 continues from off-page connector L and presents the chatbot flow. After opening the chatbot interface, the citizen will type a question, and the system will first search the LGU's curated FAQ knowledge base. If a matching FAQ entry is found, the system will return the matching answer together with its source document. If no FAQ match is found, the question will be forwarded to Gemini AI, which will generate an answer that the system will return to the citizen.

*Figure 20. Flowchart of Account Settings for Citizen*

Figure 20 presents the account-settings flow. After opening the Account Settings screen, the citizen will review the current preferences and decide whether changes are needed. If not, the citizen will return to the Main Interface. Otherwise, the citizen will choose which setting to edit — password, notification preferences, language (English or Filipino), or theme (light mode or dark mode) — and submit the changes. The system will then confirm that the modifications have been applied and present the external links to the LGU's official Facebook page and YouTube channel before returning the citizen to the Main Interface.

### **Wireframes**

*Figure 21. Wireframe for the Citizen Sign-Up*

Figure 21 illustrates the Sign-Up screen of AGAPP. At the top of the screen is the application logo, followed by the wordmark "Agapp." and the tagline "Automated Governance and Public Service Platform." The citizen will be able to authenticate using a passwordless flow: an email input field labeled with the sample placeholder "user@email.com," a "Send Passcode" button that will trigger a one-time passcode to the supplied email address, a six-box passcode entry strip labeled "Enter Passcode," and a Login button. Below the login controls is a "Permissions & Consent" panel containing two opt-in checkboxes, one for GPS Geofence Tracking and one for Emergency Push Notifications. The layout is intentionally minimal so that first-time users will be able to complete registration quickly.

*Figure 22. Wireframe for the Citizen Main Interface*

Figure 22 illustrates the Main Interface of the AGAPP mobile application. The top of the screen carries a header showing the active municipality (for example, "Municipality of Liliw") and a "Switch LGU" link at the upper right that will allow the citizen to change the active LGU. Directly below the header is a banner block displaying "Bayan ng Liliw" with the secondary line "Citizen Service & Governance Portal." The body of the screen is organized into two stacked sections. The first section, labeled "E-Services," presents a horizontally scrollable carousel of feature tiles — visible examples include Documents, Potholes, and AI Assistant — with left and right arrow indicators showing that more tiles can be reached by swiping. The second section, labeled "Emergency Access," provides one-tap hotline buttons for Police Department (PNP) and Fire Protection Bureau. A bottom navigation bar with five icon shortcuts persists at the foot of the screen.

*Figure 23. Wireframe for the Submit Report Flow*

Figure 23 illustrates the Submit Report screen, titled "Report Community Concern." The screen is divided vertically into four sections. The first section, "Select Category," presents a horizontally scrollable strip of pill-shaped category chips such as "pothole," "clogged drainage," and "stray," with left and right arrow indicators showing that more categories can be reached by swiping. The second section, "Description," is a multi-line text area for the citizen to enter additional details. The third section is the photo capture area, consisting of a "Snap Photo" button, a "Photo Preview" placeholder where the captured image will be displayed, and an "ML Confidence" indicator that will display the on-device pothole detector's confidence score (for example, 93%). The fourth section, "Location," shows the auto-captured GPS coordinates.

*Figure 24. Wireframe of the LGU Admin Dashboard*

Figure 24 illustrates the Dashboard Overview of the LGU Admin Dashboard. The screen is divided into a left vertical sidebar and a main content area. The sidebar carries the site logo at the top, followed by navigation links for Dashboard, Service Requests, Issue Reports, News, Forum, and Settings. The main content area has a header bar with the title "Dashboard Overview" and the signed-in user's name and avatar at the upper right. Directly below the header is a row of four key-metric stat cards, each showing a label, a numeric value, and a trend indicator. The middle row pairs a "Report Volume by Category" bar chart with a "Location Heatmap" panel. The bottom row contains a "Recent Submissions" panel with a data table and a "View All" shortcut at the upper right.

*Figure 25. Wireframe of the Issue Reports Page*

Figure 25 illustrates the Issue Reports Page of the LGU Admin Dashboard. The left sidebar carries the same navigation links as the dashboard. The main content area has a header bar titled "Issue Reports" with three filter controls at the upper right: All Categories, Status: All, and Date Range. The body of the page is split into two side-by-side panes. The left pane is a search and queue panel that begins with a "Search reports…" input followed by a vertical list of report cards; each card shows the report reference number, category, barangay, time since submission, and a status tag (such as Submitted, Under Review, or In Progress). The right pane is a report-detail panel showing the selected report's reference number and status tag, a photo preview placeholder, and the report's metadata — Category, Submitted By, Location, GPS Coordinates, and Assigned Office — followed by three action buttons: Acknowledge, Reassign, and Reject.

*Figure 26. Wireframe of the Service Requests Page*

Figure 26 illustrates the Service Requests Page of the LGU Admin Dashboard. The header bar carries the title "Service Requests" and a "Generate Report" button at the upper right. Below the header is a row of four filter dropdowns — Date Range, Service Type, Status, and Office — followed by a row of four stat cards: Total Requests, Pending, Processing, and Completed. The lower portion of the page contains a data table of citizen document applications with the columns Reference, Service, Requester, Status, and Office. Sample rows illustrate the layout, including a Birth Certificate request routed to the Civil Registrar, a Business Permit routed to the Business Permits and Licensing Office (BPLO), and a Barangay Clearance routed to the Barangay office.

*Figure 27. Wireframe of the News and Announcements Page*

Figure 27 illustrates the News and Announcements Page of the LGU Admin Dashboard. The header bar carries the title "News and Announcements" and a "+ Create New" button at the upper right. The body of the page is split into two side-by-side panels. The left panel, titled "Create Announcement," contains a Title input field, a Content text area, and an Attachments drop zone labeled "Drop files here or click to upload — Images and PDFs supported," followed by two primary action buttons, "Publish Now" and "Schedule." The right panel, titled "Mobile Preview," displays a vertical phone-sized placeholder so that the LGU Administrator will be able to preview how the announcement will appear in the citizen mobile application before publishing.

*Figure 28. Wireframe of the Forum Moderation Page*

Figure 28 illustrates the Forum Moderation Page of the LGU Admin Dashboard. The header bar carries the title "Forum Moderation" and three tab counters at the upper right: Pending (5), Flagged (2), and All Posts. Below the header is a search bar labeled "Search posts by author or keyword…" and an "All Categories" dropdown. The body of the page lists individual post cards. Each card shows the author's avatar and name, the time since posting, the post text, the post category and comment count, a status tag at the upper right (for example, "Awaiting Moderation" or "Flagged by Filter"), and three action buttons: Approve, Edit, and Reject. The wireframe shows sample cards including a community post awaiting moderation and a post automatically flagged by the profanity filter.

*Figure 29. Wireframe of the Office Assignments Page*

Figure 29 illustrates the Office Assignments Page of the LGU Admin Dashboard. The body of the page is split into two side-by-side panels. The left panel, titled "Current Routing Rules," contains a table of existing rules with the columns Category, Barangay, Assigned Office, SLA Tier, and Actions; sample rows illustrate the format, including Pothole and Drainage routed to the Engineering office, Business Permit routed to BPLO, and Birth Certificate routed to the Civil Registrar, each tagged with an SLA tier (Simple, Complex, or Technical) and Edit and Archive controls. The right panel, titled "Add New Rule," is a form with a Category dropdown, a Barangay input, an Assign Office dropdown, and an SLA Tier (RA 11032) dropdown, followed by a reference card listing the RA 11032 service-level tiers (Simple Transactions — 3 days, Complex Transactions — 7 days, and Highly Technical — 10 days) and a primary "Save Rule" button.

*Figure 30. Wireframe of the User Management Page*

Figure 30 illustrates the User Management Page of the LGU Admin Dashboard. The header bar carries the title "User Management" and two buttons at the upper right: "Export Users" and "+ Add Users." Below the header is a search bar labeled "Search users by name or email…" paired with an "All Roles" filter and an "All Status" dropdown. The main content area is a user table with the columns Name / Email, Role, Barangay, Status, and Actions, where the Actions column carries three icon buttons per row for editing, archiving, and similar operations. Sample rows illustrate the row format, including an LGU Administrator, an Engineering Staff member, and two citizen accounts. A page-number pagination control with previous and next arrows sits below the table.

*Figure 31. Wireframe of the Super Admin Cross-LGU Analytics Page*

Figure 31 illustrates the Cross-LGU Analytics Dashboard of the Super Admin Dashboard. The header bar carries the title "Cross-LGU Analytics Dashboard" and the signed-in user's name and avatar at the upper right. Directly below the header is a row of LGU filter chips — All LGUs, Liliw Laguna, Nagcarlan Laguna, Rizal Laguna, and an "+ Add LGU" chip — followed by a row of four key-metric stat cards. The middle row pairs a "Reports by LGU" bar chart with a "Service Request Trends" line chart. The bottom row contains an "LGU Performance Leaderboard" panel with a "View All" shortcut at the upper right.

### **Use Case Diagram**

*Figure 32. Use Case Diagram for Super Administrator*

Figure 32 shows a Use Case Diagram of the interactions between the Super Administrator actor and the system. The diagram presents the main functions: registering and deactivating LGU municipalities, managing feature flags per LGU, monitoring cross-LGU analytics, supervising compliance and audit logs, and overseeing user accounts across all LGUs. It illustrates how the Super Administrator will interact with the platform to oversee the deployment of AGAPP across multiple LGUs.

*Figure 33. Use Case Diagram for LGU Administrator*

Figure 33 shows a Use Case Diagram of the interactions between the LGU Administrator actor and the system. The diagram emphasizes important functions including managing service requests, processing issue reports, configuring office assignments, publishing news and announcements, moderating the community forum, maintaining the chatbot knowledge base, and managing LGU staff accounts. It shows how the LGU Administrator will use the dashboard to monitor citizen submissions, assign work, and ensure compliance with Republic Act No. 11032 service-level standards.

*Figure 34. Use Case Diagram for LGU Personnel*

Figure 34 exhibits a Use Case Diagram for the LGU Personnel actor. It delineates the day-to-day functions of front-line LGU staff: viewing assigned reports and service requests, updating their status, attaching released documents, posting status updates, and adding internal notes. The figure offers a methodical diagram of how LGU Personnel will interact with the system to act on the work routed to them by the LGU Administrator.

*Figure 35. Use Case Diagram for Citizen*

Figure 35 illustrates a Use Case Diagram for the Citizen actor. It provides a structured representation of how citizens will interact with the AGAPP mobile application by outlining core features such as signing up, applying for LGU documents, submitting GPS-based issue reports, tracking the status of submissions, viewing news and announcements, opening the town map, calling emergency hotlines, participating in the moderated community forum, and asking questions through the chatbot.

### **Project Development**

The project will be developed using the Agile model, applied in a Scrum-style cadence as described by Schwaber and Sutherland (2020) in *The Scrum Guide*. In this approach, the whole process of software development is divided into separate phases, organized into eight sprints labeled Sprint 0 through Sprint 7. The outcome of each sprint will act as the input for the next, with a Sprint Review and Sprint Retrospective held at the end of every sprint to incorporate stakeholder feedback before the team proceeds.

*Figure 36. Agile Scrum Model of AGAPP*

#### **Phase 1: Sprint 0 — Project Initiation**

In this opening sprint, the developers will conduct interviews with the client, specifically the Office of the Mayor, the Municipal Information and Communications Technology Officer, and the heads of the offices that will be onboarded onto AGAPP, including the Civil Registrar, the Municipal Assessor, the Business Permits and Licensing Office, the Engineering Office, the Public Employment Service Office, and the Municipal Disaster Risk Reduction and Management Office. The discussion will focus on the current processes, challenges, and goals of delivering front-line public services and of monitoring citizen-reported issues. A signed scope-of-work document, a project charter, and a prioritized product backlog of at least forty user stories will be produced as the deliverables of this sprint. The version-control repository, continuous-integration pipeline, and staging environment will also be set up. The draft Privacy Notice and the draft Privacy Impact Assessment required by NPC Circular 16-01 will be initiated so that the project will comply with Republic Act No. 10173 (the Data Privacy Act) from day one. High-fidelity wireframes for the citizen, LGU Admin, and Super Admin screens will be drawn in Figma before any production code is written, and the database schema covering PostGIS-backed geospatial entities and the knowledge-base structure will be finalized.

#### **Phase 2: Sprint 1 — Authentication and Data Foundation**

The second sprint will build the foundation that the rest of the system depends on. The developers will implement email-and-password login with email-based one-time-password support for passwordless login and password recovery, role-based access control for the four user roles, and the lgu_id column with PostgreSQL Row-Level Security policies that will isolate one LGU's data from another. The first-launch LGU-selection screen will be implemented in the citizen mobile application, and a test LGU will be seeded for the partner municipality. Unit tests for authentication and integration tests for the Row-Level Security policies will be written before the sprint closes.

#### **Phase 3: Sprint 2 — Service Directory**

The third sprint will deliver the read-only content modules. Content-management screens will be built for the LGU Administrator to maintain the catalog of municipal services and the citizen guide entries, and the citizen mobile application will fetch and cache the catalog so that it remains usable when network connectivity is intermittent. By the close of the sprint, the partner LGU's services will be populated end-to-end and visible inside the mobile application.

#### **Phase 4: Sprint 3 — Issue Reporting and On-Device Pothole Detection**

The fourth sprint will deliver the geotagged reporting pipeline together with the on-device pothole verifier. The citizen mobile application will capture a photograph and a GPS point, upload them through a presigned URL to object storage, and persist a record into the reports table with a PostGIS point. The status state machine, the citizen tracking screen, and the LGU Admin queue with map view will be built. In parallel, an initial dataset of pothole photographs will be labeled in Roboflow, a YOLOv8n model will be trained in Google Colab and exported to TensorFlow Lite, and the model will be integrated into the application through react-native-fast-tflite so that inference runs before submission. An active-learning loop will be configured so that confirmed reports flow back into the dataset for periodic retraining.

#### **Phase 5: Sprint 4 — News, Notifications, Maps, Forum, and Chatbot**

The fifth sprint will deliver the remaining citizen-facing features. The LGU Administrator will be able to publish official announcements through a rich-text editor; push notifications will be dispatched through Expo Push or Firebase Cloud Messaging, both of which offer free tiers suitable for student-led deployment, and a broadcast-by-barangay capability will be exposed. An SMS fallback through a Philippine SMS gateway is documented as an optional extension that the LGU may enable once it provisions a paid messaging account, since SMS-gateway services are not free and lie outside the budget of a student capstone. The town map will be implemented with MapLibre GL over OpenStreetMap tiles and will highlight government offices, hospitals, schools, and tourist spots. The moderated community forum will be wired to an automated profanity filter and an image safety scan, with a moderation queue for posts that fail the filter. The chatbot will search the LGU's curated FAQ knowledge base as its primary response mechanism; if no FAQ match is found, the question will be forwarded to Gemini AI, which will generate an answer as a fallback.

#### **Phase 6: Sprint 5 — LGU Admin and Super Admin Dashboards**

The sixth sprint will complete the management interfaces. The LGU Admin Dashboard will gain its routing-rule editor, service-level-agreement tracker calibrated to the categories of Republic Act No. 11032, audit-log viewer, and forum moderation console. The Super Admin Dashboard will gain its LGU registration workflow, feature-flag console, cross-LGU analytics view, and Data Privacy Act compliance dashboard. By the close of the sprint, both dashboards will be feature-complete and their analytics will be reconciled against the product analytics tool.

#### **Phase 7: Sprint 6 — Hardening, Security Review, and Data-Privacy Artifacts**

The seventh sprint will prepare the system for evaluation and defense. Within the limits of a student capstone, basic security testing will be performed using the free, openly available tools that the developers can operate themselves: OWASP ZAP for a baseline dynamic vulnerability scan, Semgrep for static analysis with its community rule sets, and `npm audit` for dependency scanning. A manual review of the data isolation between LGUs will be conducted by attempting to access another LGU's records using a logged-in account from a different LGU, to confirm that no cross-LGU data leakage is possible through the implemented Row-Level Security policies. Light performance testing will be performed with k6 against the busiest endpoints on the staging environment, and an accessibility check will be performed with axe-core to verify alignment with the WCAG 2.1 AA guidelines and the spirit of Batas Pambansa Bilang 344. As part of the documentation deliverables, the developers will draft a Privacy Notice, a Privacy Impact Assessment, and a Data Subject Access Request workflow modeled on the requirements of Republic Act No. 10173 and NPC Circular 16-01, and will provide the partner LGU with a recommendation to designate a Data Protection Officer prior to any real-world deployment. These artifacts will be turned over to the LGU as drafts, since the formal designation of a Data Protection Officer and the registration of personal-data processing systems remain the responsibility of the LGU itself.

#### **Phase 8: Sprint 7 — User Acceptance Testing and Capstone Deployment**

The closing sprint will move AGAPP from the development environment into a publicly accessible evaluation environment so that the system can be defended and used by the partner LGU's respondents. User Acceptance Testing will be conducted with citizen respondents and LGU personnel of the partner municipality using the System Usability Scale and an ISO/IEC 25010 evaluation questionnaire; functionality testing, browser compatibility testing, and device compatibility testing will be intensified during this period. Bug fixes and minor refinements that arise during UAT will be applied. Because the developers are undergraduate capstone students and do not maintain a paid Google Play Developer account or an Apple Developer Program account, the citizen mobile application will not be released through the Google Play Store or the Apple App Store. Instead, the application will be distributed for evaluation through Expo Application Services internal distribution, which generates a shareable build link, and through a directly downloadable Android APK hosted on the project repository, both of which the partner LGU's respondents will be able to install on their own devices. The LGU Admin Dashboard and the Super Admin Dashboard will be deployed to a free-tier cloud-hosting platform such as Vercel, Render, or Railway, and the database will be hosted on the free tier of Supabase or a comparable managed PostgreSQL service. A walkthrough session will be conducted with the designated LGU Administrator and with selected LGU Personnel, and a short demonstration will be conducted for the partner LGU's information-technology focal person and for the office identified by the LGU as responsible for data privacy. The Sprint Review and Sprint Retrospective held at the close of this sprint will document the evaluation results and the lessons learned, and will identify the additional steps — paid developer accounts, formal store listings, an LGU-procured cloud environment, and the LGU's own designation of a Data Protection Officer — that the LGU will need to undertake if it later decides to operate the system as a fully production deployment.

### **Project Testing and Evaluation Procedures**

The system will be tested for functionality, browser compatibility, and device compatibility, and will be evaluated using the System Usability Scale (SUS) and ISO/IEC 25010 to assess product quality.

#### **Project Testing**

##### **Functionality Testing**

According to ISO/IEC 25010 (2011), functional suitability is the degree to which a product or system provides functions that meet stated and implied needs when used under specified conditions; the standard decomposes this characteristic into functional completeness, functional correctness, and functional appropriateness. Functionality testing is therefore the activity that verifies, against the user-facing specifications, whether each declared function performs the task it is supposed to perform and produces the correct result. During this process, the developers will perform tests to ensure the system meets its objectives, focusing on the user interface and confirming that all functions are working correctly. By using a testing table, the developers will track the expected result, the function, the action, the actual result, and the status (passed or failed) for every interactive element. This testing will not only verify system performance but will also highlight areas for improvement, guiding the developers in refining the system.

*Table 1. Functionality Testing in Super Administrator Page*

| Test Sequence | Expected Result | Function | Action | Actual Result | Status |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Sign in button | Redirects to Super Admin dashboard | Authenticates Super Admin login | Click | (To be tested) | Passed/Failed |
| Register LGU button | Show LGU registration form | Allows the Super Admin to register a new LGU municipality | Click | (To be tested) | Passed/Failed |
| Edit LGU button | Show Edit LGU form | Allows the Super Admin to edit LGU details | Click | (To be tested) | Passed/Failed |
| Deactivate LGU button | Show confirmation dialog | Deactivates an existing LGU | Click | (To be tested) | Passed/Failed |
| Feature Flag toggle | Enable or disable a module per LGU | Controls which AGAPP modules are visible to each LGU | Click | (To be tested) | Passed/Failed |
| Cross-LGU Analytics button | Show aggregated metrics across all LGUs | Loads the cross-LGU dashboard | Click | (To be tested) | Passed/Failed |
| Compliance button | Show compliance page | Loads audit logs, Data Protection Officer status, and data-privacy artifacts | Click | (To be tested) | Passed/Failed |
| Configure Settings button | Show global settings page | Allows the Super Admin to configure authentication, notification, and storage settings | Click | (To be tested) | Passed/Failed |
| Export button | Show export options | Initiates data export | Click | (To be tested) | Passed/Failed |
| Add user button | Show Add User form | Allows the Super Admin to add a new user | Click | (To be tested) | Passed/Failed |
| Edit user button | Show Edit User form | Allows the Super Admin to edit user details | Click | (To be tested) | Passed/Failed |
| Archive user button | Archive user | Allows the Super Admin to archive a user | Click | (To be tested) | Passed/Failed |
| View button | Display user information | Allows the Super Admin to view user information | Click | (To be tested) | Passed/Failed |
| Backup now button | Show confirmation of backup creation | Confirms backup creation | Click | (To be tested) | Passed/Failed |
| Create backup button | Create backup | Initiates backup creation | Click | (To be tested) | Passed/Failed |
| Restore now button | Show confirmation of database restoration | Confirms database restoration | Click | (To be tested) | Passed/Failed |
| Restore database button | Restore database | Initiates database restoration | Click | (To be tested) | Passed/Failed |
| Logout button | Redirect to login page | Logs out the Super Admin | Click | (To be tested) | Passed/Failed |

*Table 2. Functionality Testing in LGU Administrator Page*

| Test Sequence | Expected Result | Function | Action | Actual Result | Status |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Sign in button | Redirects to LGU Admin dashboard | Authenticates LGU Admin login | Click | (To be tested) | Passed/Failed |
| Service Requests button | Show service-request queue | Loads the page of pending citizen document applications | Click | (To be tested) | Passed/Failed |
| Update status button | Update request status | Moves a request from Submitted to In Progress or Resolved | Click | (To be tested) | Passed/Failed |
| Issue Reports button | Show issue-report queue | Loads the page of pending GPS-based citizen reports | Click | (To be tested) | Passed/Failed |
| Acknowledge button | Acknowledge a report | Marks a report as Under Review and notifies the citizen | Click | (To be tested) | Passed/Failed |
| Reassign button | Show reassignment dialog | Allows the LGU Admin to reroute a report to another office | Click | (To be tested) | Passed/Failed |
| Reject button | Show rejection dialog | Allows the LGU Admin to reject a report with a stated reason | Click | (To be tested) | Passed/Failed |
| Compose Post button | Show News editor | Allows the LGU Admin to publish an announcement | Click | (To be tested) | Passed/Failed |
| Publish button | Publish the post | Makes the post visible in the citizen mobile application | Click | (To be tested) | Passed/Failed |
| Approve forum post button | Approve queued post | Releases a moderated post to the public forum | Click | (To be tested) | Passed/Failed |
| Reject forum post button | Reject queued post | Removes the post and notifies the citizen | Click | (To be tested) | Passed/Failed |
| Add Office Assignment button | Show rule editor | Allows the LGU Admin to map a category and barangay to an office | Click | (To be tested) | Passed/Failed |
| Add Knowledge-Base entry button | Show knowledge-base editor | Allows the LGU Admin to add a chatbot source document | Click | (To be tested) | Passed/Failed |
| Export button | Show export options | Initiates data export | Click | (To be tested) | Passed/Failed |
| Add user button | Show Add User form | Allows the LGU Admin to add a new staff account | Click | (To be tested) | Passed/Failed |
| Edit user button | Show Edit User form | Allows the LGU Admin to edit staff details | Click | (To be tested) | Passed/Failed |
| Archive user button | Archive user | Allows the LGU Admin to archive a staff account | Click | (To be tested) | Passed/Failed |
| Logout button | Redirect to login page | Logs out the LGU Admin | Click | (To be tested) | Passed/Failed |

*Table 3. Functionality Testing in LGU Personnel Page*

| Test Sequence | Expected Result | Function | Action | Actual Result | Status |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Sign in button | Redirects to LGU Personnel queue | Authenticates LGU Personnel login | Click | (To be tested) | Passed/Failed |
| View assigned button | Show items assigned to the user | Loads the personal queue of reports and requests | Click | (To be tested) | Passed/Failed |
| Update status button | Update item status | Moves an item to the next status | Click | (To be tested) | Passed/Failed |
| Add internal note button | Show internal note editor | Allows the LGU Personnel to add a note visible only to LGU staff | Click | (To be tested) | Passed/Failed |
| Attach document button | Open file upload window | Allows the LGU Personnel to attach the released document or resolution photo | Click | (To be tested) | Passed/Failed |
| Logout button | Redirect to login page | Logs out the LGU Personnel | Click | (To be tested) | Passed/Failed |

*Table 4. Functionality Testing in Citizen Mobile Application*

| Test Sequence | Expected Result | Function | Action | Actual Result | Status |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Send Passcode button | Send one-time passcode to the citizen's email | Triggers email passcode delivery for passwordless sign-in | Click | (To be tested) | Passed/Failed |
| Enter Passcode field | Accept the six-digit passcode | Allows the citizen to type the passcode received by email | Type | (To be tested) | Passed/Failed |
| Login button | Authenticate citizen | Verifies the passcode and proceeds to the Main Interface | Click | (To be tested) | Passed/Failed |
| Service Directory button | Show list of LGU services | Opens the service catalog | Click | (To be tested) | Passed/Failed |
| Apply for service button | Show guided application form | Begins a document application | Click | (To be tested) | Passed/Failed |
| Submit application button | Save application and generate reference number and QR | Records the application in the database | Click | (To be tested) | Passed/Failed |
| Submit Report button | Show report submission flow | Begins a GPS-based issue report | Click | (To be tested) | Passed/Failed |
| Capture photo button | Open in-app camera | Allows the citizen to capture a photograph of the issue | Click | (To be tested) | Passed/Failed |
| On-device detector check | Verify that a pothole is present in the captured image | Warns the citizen if confidence is below the configured threshold | Automatic | (To be tested) | Passed/Failed |
| Confirm submission button | Save report and assign reference number | Records the report in the database | Click | (To be tested) | Passed/Failed |
| Track Report button | Show list of submissions and their statuses | Loads the tracking screen | Click | (To be tested) | Passed/Failed |
| Rate resolution button | Submit citizen-satisfaction score | Records the citizen feedback | Click | (To be tested) | Passed/Failed |
| News button | Show LGU announcements | Loads the news feed | Click | (To be tested) | Passed/Failed |
| Town Map button | Show interactive municipal map | Opens the OpenStreetMap-based view | Click | (To be tested) | Passed/Failed |
| Emergency hotline button | Place an outgoing call | Calls the selected hotline | Click | (To be tested) | Passed/Failed |
| SOS button | Share GPS location with the MDRRMO duty desk | Sends an SOS payload | Click | (To be tested) | Passed/Failed |
| Forum button | Show community forum | Opens the moderated forum | Click | (To be tested) | Passed/Failed |
| Compose post button | Show post editor | Allows the citizen to compose a new forum post | Click | (To be tested) | Passed/Failed |
| Chatbot button | Open chatbot conversation | Loads the chatbot interface | Click | (To be tested) | Passed/Failed |
| Ask question | Return FAQ answer or Gemini-generated answer | Searches the FAQ knowledge base; falls back to Gemini AI if no match is found | Type and send | (To be tested) | Passed/Failed |
| Theme toggle | Switch between light mode and dark mode | Persists the citizen's appearance preference | Click | (To be tested) | Passed/Failed |
| Language toggle | Switch between English and Filipino | Persists the citizen's language preference | Click | (To be tested) | Passed/Failed |
| Account Settings button | Show settings screen | Allows the citizen to update password, notification preferences, theme, and language | Click | (To be tested) | Passed/Failed |
| Logout button | Log out the citizen and return to sign-in screen | Allows the citizen to log out | Click | (To be tested) | Passed/Failed |

##### **Browser Compatibility Testing**

Cross-browser compatibility testing is the practice of executing a web application against multiple web browsers, browser versions, and operating systems to verify that rendering and behavior remain consistent for every supported environment. Mesbah and Prasad (2011) demonstrated that even small differences between browsers — in JavaScript engines, CSS handling, and event timing — can introduce defects that escape testing on a single browser, and proposed automated cross-browser regression as a routine engineering practice. Public browser-market data published by StatCounter Global Stats consistently identify Google Chrome as the most widely used desktop browser, followed by Microsoft Edge and Mozilla Firefox.

Therefore, the developers will perform browser compatibility testing on the LGU Admin Dashboard and the Super Admin Dashboard to ensure that they are compatible across these three browsers. Each test will use the latest stable release of the browser at the time of evaluation.

*Table 5. Browser Compatibility Testing*

| Web Browser | Expected Result | Actual Result | Recommended |
| :---- | :---- | :---- | :---- |
| Google Chrome | The dashboards display smoothly and all features are fully compatible. | Result | Yes or No |
| Mozilla Firefox | The dashboards display smoothly and all features are fully compatible. | Result | Yes or No |
| Microsoft Edge | The dashboards display smoothly and all features are fully compatible. | Result | Yes or No |

##### **Device Compatibility Testing**

Joorabchi, Mesbah, and Kruchten (2013) reported that one of the principal challenges in mobile application development is the wide range of devices, screen sizes, and operating-system versions that an application must support, and recommended explicit device-compatibility testing as part of any release process. Because the citizen-facing component of AGAPP is delivered as a mobile application, the developers will give particular attention to mobile-phone compatibility, while the LGU Admin Dashboard and the Super Admin Dashboard will be tested on desktop, laptop, and tablet form factors. Testing will cover both portrait and landscape orientations where applicable.

*Table 6. Device Compatibility Testing*

| Devices | Resolutions | Expected Result | Actual Result | Recommended |
| :---- | :---- | :---- | :---- | :---- |
| Desktop | 1920×1080 (Full HD), 2560×1440 (QHD) | The LGU Admin and Super Admin dashboards display correctly and all features are fully compatible. | Pass or Fail | Yes or No |
| Laptop | 1366×768 (HD), 1440×900, 1600×900, 1920×1080 (Full HD) | The LGU Admin and Super Admin dashboards display correctly and all features are fully compatible. | Pass or Fail | Yes or No |
| Tablet | 1280×800, 1536×2048, 1920×1200 | The citizen mobile application displays correctly and all features are fully compatible. | Pass or Fail | Yes or No |
| Mobile Phone | 1280×720 (HD), 1920×1080 (Full HD), 2340×1080 (FHD+) | The citizen mobile application displays correctly and all features are fully compatible. | Pass or Fail | Yes or No |

#### **Project Evaluation Procedure**

To assess the usability and user satisfaction of the system, the developers will conduct an evaluation using the System Usability Scale (SUS). SUS is a standardized questionnaire designed to measure users' perceived ease of use and overall experience. The system will be evaluated by twenty-five (25) citizens of the partner municipality and five (5) representatives from the LGU Administrator and LGU Personnel roles, which is equivalent to thirty (30) non-IT respondents, representing the overall end users of the system.

In addition, the system's technical quality will be evaluated using ISO/IEC 25010, which assesses attributes such as functional suitability, performance efficiency, compatibility, usability, reliability, security, maintainability, and portability. This evaluation will be conducted with ten (10) IT experts, providing professional insights into the system's performance and robustness.

##### **System Usability Scale (SUS)**

The System Usability Scale (SUS), developed by Brooke (1996), is one of the most widely used tools for measuring the usability of a system or product. It is a ten-item questionnaire scored on a five-point Likert scale; respondents indicate their level of agreement with five positively worded items and five negatively worded items, and the alternating-item formula is applied so that contributions from positive and negative items align before the result is multiplied by 2.5 to yield a single composite score on a 0-to-100 scale. Lewis (2018), in a retrospective review of more than two decades of SUS use, confirmed its enduring reliability and reported that SUS scores remain comparable across products, populations, and contexts of use. SUS will therefore be used in this study because it is standardized, widely validated, and produces a single comparable number that can be benchmarked against published norms.

*Table 7. Likert Scale of SUS*

| Scale | Interpretation |
| :---- | :---- |
| 1 | Strongly Disagree |
| 2 | Disagree |
| 3 | Neutral |
| 4 | Agree |
| 5 | Strongly Agree |

*Table 8. Numerical Scale of the SUS*

| Scale | Interpretation |
| :---- | :---- |
| 80.30 – 100 | Excellent |
| 68.00 – 80.30 | Good |
| 68.00 | Okay |
| 51.00 – 68.00 | Poor |
| 1.00 – 51.00 | Awful |

##### **ISO/IEC 25010**

ISO/IEC 25010:2011 is an international standard for evaluating software quality. It assesses key attributes such as functional suitability, performance efficiency, compatibility, usability, reliability, security, maintainability, and portability. This standard provides a structured framework for analyzing a system's technical quality and ensuring it meets both user and industry requirements.

The evaluation will focus on the following eight key aspects:

* **Functional Suitability:** Used to test whether the core features of AGAPP, such as service requests, GPS-based issue reporting, the on-device pothole detector, news and announcements, the moderated community forum, and the chatbot, work as intended and meet user requirements.  
* **Performance Efficiency:** Used to test the system's response time, image-processing speed, and overall performance to ensure that it can handle concurrent citizen submissions and large volumes of LGU reports efficiently.  
* **Compatibility:** Used to test AGAPP on multiple devices, browsers, and operating systems to ensure a consistent user experience for citizens, LGU Personnel, LGU Administrators, and Super Administrators.  
* **Usability:** Used to test the system's user interface, navigation, and ease of use. Feedback from citizens, LGU staff, and non-IT respondents will be gathered to ensure the platform is intuitive and accessible for all users.  
* **Reliability:** Used to test the stability and fault tolerance of AGAPP under different conditions, ensuring minimal system downtime and continuous availability of the citizen mobile application and the LGU dashboards.  
* **Security:** Used to test data privacy and protection measures, ensuring that sensitive citizen and LGU data are safeguarded against unauthorized access and cyber threats, in line with Republic Act No. 10173 (the Data Privacy Act of 2012) and NPC Circular 16-01.  
* **Maintainability:** Used to test the system's architecture, code quality, and ease of updates, ensuring long-term maintainability and scalability across additional LGUs.  
* **Portability:** Used to test AGAPP's ability to be deployed across different LGU IT infrastructures and to integrate with other government systems, ensuring smooth implementation when additional municipalities are onboarded.

##### **Statistical Treatment of Data**

The Likert scale used in this study is a psychometric instrument widely employed in social-science and educational research for measuring respondents' attitudes, opinions, and impressions toward a given statement. Joshi, Kale, Chandel, and Pal (2015), in their methodological review, explained that the Likert scale offers several response options — typically five or seven — that capture varying levels of agreement, and that the scale is most reliable when the wording of items is precise and the analysis treats the resulting data appropriately. Sullivan and Artino (2013) likewise recommended that ordinal Likert-type data be summarized using descriptive statistics such as the mean and the standard deviation, and that interpretation be made through a verbal scale linked to predefined ranges, rather than treating individual integer responses as a true interval measure.

The data collected from the respondents will be organized, counted, analyzed, and interpreted. The following statistical method will be used to interpret the gathered data:

* **Mean** – This will be used to calculate the average response of the respondents to the Survey Questionnaire. It is determined by adding the number of respondents who selected each particular choice for each question and then dividing the total sum by the overall number of respondents. The formula used is as follows:  
  x̄ = Σfx / N  
  Where:  
  * **x** represents the number of respondents who selected a particular choice.  
  * **N** is the total number of respondents.

To assess the reliability of the collected data, the developers will refer to a numerical table that contains the scale used to evaluate the system.

*Table 9. Numerical Scale of the ISO/IEC 25010*

| Scale | Interpretation |
| :---- | :---- |
| 4.51 – 5.00 | Excellent |
| 3.51 – 4.50 | Very Good |
| 2.51 – 3.50 | Good |
| 1.51 – 2.50 | Fair |
| 1.00 – 1.50 | Poor |

### **References**

* Bangor, A., Kortum, P., & Miller, J. (2009). Determining what individual SUS scores mean: Adding an adjective rating scale. *Journal of Usability Studies*, 4(3), 114–123. [https://uxpajournal.org/determining-what-individual-sus-scores-mean-adding-an-adjective-rating-scale/](https://gemini.google.com/u/4/app/52624c1c8fbc1e3c?pageId=none)  
* Brooke, J. (1996). SUS: A quick and dirty usability scale. In P. W. Jordan, B. Thomas, B. A. Weerdmeester, & I. L. McClelland (Eds.), *Usability evaluation in industry* (pp. 189–194). Taylor & Francis.  
* ISO/IEC. (2011). *ISO/IEC 25010:2011 — Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models*. International Organization for Standardization. [https://www.iso.org/standard/35733.html](https://gemini.google.com/u/4/app/52624c1c8fbc1e3c?pageId=none)  
* Joorabchi, M. E., Mesbah, A., & Kruchten, P. (2013). Real challenges in mobile app development. In *2013 ACM/IEEE International Symposium on Empirical Software Engineering and Measurement* (pp. 15–24). IEEE. [https://doi.org/10.1109/ESEM.2013.9](https://gemini.google.com/u/4/app/52624c1c8fbc1e3c?pageId=none)  
* Joshi, A., Kale, S., Chandel, S., & Pal, D. K. (2015). Likert scale: Explored and explained. *British Journal of Applied Science & Technology*, 7(4), 396–403. [https://doi.org/10.9734/BJAST/2015/14975](https://gemini.google.com/u/4/app/52624c1c8fbc1e3c?pageId=none)  
* Lewis, J. R. (2018). The System Usability Scale: Past, present, and future. *International Journal of Human-Computer Interaction*, 34(7), 577–590. [https://doi.org/10.1080/10447318.2018.1455307](https://gemini.google.com/u/4/app/52624c1c8fbc1e3c?pageId=none)  
* Mesbah, A., & Prasad, M. R. (2011). Automated cross-browser compatibility testing. In *Proceedings of the 33rd International Conference on Software Engineering (ICSE 2011)* (pp. 561–570). ACM. [https://doi.org/10.1145/1985793.1985870](https://gemini.google.com/u/4/app/52624c1c8fbc1e3c?pageId=none)  
* Schwaber, K., & Sutherland, J. (2020). *The Scrum Guide: The definitive guide to Scrum — The rules of the game*. Scrum.org. [https://scrumguides.org/scrum-guide.html](https://gemini.google.com/u/4/app/52624c1c8fbc1e3c?pageId=none)
