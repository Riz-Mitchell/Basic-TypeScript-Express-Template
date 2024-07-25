# Library Management System

## Table of Contents
1. [Introduction](#introduction)
2. [User Roles](#user-roles)
3. [Authentication & Authorization](#authentication--authorization)
4. [Book Inventory Management](#book-inventory-management)
5. [Member Management](#member-management)
6. [Book Loans](#book-loans)
7. [Member Portal](#member-portal)
8. [Notifications](#notifications)
9. [Reporting](#reporting)
10. [User Interface](#user-interface)
11. [Technical Requirements](#technical-requirements)

## Introduction
This document outlines the business requirements for a Library Management System. The system is designed to manage book inventory, handle member registrations, and track book loans for a local library.

## User Roles
- **Admin:** Has full access to the system, can manage books, members, and oversee all operations.
- **Librarian:** Can manage book inventory and member details, and handle book loans and returns.
- **Member:** Can view available books, borrow books, and check loan status.

## Authentication & Authorization
- **Admin and Librarian:**
  - Must log in using a username and password.
  - Passwords should be hashed and stored securely.
  - Implement role-based access control.
- **Member:**
  - Must register with their personal details and receive a unique member ID.
  - Can log in to view their profile and loan status.

## Book Inventory Management
- **Admin and Librarian can:**
  - Add new books to the inventory with details such as title, author, genre, ISBN, and publication date.
  - Edit book details.
  - Remove books from the inventory.
  - Mark books as available or unavailable.

## Member Management
- **Admin and Librarian can:**
  - Add new members with personal details (name, address, contact information).
  - Edit member details.
  - View member borrowing history.
  - Deactivate/activate member accounts.

## Book Loans
- **Librarian can:**
  - Issue books to members by entering the member ID and book ID.
  - Set due dates for book returns.
  - Record book returns and update the status of the book to available.
  - Calculate and record late fees if books are returned past the due date.

## Member Portal
- **Members can:**
  - Log in to view available books.
  - Request to borrow a book.
  - View their current loans and due dates.
  - Extend the loan period for a book (if allowed by the library policies).
  - View their borrowing history.

## Notifications
- **Email notifications:**
  - To members when a book they requested is available.
  - Reminder to members about upcoming due dates.
  - Notification to members about overdue books and associated fees.

## Reporting
- **Admin can:**
  - Generate reports on:
    - Books borrowed and returned within a specific period.
    - Overdue books and pending fees.
    - Active and inactive members.
    - Inventory status (available vs. unavailable books).

## User Interface
- **Admin and Librarian Interface:**
  - Dashboard showing key metrics (number of books, members, current loans).
  - Forms for managing books and members.
  - List views with search and filter options for books and members.
  - Loan management interface with due date handling and fee calculation.
- **Member Interface:**
  - User-friendly interface to browse and search for books.
  - Personal profile page showing current loans, borrowing history, and fees.

## Technical Requirements
- **Backend:**
  - RESTful API for all operations.
  - Authentication and authorization using JWT.
  - Data validation and error handling.
- **Database:**
  - MongoDB
- **Hosting and Deployment:**
  - Secure hosting environment.
  - Regular backups of the database.
  - Continuous integration and deployment (CI/CD) setup for smooth updates.

