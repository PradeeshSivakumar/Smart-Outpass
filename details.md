Master Project Specification: Smart Outpass System (CIT)

🎯 Project Overview

Smart Outpass is a production-grade, cloud-native outpass management platform specifically designed for the Chennai Institute of Technology (CIT). The system digitizes the traditional paper-based leave process into a secure, role-based digital workflow featuring QR-based gate verification and multi-level authorization.

👥 User Roles & Access Control (RBAC)

The system operates on a strict 6-role hierarchy. All accounts must be verified under the @citchennai.net domain.

Student:

Apply for "Day Out," "Home Leave," or "Medical" passes.

Real-time tracking of the 3-level approval status.

Access to a unique Digital QR Pass once fully authorized.

Teacher (Level 1):

Review pending requests for assigned department students.

Approve/Reject to move the request to the HOD.

HOD (Level 2):

Review Teacher-approved requests.

Access to Department Analytics (leave trends, peak times, reason distribution).

Warden (Final Authority):

Review HOD-approved requests.

Finalize approval to generate the QR code.

Security / Gate Admin:

QR Scanner interface for verifying student credentials.

Validation of the "Validity Window" (From/To timestamps).

Logging of precise Entry and Exit events.

Super Admin:

Global User Directory management.

Role reassignment and system integrity audits.

Institution-wide data overview.

🔄 Strict Approval Workflow

A request must follow this path without exception:

Student Submits $\rightarrow$ Request enters Teacher Queue.

Teacher Approves $\rightarrow$ Request enters HOD Queue.

HOD Approves $\rightarrow$ Request enters Warden Queue.

Warden Approves $\rightarrow$ Final Status set to approved $\rightarrow$ QR Code activated.

🛠️ Technology Stack

Frontend: React.js (Component-based architecture).

Styling: Tailwind CSS (Glassmorphism, Responsive Design).

Icons: Lucide-React.

Backend/Database: Firebase Firestore (Real-time listeners).

Auth: Firebase Authentication (Restricted to @citchennai.net).

Utilities: Public QR API (https://www.google.com/search?q=qrserver.com) for secure image-based code generation.

📊 Advanced Features Implemented

1. Notification Engine

Push-style alerts: Real-time bell notifications for all users.

Logic:

Teachers/HODs notified when a new request enters their queue.

Students notified immediately upon approval/rejection at any level.

2. HOD Analytics Dashboard

Visual Reporting: Custom CSS-based charts tracking leave trends.

Metrics: Weekly request load, Medical vs. Personal leave ratios, and approval velocity.

3. Refined Gate Security

Digital Logs: Automatic recording of every student entry/exit with security officer timestamps.

Time-Fence Verification: The system automatically denies access if the current time is outside the approved fromTime and toTime window.

🗄️ Firestore Data Schema

users Collection

{
  "uid": "string",
  "name": "string",
  "email": "string (@citchennai.net)",
  "role": "student | teacher | hod | warden | security | admin",
  "department": "string",
  "registerNo": "string"
}


outpasses Collection

{
  "studentUid": "string",
  "type": "Day Out | Home Leave | Medical",
  "reason": "string",
  "fromTime": "ISO DateString",
  "toTime": "ISO DateString",
  "teacherStatus": "pending | approved | rejected",
  "hodStatus": "pending | approved | rejected",
  "wardenStatus": "pending | approved | rejected",
  "finalStatus": "pending | approved | rejected",
  "createdAt": "timestamp"
}


gate_logs Collection

{
  "outpassId": "string",
  "studentName": "string",
  "action": "Entry | Exit",
  "timestamp": "timestamp",
  "verifiedBy": "email"
}


🎨 UI/UX Design Principles

Modern Academic SaaS: Clean white backgrounds, slate-900 typography, and blue-600 accents.

Information Density: Dashboards prioritize "Pending Counts" and "Status Tracking" to minimize clicks.

Mobile-First: Gate Scanner and Student QR views are optimized for one-handed mobile 