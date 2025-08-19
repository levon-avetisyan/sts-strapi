# Homepage Content Type Setup

## Overview
The "Homepage" content type has been created to manage the main page content for your termite control company website, focusing on the "How It Works" section and "Hero Section" for streamlined content management.

## Content Type Structure

### Homepage Content Type
- **howItWorksSection** (Component): The "How It Works" section component (required)
- **heroSection** (Component): Main hero section with headlines and CTAs (required)

### How It Works Component
- **sectionTitle**: "How It Works" (with default value)
- **sectionSubtitle**: "Our simple 4-step process protects your home from termites" (with default value)
- **processSteps**: Repeatable component for each step (1-10 steps allowed)

### Process Step Component
- **stepNumber**: Step identifier (e.g., "01", "02", "03", "04")
- **stepTitle**: Title of each step (e.g., "Free Inspection", "Install Protection")
- **stepDescription**: Detailed description of what happens in each step
- **stepIcon**: Icon image for visual representation (images only)
- **iconLabel**: Accessibility label for screen readers

### Hero Section Component
- **mainHeadline**: "Protect Your Home" (with default value)
- **subHeadline**: "Before It's Too Late" (with default value)
- **heroDescription**: Hero section subtitle text
- **heroBackgroundImage**: Background image for the hero section (required)
- **trustBadgeText**: Trust badge text with default value
- **primaryCTAText**: "Get Free Inspection Today" (with default value)
- **socialProofItems**: Repeatable component for social proof (1-5 items allowed)

### Social Proof Item Component
- **proofNumber**: Proof number or text (e.g., "Retreatment", "24/7", "Free")
- **proofLabel**: Proof label (e.g., "Guarantee", "Emergency Service", "Estimates")

## Setup Instructions

### 1. Restart Strapi
After creating the content type, restart your Strapi application:
```bash
npm run dev
```

### 2. Set Up Permissions
1. Go to Settings → Users & Permissions Plugin → Roles
2. Select "Authenticated" role
3. Under "Homepage" permissions, enable:
   - find
   - findOne
   - create
   - update
   - delete
4. Select "Public" role
5. Under "Homepage" permissions, enable:
   - find
   - findOne
6. Save the changes

### 3. Create Homepage Content
1. Go to Content Manager → Homepage
2. Click "Create new entry"
3. Fill in both required sections:

#### How It Works Section
- Section Title: "How It Works"
- Section Subtitle: "Our simple 4-step process protects your home from termites"
- Add at least 3 Process Steps with step numbers, titles, descriptions, and icons

#### Hero Section
- Main Headline: "Protect Your Home"
- Sub Headline: "Before It's Too Late"
- Add hero description
- Upload hero background image
- Configure trust badge text and primary CTA
- Add 1-5 social proof items

4. Save and publish the entry

## API Endpoints

Once set up, the following API endpoints will be available:

- `GET /api/homepages` - Get all homepage entries
- `GET /api/homepages/:id` - Get a specific homepage entry
- `POST /api/homepages` - Create a new homepage (requires authentication)
- `PUT /api/homepages/:id` - Update a homepage (requires authentication)
- `DELETE /api/homepages/:id` - Delete a homepage (requires authentication)

## Public API Access

To make the homepage publicly accessible, ensure the "Public" role has access to:
- `find` - List all homepage entries
- `findOne` - View individual homepage details

## Sample Data

A focused sample homepage structure has been created in `sample-homepage.json` with:
1. **How It Works**: 4-step process for termite control
2. **Hero Section**: Main headlines and social proof items

## Content Management

- Use the Strapi admin panel to manage homepage content
- Enable draft/publish workflow for content approval
- Update content as your business evolves
- Ensure all images have proper accessibility labels
- Focus on the core messaging and process steps

## Frontend Integration

The homepage content can be displayed on your website by:
1. Fetching data from the `/api/homepages` endpoint
2. Displaying the "How It Works" section with all process steps
3. Rendering the hero section with headlines, background image, and social proof
4. Implementing responsive design for both sections
5. Updating automatically when content changes in Strapi

## Image Requirements

- **Hero Background**: High-resolution image (1920x1080px recommended)
- **Icons**: Consistent style and size (64x64px or 128x128px recommended)
- **Formats**: PNG, JPG, SVG recommended for web optimization

## Validation Rules

- **Required Fields**: All section titles, main content, and primary images
- **Minimum Requirements**: At least 3 process steps
- **Image Types**: All media fields support images only for consistency
- **Component Limits**: Process steps (1-10), social proof (1-5)

## Best Practices

- Keep section titles concise and impactful
- Use high-quality, optimized images for all media fields
- Write compelling, benefit-focused content for each section
- Ensure all icons have descriptive accessibility labels
- Focus on the core value proposition and process clarity
- Keep social proof items relevant and credible
