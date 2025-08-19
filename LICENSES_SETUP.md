# Licenses Content Type Setup

## Overview
The "licenses" content type has been created to manage all business licenses and credentials through the Strapi CMS. This allows for dynamic display of licenses on your website.

## Content Type Structure

### Required Fields
- **type** (Text): License type names (e.g., "State License Number", "UBI Number", "Sentricon Branch Code")
- **number** (Text): Actual license/certification number (e.g., "110747", "605885707", "CSS#10222417")
- **status** (Enumeration): Dropdown with options: "active", "inactive", "pending", "expired"
- **category** (Enumeration): Dropdown with options: "license", "certification", "business", "insurance"
- **isPublic** (Boolean): Checkbox to control whether the license appears on the public website (default: true)

### Optional Fields
- **description** (Text): Multi-line text field for additional details about the license
- **issuingAuthority** (Text): Organization that issued the license
- **expirationDate** (Date): Date picker for when the license expires (if applicable)

## Setup Instructions

### 1. Restart Strapi
After creating the content type, restart your Strapi application:
```bash
npm run dev
```

### 2. Set Up Permissions
1. Go to Settings → Users & Permissions Plugin → Roles
2. Select "Authenticated" role
3. Under "License" permissions, enable:
   - find
   - findOne
4. Select "Public" role
5. Under "License" permissions, enable:
   - find
   - findOne
6. Save the changes

### 3. Import Sample Data
1. Go to Content Manager → License
2. Click "Create new entry"
3. Use the sample data from `sample-licenses.json` or create your own entries

## API Endpoints

Once set up, the following API endpoints will be available:

- `GET /api/licenses` - Get all licenses
- `GET /api/licenses/:id` - Get a specific license
- `POST /api/licenses` - Create a new license (requires authentication)
- `PUT /api/licenses/:id` - Update a license (requires authentication)
- `DELETE /api/licenses/:id` - Delete a license (requires authentication)

## Public API Access

To make licenses publicly accessible, ensure the "Public" role has access to:
- `find` - List all licenses
- `findOne` - View individual license details

## Filtering Public Licenses

To only show public licenses on your website, use the API with a filter:
```
GET /api/licenses?filters[isPublic][$eq]=true&filters[status][$eq]=active
```

## Sample Data

Three sample licenses have been created:
1. **State License Number**: Washington State Pest Control License
2. **UBI Number**: Business Registration Number  
3. **Sentricon Branch Code**: Product Certification Code

## Content Management

- Use the Strapi admin panel to manage licenses
- Enable draft/publish workflow for content approval
- Set expiration dates and update statuses as needed
- Control public visibility with the isPublic checkbox

## Frontend Integration

The licenses can be displayed on your website by:
1. Fetching data from the `/api/licenses` endpoint
2. Filtering for public and active licenses
3. Displaying them in a structured format
4. Updating automatically when content changes in Strapi
