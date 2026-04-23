
Update the portfolio to match your resume and new photo while preserving the current visual style and mobile-friendly layout.

1. Profile photo update
- Replace the current hero image asset with the newly uploaded photo.
- Keep the portrait/vertical framing behavior already used in the Hero section.
- Fine-tune image positioning and object-fit so your face stays centered and the photo does not crop too aggressively on mobile.

2. Hero section refresh
- Change the headline and subtitle to reflect the resume positioning:
  - AI Engineer
  - Embedded Systems
  - Full-Stack ML
- Rewrite the intro copy to match your resume summary: end-to-end AI systems, embedded hardware, NLP, computer vision, real-world problem solving.
- Keep the “Available / Open to collaborations” style, but adjust wording if needed to better fit internships, projects, and freelance opportunities.

3. About and skills section refresh
- Replace the current generic skills badges with resume-based skills, grouped and prioritized around:
  - Python, Java
  - DSA, OOP
  - Git, GitHub, Linux
  - SQL, databases
  - Data analysis, preprocessing
  - Machine learning, deep learning
  - Computer vision
  - TensorFlow, PyTorch
  - Arduino, ESP systems, PlatformIO
  - HTML, CSS, JavaScript
  - Deployment tools such as Vercel/Cloudflare
- Update the info cards so they reflect your actual background instead of placeholder learning goals.
- Rework “Ask Me About” to focus on topics from the resume such as AI systems, computer vision, embedded ML, NLP workflows, and practical deployment.

4. Projects section rewrite
- Replace the placeholder project cards with resume-backed projects:
  - CropQuery
  - AI-CRAFT
  - MM-Solutions
  - Smart India Hackathon 2024 autonomous surveillance and rescue drone
- Update each project with stronger, resume-based descriptions and technology tags.
- Configure links per your instructions:
  - CropQuery: no public action buttons for now
  - AI-CRAFT: GitHub link to provided repo
  - MM-Solutions: GitHub link to provided repo
  - SIH Drone: GitHub link to provided repo
- Remove the current “Soon” state from projects that already exist.
- Adjust the project card UI so cards without links still look intentional and balanced.

5. Contact and portfolio details alignment
- Replace the current public email with the resume email you selected.
- Keep LinkedIn and GitHub links already present unless they need correction.
- Review supporting copy in contact/footer areas so the whole site consistently presents you as an AI/ML undergraduate working across embedded systems, CV, NLP, and full-stack ML.

6. Mobile polish and consistency pass
- Verify that updated hero copy, larger skills lists, and longer project descriptions remain clean on small screens.
- Keep spacing, wrapping, and card behavior optimized for mobile without breaking desktop layout.
- Preserve the existing minimal monochrome theme and current interaction style.

Technical details
- Files likely to update:
  - `src/components/portfolio/Hero.tsx`
  - `src/components/portfolio/About.tsx`
  - `src/components/portfolio/Projects.tsx`
  - `src/components/portfolio/Contact.tsx`
  - `src/assets/profile-photo.png`
- The uploaded image will be copied into `src/assets/profile-photo.png` and imported through the existing Hero pattern.
- Project card logic will be adjusted so link buttons render only when a valid GitHub/demo URL exists.
- Resume content will be mapped into structured arrays/objects already used by the components, keeping the code simple and easy to maintain.
