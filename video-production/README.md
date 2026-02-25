# Demo Video Production Kit

This folder contains production-ready scripts for 5 client demo videos:
1. Suite Overview Demo
2. AI Scheduling & Reminder Assistant
3. Legal Client Intake Bot
4. AI Research Assistant for Lawyers
5. Real Estate Lead Nurture Bot

## Fast recording plan
- Tool: Loom or Screen Studio.
- Length: 2 to 3 minutes per video.
- Format: 1080p, 30 fps, landscape.
- Audio: clear mic, no background music while speaking.
- Pace: one pain point, one workflow, one result, one CTA.

## File map
- `00-recording-checklist.md`: pre-record and post-edit checklist.
- `01-suite-overview.md`: master pitch demo.
- `02-ai-scheduling-reminder.md`: scheduling automation demo.
- `03-legal-client-intake-bot.md`: legal intake demo.
- `04-ai-research-assistant-lawyers.md`: legal research demo.
- `05-real-estate-lead-nurture-bot.md`: real estate follow-up demo.
- `thumbnails-and-hooks.md`: thumbnail text and first-line hooks.

## Final publish flow
1. Record each demo using the matching script.
2. Export and upload to YouTube (unlisted) or Vimeo.
3. Copy each URL into `components/demo-videos-section.tsx` -> `videoUrl`.
4. Rebuild and deploy.
