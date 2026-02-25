# VishnuLabs Landing Page

Next.js landing page for VishnuLabs with modular sections and a dedicated **Client Demo Videos** section.

## Stack
- Next.js
- React
- TypeScript
- Tailwind CSS

## Local Setup
```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Production Build
```bash
npm run build
npm run start
```

## New Section Added
A new homepage section was added:

- `components/demo-videos-section.tsx`
- Integrated in `app/page.tsx`

This section renders 5 demo cards:
1. Suite Overview Demo
2. AI Scheduling & Reminder Assistant
3. Legal Client Intake Bot
4. AI Research Assistant for Lawyers
5. Real Estate Lead Nurture Bot

## Add Your Video Links
Edit the `demoVideos` array in:

- `components/demo-videos-section.tsx`

Set `videoUrl` for each item.

Supported formats:
- YouTube watch URL (`https://www.youtube.com/watch?v=...`)
- YouTube short URL (`https://youtu.be/...`)
- Vimeo URL (`https://vimeo.com/...`)
- Direct embed URL

## Video Creation Assets
Recording scripts and production checklists are included in:

- `video-production/README.md`
- `video-production/00-recording-checklist.md`
- `video-production/01-suite-overview.md`
- `video-production/02-ai-scheduling-reminder.md`
- `video-production/03-legal-client-intake-bot.md`
- `video-production/04-ai-research-assistant-lawyers.md`
- `video-production/05-real-estate-lead-nurture-bot.md`
- `video-production/thumbnails-and-hooks.md`

## Notes
- If `videoUrl` is empty, the card shows a placeholder prompt.
- Existing sections were not modified beyond inserting this new section in the page flow.
