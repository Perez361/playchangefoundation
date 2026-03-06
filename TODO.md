# TODO: Color Theme Change - Green to Dark Navy Blue

## Task
Change green color theme to dark navy blue (`primary`) throughout the project and fix initiative card alignment.

## Files to Edit:
- [x] 1. app/initiatives/page.tsx - Change green colors to navy blue, fix card alignment
- [x] 2. app/about/page.tsx - Change emerald badge colors to navy blue
- [x] 3. components/ContactForm.tsx - Change emerald colors to navy blue

## Changes Made:

### 1. app/initiatives/page.tsx
- CTA section: `bg-green-600` → `bg-primary`
- Checkmarks: `text-green-600` → `text-primary`
- Button: `text-green-600` → `text-primary`
- Added proper card alignment with `items-center` class

### 2. app/about/page.tsx
- Team badges: `bg-emerald-100 text-emerald-600` → `bg-primary/10 text-primary`
- Role text: `text-emerald-600` → `text-primary`
- Hover states: `hover:text-emerald-600` → `hover:text-primary`

### 3. components/ContactForm.tsx
- Icons: `text-emerald-600` → `text-primary`
- Links: `text-emerald-600` → `text-primary`
- Social buttons: `bg-emerald-600` → `bg-primary`
- Form focus: `focus:border-emerald-500` → `focus:border-primary`
- Form ring: `focus:ring-emerald-200` → `focus:ring-primary/20`
- Submit button: `bg-emerald-600 hover:bg-emerald-700` → `bg-primary hover:bg-primary/90`

## Status: COMPLETED ✅

