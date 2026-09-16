# Premium Dental Website Template

This is a high-end, conversion-optimized Next.js template designed specifically for dental practices. It features Framer Motion animations, a built-in booking flow, and dedicated conversion components (Smile Gallery, Insurance Partners).

## How to Customize for a New Client

When you land a new client, you only need to change content in a few specific places. Here is your cheat sheet:

### 1. Brand Colors
Update `src/app/globals.css`. 
Change the `--primary-*` HSL values to match the dentist's logo/branding.

### 2. Clinic Details (Phone, Address)
- **Footer:** `src/components/layout/Footer.tsx` (Update Address, Phone, Email, Hours)
- **Mobile Action Bar:** `src/components/layout/MobileActionbar.tsx` (Update the `href="tel:..."` link)
- **Contact Page:** `src/app/contact/page.tsx` (Update the text details and the Google Maps `<iframe>` link)

### 3. Images & Content
Search the codebase for `images.pexels.com` and replace them with the actual photos of the clinic.
- **Hero Image:** `src/components/home/Hero.tsx`
- **Clinic Interior:** `src/app/about/page.tsx`
- **Doctors:** `src/app/about/page.tsx` (Swap names, bios, and headshots)
- **Smile Gallery (Before/Afters):** `src/components/home/SmileGallery.tsx`
- **Services:** `src/components/home/ServicesEditorial.tsx` & `src/app/services/page.tsx`

### 4. Insurances / EMI Options
- **Logos:** `src/components/home/Insurances.tsx` (Currently set to Bajaj Finserv, Star Health, HDFC ERGO, ICICI Lombard for the Indian market).

## Running the Project

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
