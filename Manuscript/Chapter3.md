# CHAPTER III

## **CHAPTER III**

## **METHODOLOGY**

### **Project Design**

*Figure 2. Project Design of the Automated Governance and Public Service Platform*

Figure 2 presents the project design of "Automated Governance and Public Service Platform (AGAPP)." This diagram outlines how the system will operate and how users will interact with it. It identifies four user roles involved in the platform: Super Administrator, LGU Administrator, LGU Personnel, and Citizen. Each of these users will access the system either through a web browser, which will be used by the administrative roles for the LGU Admin Dashboard and the Super Admin Dashboard, or through the AGAPP mobile application, which will be used by citizens on Android and iOS devices.

The diagram shows that the AGAPP backend will communicate with both the web dashboards and the mobile application, meaning that personnel inside the Municipal Hall and citizens from any location will be able to connect to the system. The two-way arrows between the platform and the clients indicate that data will be sent and received in both directions. This setup will allow users to perform various functions on the platform remotely or on-site. A separate two-way connection is shown between the AGAPP backend and the data storage. This means that the system will be able to retrieve and save data as needed. Information such as citizen accounts, service requests, geotagged issue reports, news posts, forum entries, chatbot knowledge-base articles, and audit logs will be stored in this database and accessed later for review or updates. The diagram emphasizes the centralized online structure of the AGAPP system and the importance of data storage in its operation. While the specific functions for each user role are not shown in this illustration, the diagram makes it clear that different groups will use the platform for different purposes. These groups will have separate levels of access and responsibilities based on their roles within the local government service-delivery process.

### **Flowchart**

*Figure 3. Flowchart of the Main Interface for Super Administrator*

Figure 3 describes the structured workflow for the Super Administrator, outlining the navigation and decision-making process within the system. The process will begin when the Super Administrator logs in using their email and password, granting them access to the Main Interface, where critical system functionalities will be available. This interface will serve as the central hub for navigation, allowing the Super Administrator to manage registered LGUs, oversee cross-LGU analytics, and supervise compliance artifacts.

Within the Main Interface, the Super Administrator will be able to select from several primary modules, including LGU Management, Cross-LGU Analytics, Feature Flags, and Compliance, each leading to its respective section within the system. Selecting LGU Management will direct the user to the LGU Management Page, where they will register new LGU municipalities, deactivate existing ones, and edit LGU details. Choosing Cross-LGU Analytics will open the Analytics Page, which will provide aggregated metrics such as average resolution time, citizen-satisfaction scores, and report volumes across all LGUs. Clicking Feature Flags will transition them to the Feature Flag Page, where they will enable or disable specific modules per LGU, such as the chatbot or the on-device pothole detector. The Compliance module will lead to the Compliance Page, which will allow the Super Administrator to monitor data-privacy artifacts, audit logs, and the status of each LGU's Data Protection Officer designation.

If none of these modules are selected, the workflow will transition to Extended Administrative Functions, providing access to specialized operational tools. System Settings will move to the Settings Page, offering global configuration of authentication, notification, and storage options. User Management will direct the Super Administrator to the User Management Page, where they will oversee accounts across all LGUs and reset credentials when necessary. Selecting Logout will securely end the session, safeguarding data and preventing unauthorized access.

*Figure 4. Flowchart of the Main Interface for LGU Administrator*

Figure 4 presents the LGU Administrator Main Interface, outlining the system's navigation and functionality. Upon accessing the interface, the LGU Administrator will be able to choose from several options, including Dashboard, Service Requests, Issue Reports, News and Announcements, and Forum Moderation, each directing them to a specific section. Selecting Dashboard will provide a real-time overview of key metrics for the assigned municipality, while Service Requests will grant access to citizen-submitted document applications. Issue Reports will allow for monitoring and updating GPS-based citizen reports, whereas News and Announcements will enable the LGU Administrator to publish official advisories. Forum Moderation will provide access to the moderated community forum, where flagged posts can be reviewed and acted upon. If no selection is made within this initial screen, the workflow will transition to additional administrative functions, where the LGU Administrator will access Office Assignments to configure how incoming reports are routed to offices, Knowledge Base Management to maintain the chatbot's source documents, and User Management to oversee LGU staff accounts. The interface will remain accessible until an action is performed, ensuring continuous availability for navigation. Selecting Logout will securely end the session.

*Figure 5. Flowchart of the Dashboard for Super Administrator and LGU Administrator*

Figure 5 illustrates the process of generating reports in the admin dashboard. First, the system will gather key metrics, including total citizens, total reports, average resolution time, and citizen-satisfaction score. These figures will be visualized through graphs and a heatmap of the municipality. The Super Administrator and LGU Administrator will then be able to apply filters to refine the data. If filtering is applied, the system will process the adjusted metrics; otherwise, it will proceed directly to generating the report. The final report will be printable or exportable, providing an efficient way for the administrator to analyze and present data remotely through the dashboard.

*Figure 6. Flowchart of the Service Requests for LGU Administrator*

Figure 6 shows the structured workflow for service-request handling. It includes the queue of incoming citizen applications for documents from offices such as the Civil Registrar, the Municipal Assessor, and the Business Permits and Licensing Office (BPLO). The LGU Administrator will be able to apply filters by service type, status, or office. If filtering is applied, the system will process the adjusted dataset before proceeding; otherwise, it will move directly to the action panel. From there, the LGU Administrator will update the status of each request, assign personnel, attach the released document, or reject the application with a stated reason. Every state transition will be recorded in the audit log to maintain accountability.

*Figure 7. Flowchart of the Issue Reports for LGU Administrator*

Figure 7 presents the workflow for handling GPS-based citizen reports. It includes a map view of all open reports, a queue grouped by category — pothole, damaged or non-functioning utility pole, clogged drainage system, stray animal, missing pet, and lost or found item — and the auto-routing engine. When a citizen submits a new report, the engine will assign it to the appropriate office based on the category and barangay. The LGU Administrator will be able to verify, reroute, or reject each report, and update its status from Submitted through Under Review, In Progress, and Resolved. A push notification will be sent to the citizen on every state transition. The finalized resolution log will be printable or exportable for inclusion in the LGU's monthly report.

*Figure 8. Flowchart of the News and Announcements for LGU Administrator*

Figure 8 presents the workflow for publishing official LGU content. It includes the list of existing announcements, a draft editor, and a scheduling option. The LGU Administrator will be able to create a new post, edit an existing one, attach images or PDFs, and choose to publish immediately or schedule for a later time. Once published, the post will be visible in the citizen mobile application and will trigger a push notification to all citizens whose notification preferences allow it.

*Figure 9. Flowchart of the Forum Moderation for LGU Administrator*

Figure 9 outlines the moderated community forum workflow. Citizen posts will first be screened by an automated profanity filter and an image safety scan. Posts that pass the filter will be published immediately; those that fail or are submitted by a new account will be placed in a moderation queue. The LGU Administrator will review each queued post and either approve it, edit it, or reject it with a stated reason. The action will be logged, and the citizen will be notified of the moderation outcome.

*Figure 10. Flowchart of the Office Assignments for LGU Administrator*

Figure 10 illustrates the configuration of the auto-routing engine. The LGU Administrator will be able to view the current ruleset, add a new rule, edit an existing rule, or archive an outdated rule. Each rule will map a combination of report category and barangay to a specific LGU office and to a service-level category as defined by Republic Act No. 11032 (simple, complex, or highly technical). Once a rule is saved, the system will apply it to all newly received reports.

*Figure 11. Flowchart of the User Management for Super Administrator and LGU Administrator*

Figure 11 presents the process of managing users in the admin dashboard. It includes key actions such as adding users, editing user details, archiving users, searching and filtering user records, generating reports, viewing user logs, and performing backup and restore functions. The Super Administrator and LGU Administrator will be able to apply filters to refine the user list; if filtering is applied, the system will process the adjusted results, otherwise, it will proceed directly to displaying the table of users. These functions will ensure efficient user management and data tracking within the system.

*Figure 12. Flowchart of the Main Interface for Citizen*

Figure 12 begins with the citizen signing up using their email and password, with email-based one-time passwords supported as an alternative for password recovery and passwordless login, or proceeding directly to login. Upon successful authentication, they will complete a short profile form. The system will then grant access to the Main Interface, where citizens will navigate to sections such as Service Directory, Submit Report, Track Report, News and Announcements, Town Map, Emergency Hotlines, Community Forum, and Chatbot. Selecting Service Directory will direct them to the list of available LGU services, while Submit Report will open the GPS-based reporting flow. If no selection is made, the process will move to additional functionalities such as Account Settings and Submission History. Choosing Logout will terminate the session.

*Figure 13. Flowchart of the Service Directory for Citizen*

Figure 13 outlines the process of applying for an LGU document. The citizen will browse the catalog of available services, select one, and proceed to a guided form that will capture only the data required for that service. After submission, the system will generate a reference number and a QR code that the citizen will present at the Municipal Hall for document release. The citizen will also be able to save the form as a draft and return to it later.

*Figure 14. Flowchart of the Submit Report for Citizen*

Figure 14 shows the GPS-based reporting flow. The citizen will open the report form, select one of the six categories defined in the project scope, capture a photograph using the in-app camera, and confirm the GPS point. For pothole reports, the on-device pothole detector will verify that the photograph contains a pothole before submission is allowed; if confidence falls below the configured threshold, the application will warn the citizen but will still allow submission after explicit confirmation. The citizen will be able to add a short description and submit the report. The application will show a confirmation screen with a reference number, and the report will appear in the citizen's tracking list.

*Figure 15. Flowchart of the Track Report for Citizen*

Figure 15 illustrates how citizens will monitor the status of their submissions. The citizen will view the list of their service requests and issue reports, with each entry showing the current status (Submitted, Under Review, In Progress, Resolved, or Rejected) and the assigned office. Tapping an entry will open the full status history. The citizen will also be able to rate the resolution and provide feedback, which will feed into the LGU's citizen-satisfaction score.

*Figure 16. Flowchart of the Town Map for Citizen*

Figure 16 outlines the interactive town map flow. The citizen will open the map, which will render OpenStreetMap tiles with key landmarks highlighted, including government offices, hospitals, schools, and tourist spots. The citizen will be able to search for a landmark, get directions, or tap a pin to view details such as office hours and contact numbers.

*Figure 17. Flowchart of the Emergency Hotlines for Citizen*

Figure 17 presents the one-tap emergency-contact flow. The citizen will tap a hotline (police, fire, hospital, or the Municipal Disaster Risk Reduction and Management Office) and the device will place an outgoing call. An optional SOS payload will share the citizen's GPS location with the MDRRMO duty desk for situations in which the citizen cannot speak.

*Figure 18. Flowchart of the Community Forum for Citizen*

Figure 18 illustrates the moderated forum from the citizen's side. The citizen will browse recent posts, search by keyword, or compose a new post. Posts that pass the automated filter will be published immediately; otherwise the citizen will be informed that the post is awaiting moderation. The citizen will also be able to like, comment on, or report existing posts.

*Figure 19. Flowchart of the Chatbot for Citizen*

Figure 19 outlines the chatbot interaction flow. The citizen will type a question, and the chatbot will first search the LGU's curated FAQ knowledge base for a matching answer. If a match is found, the chatbot will return the answer along with its source document. If no match is found in the FAQ, the chatbot will forward the question to Gemini AI, which will generate and return an answer to the citizen.

*Figure 20. Flowchart of the Account Settings for Citizen*

Figure 20 outlines how citizens will modify their account settings. The user will begin by reviewing current preferences. If no changes are needed, they will return to the Main Interface. Otherwise, they will adjust their password, notification preferences, language, or theme (light mode or dark mode), and submit. After submission, the citizen will confirm the modifications. The settings screen will also expose external links to the LGU's official Facebook page and YouTube channel.

### **Wireframes**

*Figure 21. Wireframe for the Citizen Sign-Up*

Figure 21 illustrates the Sign-Up screen of AGAPP. It is designed as a user-friendly interface for citizens to create their accounts using only an email address. The screen contains an input field for the email, a password field, and a "Send one-time password to my email" alternative for passwordless login or password recovery. After verification, the citizen is taken to a short profile form that captures name, barangay, and notification preferences. The layout is intentionally minimal so that first-time users will be able to complete registration in under one minute.

*Figure 22. Wireframe for the Citizen Main Interface*

Figure 22 illustrates the Main Interface of AGAPP for citizens. It is divided into a top header showing the LGU seal and the citizen's barangay, a grid of feature tiles (Service Directory, Submit Report, Track Report, News, Town Map, Emergency Hotlines, Forum, and Chatbot), and a bottom navigation bar with shortcuts to Home, Notifications, and Profile. Each tile uses a clear icon and a one-word label so that users with limited digital experience will be able to locate features quickly.

*Figure 23. Wireframe for the Submit Report Flow*

Figure 23 illustrates the Submit Report screen. The page is divided into three sections: Category (a dropdown listing pothole, damaged or non-functioning utility pole, clogged drainage system, stray animal, missing pet, and lost or found item); Photo and Location (an in-app camera button and an auto-captured GPS pin that the citizen will be able to adjust on a small map); and Description (an optional short text area). A primary Submit button at the bottom will be disabled until the required fields are filled and, for pothole reports, until the on-device detector either confirms a pothole or the citizen explicitly acknowledges the low-confidence warning.

*Figure 24. Wireframe of the LGU Admin Dashboard*

Figure 24 illustrates the Main Dashboard of the LGU Admin Dashboard, designed for LGU staff. It provides an overview of key metrics for the municipality, including total citizens, open reports, average resolution time, and citizen-satisfaction score. The navigation menu on the left contains sections such as Dashboard, Service Requests, Issue Reports, News, Forum Moderation, Office Assignments, Knowledge Base, and User Management. At the top, administrators will be able to apply filters such as date range, barangay, category, and status. A Generate button will also be available to create reports for focused data analysis. The page includes charts that present report volume per category and a heatmap of report locations.

*Figure 25. Wireframe of the Issue Reports Page*

Figure 25 illustrates the Issue Reports Page of the LGU Admin Dashboard. The navigation menu on the left contains the same sections as the dashboard. The main area is split between a queue table on the left and a map preview on the right. The queue table lists each report with columns for reference number, category, barangay, status, assigned office, and age in hours. Clicking a row will open a side panel with the citizen's photograph, the GPS pin, the full status history, and action buttons for Acknowledge, Reassign, Resolve, and Reject.

*Figure 26. Wireframe of the Service Requests Page*

Figure 26 illustrates the Service Requests Page of the LGU Admin Dashboard, which provides analytics on citizen document applications. The page features a table of pending and recent requests with columns for reference number, service, citizen name, status, and processing time. Filters at the top will allow administrators to apply restrictions such as date range, service type, status, and office. A Generate button will produce a printable summary report.

*Figure 27. Wireframe of the News and Announcements Page*

Figure 27 illustrates the News and Announcements Page of the LGU Admin Dashboard. It features a list of existing posts with their publication status (draft, scheduled, published), a Compose Post button, and an editor panel with formatting controls, image and PDF attachment, and a publish-or-schedule toggle. Once published, the post will become visible in the citizen mobile application.

*Figure 28. Wireframe of the Forum Moderation Page*

Figure 28 illustrates the Forum Moderation Page of the LGU Admin Dashboard. It features a list of queued posts with the citizen's name, the post text, the flagged keywords, and three action buttons: Approve, Edit, and Reject. A search bar above the list will allow the moderator to find posts by author or keyword.

*Figure 29. Wireframe of the Office Assignments Page*

Figure 29 illustrates the Office Assignments Page of the LGU Admin Dashboard. It features a table of existing rules with columns for category, barangay, target office, and service-level category (simple, complex, or highly technical, in line with Republic Act No. 11032). An Add Rule button will open a side panel where the LGU Admin will select the category and barangay and assign the appropriate office.

*Figure 30. Wireframe of the User Management Page*

Figure 30 illustrates the User Management Page of the LGU Admin Dashboard, which is designed for administering LGU staff accounts and their roles. A search bar at the top left will allow administrators to find specific staff, with filtering options for role and status. The page features a table of user details, including columns for User, Role, Status, Last Active, and Action (edit or archive). It also includes functions for report generation, user logs to track activity, and backup and restore to secure the platform's data.

*Figure 31. Wireframe of the Super Admin Cross-LGU Analytics Page*

Figure 31 illustrates the Cross-LGU Analytics Page of the Super Admin Dashboard. It features aggregated metrics across all LGUs, including a leaderboard of average resolution time, a leaderboard of citizen-satisfaction scores, and a stacked bar chart of report volume by category. Filters at the top will allow the Super Administrator to restrict the view by region or date range.

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

The fifth sprint will deliver the remaining citizen-facing features. The LGU Administrator will be able to publish official announcements through a rich-text editor; push notifications will be dispatched through Expo Push or Firebase Cloud Messaging, with an SMS fallback through a Philippine SMS gateway; and a broadcast-by-barangay capability will be exposed. The town map will be implemented with MapLibre GL over OpenStreetMap tiles and will highlight government offices, hospitals, schools, and tourist spots. The moderated community forum will be wired to an automated profanity filter and an image safety scan, with a moderation queue for posts that fail the filter. The chatbot will search the LGU's curated FAQ knowledge base as its primary response mechanism; if no FAQ match is found, the question will be forwarded to Gemini AI, which will generate an answer as a fallback.

#### **Phase 6: Sprint 5 — LGU Admin and Super Admin Dashboards**

The sixth sprint will complete the management interfaces. The LGU Admin Dashboard will gain its routing-rule editor, service-level-agreement tracker calibrated to the categories of Republic Act No. 11032, audit-log viewer, and forum moderation console. The Super Admin Dashboard will gain its LGU registration workflow, feature-flag console, cross-LGU analytics view, and Data Privacy Act compliance dashboard. By the close of the sprint, both dashboards will be feature-complete and their analytics will be reconciled against the product analytics tool.

#### **Phase 7: Sprint 6 — Hardening, Security Review, and Data-Privacy Artifacts**

The seventh sprint will prepare the system for evaluation and defense. Security testing will be performed using OWASP ZAP for dynamic vulnerability scanning, Semgrep for static analysis, and npm audit for dependency scanning. A penetration-style review of the data isolation between LGUs will be conducted to confirm that no cross-LGU data leakage is possible. Performance load testing will be performed with k6 against the busiest endpoints, and an accessibility check will be performed with axe-core to verify alignment with WCAG 2.1 AA and the spirit of Batas Pambansa Bilang 344. The Privacy Notice, the Privacy Impact Assessment, the Data Protection Officer designation, and the Data Subject Access Request workflow will be finalized in this sprint so that the system can be defended as compliant with Republic Act No. 10173 and NPC Circular 16-01.

#### **Phase 8: Sprint 7 — User Acceptance Testing and Production Release**

The closing sprint will move AGAPP from staging into production. User Acceptance Testing will be conducted with citizen respondents and LGU personnel of the partner municipality using the System Usability Scale and an ISO/IEC 25010 evaluation questionnaire; functionality testing, browser compatibility testing, and device compatibility testing will be intensified during this period. Bug fixes and minor refinements that arise during UAT will be applied. The citizen mobile application will be released to Google Play through its internal and closed testing tracks and to TestFlight on iOS, while the LGU Admin and Super Admin dashboards will be deployed to a live cloud-hosting environment. Training will be provided to the designated LGU Administrator and to selected LGU Personnel, and a short orientation will be conducted for the partner LGU's designated Data Protection Officer. The Sprint Review and Sprint Retrospective held at the close of this sprint will document the evaluation results and the lessons learned for the next major release.

### **Project Testing and Evaluation Procedures**

The system will be tested for functionality, browser compatibility, and device compatibility, and will be evaluated using the System Usability Scale (SUS) and ISO/IEC 25010 to assess product quality.

#### **Project Testing**

##### **Functionality Testing**

According to ISO/IEC 25010 (2011), functional suitability is the degree to which a product or system provides functions that meet stated and implied needs when used under specified conditions; the standard decomposes this characteristic into functional completeness, functional correctness, and functional appropriateness. Functionality testing is therefore the activity that verifies, against the user-facing specifications, whether each declared function performs the task it is supposed to perform and produces the correct result. During this process, the developers will perform tests to ensure the system meets its objectives, focusing on the user interface and confirming that all functions are working correctly. By using a testing table, the developers will track the expected result, the function, the action, the actual result, and the status (passed or failed) for every interactive element. This testing will not only verify system performance but will also highlight areas for improvement, guiding the developers in refining the system.

*Table 1. Functionality Testing in Super Administrator Page*

| Test Sequence | Expected Result | Function | Action | Actual Result | Status |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Sign in button | Redirects to Super Admin dashboard | Authenticates Super Admin login | Click | (To be tested) | Passed/Failed |
| Add LGU button | Show Add LGU form | Allows the Super Admin to register a new LGU municipality | Click | (To be tested) | Passed/Failed |
| Edit LGU button | Show Edit LGU form | Allows the Super Admin to edit LGU details | Click | (To be tested) | Passed/Failed |
| Deactivate LGU button | Show confirmation dialog | Deactivates an existing LGU | Click | (To be tested) | Passed/Failed |
| Feature Flag toggle | Enable or disable a module per LGU | Controls which AGAPP modules are visible to each LGU | Click | (To be tested) | Passed/Failed |
| Cross-LGU Analytics button | Show aggregated metrics across all LGUs | Loads the cross-LGU dashboard | Click | (To be tested) | Passed/Failed |
| Export button | Show export options | Initiates data export | Click | (To be tested) | Passed/Failed |
| Add user button | Show Add User form | Allows the Super Admin to add a new user | Click | (To be tested) | Passed/Failed |
| Edit user button | Show Edit User form | Allows the Super Admin to edit user details | Click | (To be tested) | Passed/Failed |
| Reset key button | Show Reset Password dialog | Allows setting a new password for a user | Click | (To be tested) | Passed/Failed |
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
| Resolve button | Mark a report as Resolved | Moves the report to Resolved and triggers the citizen feedback prompt | Click | (To be tested) | Passed/Failed |
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
| Sign Up button | Show sign-up screen | Proceeds to citizen sign-up | Click | (To be tested) | Passed/Failed |
| Send OTP to email button | Send one-time password to the citizen's email | Triggers email OTP delivery | Click | (To be tested) | Passed/Failed |
| Verify OTP button | Authenticate citizen | Completes account creation and proceeds to profile form | Click | (To be tested) | Passed/Failed |
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
