# Modern Web Application Development

This repository contains my progress and work through the **Modern Web Application Development** course. Each folder in this repository represents a class or assignment, where I explore various aspects of frontend and backend development using modern tools and frameworks.

## Table of Contents
- [Modern Web Application Development](#modern-web-application-development)
  - [Table of Contents](#table-of-contents)
  - [Course Overview](#course-overview)
  - [Technologies Covered](#technologies-covered)
  - [Book Reference](#book-reference)
  - [Class Overview](#class-overview)
    - [Class 1](#class-1)
    - [Class 2](#class-2)
    - [Class 3](#class-3)
    - [Class 4](#class-4)
    - [Class 5](#class-5)
      - [Example:](#example)
  - [How to Use](#how-to-use)
  - [Future Updates](#future-updates)
- [Chapter 14: Lists, Tables, and Forms](#chapter-14-lists-tables-and-forms)
    - [1. **Difference Between Child Selector and Descendant Selectors**](#1-difference-between-child-selector-and-descendant-selectors)
    - [2. **List Style Position**](#2-list-style-position)
    - [3. **List Style Type**](#3-list-style-type)
    - [4. **Table and Its Properties**](#4-table-and-its-properties)
    - [5. **Behavior When the Same Property Is Assigned to Parent, Child, and Grandchild**](#5-behavior-when-the-same-property-is-assigned-to-parent-child-and-grandchild)
    - [6. **Differentiate Between Table and Data Table**](#6-differentiate-between-table-and-data-table)
    - [7. **Empty Cell Hide**](#7-empty-cell-hide)
    - [8. **Border Spacing**](#8-border-spacing)
    - [9. **Border Collapse**](#9-border-collapse)
    - [10. **Thead, Tbody, and Tfoot Elements and Their CSS**](#10-thead-tbody-and-tfoot-elements-and-their-css)
    - [**Summary of Today's Class**](#summary-of-todays-class)

## Course Overview
This course is designed to teach complete web and web application development, using modern frameworks and tools. Topics covered include:
- Frontend: **HTML, CSS, JavaScript**
- Backend: **Node.js, Express.js**
- Frameworks: **React.js, Next.js**, and more
- API Integrations and Payment Gateways
- Databases: **SQL and NoSQL**

## Technologies Covered
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Frameworks**: React.js, Next.js
- **Databases**: MySQL, MongoDB
- **API Integrations**: REST APIs, GraphQL
- **Payment Gateways**: Stripe, PayPal, etc.

## Book Reference
I am following **Jon Duckett's HTML & CSS** as a primary reference for Module 1 of this course. You can find it [here](https://github.com/umairansari92/Modern-Web-Application-Development/tree/8ca163f9ca12e8c72d0ad1ef0e911492ebc8c74a/Books).


## Class Overview

### Class 1
**Topics:**
- Introduction to the course
- What is the web and how it works
- Understanding HTTP and forward slashes (`/`)
- Why we are learning web development

### [Class 2](https://github.com/umairansari92/Modern-Web-Application-Development/tree/8e8fccedaa6e1071ab38166e1016b9db44ea2fda/Class%2002)
**Topics:**
- Installing VS Code and basic introduction
- Learning HTML tags: `html`, `body`, `head`, `h1`, `p`

### [Class 3](https://github.com/umairansari92/Modern-Web-Application-Development/tree/8e8fccedaa6e1071ab38166e1016b9db44ea2fda/Class%2003)
**Topics:**
- HTML document structure
- Headings (`h1` to `h6`)
- Paragraphs and Lists (ordered, unordered, definition lists)

### [Class 4](https://github.com/umairansari92/Modern-Web-Application-Development/tree/8e8fccedaa6e1071ab38166e1016b9db44ea2fda/Class%2004)
**Topics:**
- Understanding `<!DOCTYPE html>` and setting up a basic HTML page
- Definition lists and nested lists
- Anchor tags and linking pages with `<a>`
- Create multiple pages and link them with each other.

### [Class 5](#)
**Date:** 20-10-2024  
**Topics:**
- Opening links in a new window using the `target` attribute with `_blank`
- Difference between absolute and relative URLs
  - **Absolute URLs**: Fixed URLs that navigate to an external website.
  - **Relative URLs**: URLs that navigate within the current site.
- Using `mailto` links to create email actions.
- Introduction to adding images to web pages and choosing the right formats for the web.
#### Example:
- To open a link in a new tab:
  ```html
  <a href="https://example.com" target="_blank">Visit Example</a>
- To create a mail link:
 ```html
  <a href="mailto:someone@example.com">Email Us</a>

## How to Use
1. Clone this repository:
git clone https://github.com/umairansari92/Modern-Web-Application-Development.git
2. Explore class folders for specific lessons and code examples.

## Future Updates
This repository will be updated regularly with more advanced topics, assignments, and projects as the course progresses. Stay tuned for:
- Full-stack development projects
- API integration
- Secure payment gateway implementation
- Deployment strategies






# Chapter 14: Lists, Tables, and Forms

### 1. Difference Between Child Selector and Descendant Selectors

- **Child Selector (`>`)**: This selector targets an element that is a **direct child** of another element.
    - **Syntax**: `parent > child`
    - **Behavior**: Only selects the immediate child element(s), not the deeper nested ones.
    - **Example**:
      ```css
      div > p {
          color: red;
      }
      ```
    - **Effect**: Only direct `<p>` elements inside a `<div>` will have the red color. Nested `<p>` elements will not be selected.

- **Descendant Selector (space)**: This selector targets **any element** that is inside another, no matter how deep.
    - **Syntax**: `parent descendant`
    - **Behavior**: Selects all the elements that are descendants (child, grandchild, etc.) of the parent element.
    - **Example**:
      ```css
      div p {
          color: blue;
      }
      ```
    - **Effect**: All `<p>` elements inside `<div>`, whether they are direct children or nested deeper, will be styled with blue text.

---

### 2. List Style Position

- **List Style Position** is a property that controls the position of the list item marker (bullet or number) in relation to the content of the list item.
    - **Syntax**: `list-style-position: inside | outside;`
    - **Values**:
      - **`inside`**: The bullet or number appears inside the list item box, affecting the alignment of the content.
      - **`outside`**: The bullet or number appears outside the list item box, typically affecting the alignment of the list item text.
    - **Example**:
      ```css
      ul {
          list-style-position: inside;
      }
      ```

---

### 3. List Style Type

- The **List Style Type** property defines the style of the list item marker (bullet, number, etc.).
    - **Syntax**: `list-style-type: disc | circle | square | decimal | none;`
    - **Values**:
      - **`disc`**: The default bullet (solid circle).
      - **`circle`**: An empty circle bullet.
      - **`square`**: A square bullet.
      - **`decimal`**: Numbered list (1, 2, 3, etc.).
      - **`none`**: No marker (no bullets or numbers).
    - **Example**:
      ```css
      ul {
          list-style-type: square;
      }
      ```

---

### 4. **Table and Its Properties**

- A **table** is used to display data in rows and columns. Here are some important table-related properties:
    - **`border`**: Sets the border around the table and its cells.
    - **`border-collapse`**: Specifies whether table borders should collapse into one or remain separate.
    - **`border-spacing`**: Defines the space between table cells.
    - **`padding`**: Adds space inside the table cells.
    - **`text-align`**: Aligns text within the table cells (left, center, right).
    - **`width`**: Specifies the width of the table and its cells.
  
    - **Example**:
      ```css
      table {
          width: 100%;
          border-collapse: collapse;
      }
      th, td {
          padding: 10px;
          border: 1px solid black;
      }
      ```

---

### 5. **Behavior When the Same Property Is Assigned to Parent, Child, and Grandchild**

- When assigning properties (like `border`, `color`, etc.) to a parent, child, and grandchild, the **CSS Cascade** and **Inheritance** rules apply.
    - **Inheritance**: Properties like `color` and `font-family` are inherited by child elements.
    - **Cascade**: If a property is applied to a parent, but the child or grandchild has a more specific selector or a rule overriding it, that rule will take precedence.
    
    - **Example**:
      ```css
      .parent {
          color: red;
      }
      .child {
          color: blue;
      }
      .grandchild {
          color: green;
      }
      ```
    - The **`.grandchild`** will display green, as it has the most specific rule. The child will be blue if it is not overwritten.

---

### 6. **Differentiate Between Table and Data Table**

- **Table**:
    - A table is a basic HTML structure used for displaying tabular data, using `<table>`, `<tr>`, `<th>`, and `<td>`.
  
- **Data Table**:
    - A data table is a more complex version of a table, often used for displaying dynamic data and may include features like sorting, filtering, and pagination.
    - **Libraries** like **DataTables** are used to turn static HTML tables into interactive data tables.
    
    - **Example** (using DataTables library):
      ```html
      <table id="example" class="display">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>John Doe</td>
                  <td>Developer</td>
                  <td>New York</td>
              </tr>
              <!-- More rows -->
          </tbody>
      </table>
      ```

---

### 7. **Empty Cell Hide**

- You can hide empty table cells using the **`empty-cells`** property.
    - **Syntax**: `empty-cells: show | hide;`
    - **Values**:
      - **`show`**: Displays empty cells (default behavior).
      - **`hide`**: Hides empty cells.
    - **Example**:
      ```css
      table {
          empty-cells: hide;
      }
      ```

---

### 8. **Border Spacing**

- The **`border-spacing`** property controls the space between cells in a table. It only works when **`border-collapse`** is set to `separate` (the default value for `border-collapse`).
    - **Syntax**: `border-spacing: value;`
    - **Example**:
      ```css
      table {
          border-spacing: 10px;
      }
      ```

---

### 9. **Border Collapse**

- The **`border-collapse`** property specifies whether the table's borders should collapse into one or remain separate.
    - **Syntax**: `border-collapse: collapse | separate;`
    - **Values**:
      - **`collapse`**: Merges adjacent borders into a single border.
      - **`separate`**: Keeps the borders separate (with spacing between them).
    - **Example**:
      ```css
      table {
          border-collapse: collapse;
      }
      ```

---

### 10. **Thead, Tbody, and Tfoot Elements and Their CSS**

- **`<thead>`**: Groups the header content of a table. This is used to define the table header, often with column names.
- **`<tbody>`**: Groups the body content of a table, containing the main data rows.
- **`<tfoot>`**: Groups the footer content, often used for summary or footer rows.
  
- **CSS** for styling these elements:
    - You can use CSS to style these elements individually to give the table a cleaner look.
    - **Example**:
      ```css
      thead {
          background-color: #f2f2f2;
          text-align: center;
      }
      tbody {
          background-color: white;
      }
      tfoot {
          background-color: #f2f2f2;
          text-align: right;
      }
      ```

---

### **Summary of Today's Class**

Today, we covered a range of important CSS and HTML concepts related to **Lists**, **Tables**, and **Forms**. We explored how to apply different styles to lists (e.g., list style type, list style position), worked with **tables** and their properties, and examined the behavior of CSS selectors like **child** and **descendant selectors**. Additionally, we discussed how to manage table cell spacing, hide empty cells, and structure complex data tables.

These topics will help you build organized, well-styled tables and forms, which are essential for displaying data clearly on web pages. Understanding the relationship between parent, child, and grandchild elements will make you more efficient in managing CSS inheritance and overriding rules.
