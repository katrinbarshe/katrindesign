Project Instructions

Git Workflow

Never run Git commands that change history or the remote repository
(git add, git commit, git push, git rebase, etc.) unless the user
explicitly asks for it in their current message.

Rules:


Apply file edits (code, design, config, etc.) immediately as requested — do not wait for permission to edit files, only for Git actions.
The user may give several rounds of edits in separate messages. Just keep applying changes to files and wait for further instructions.
Do not commit or push on your own initiative, even if it seems like a natural checkpoint. If you think a commit would be useful (e.g. before a risky change), ask the user first — don't just do it.
Only when the user says something like "commit this", "push it", "publish to git", "make a commit" — then gather all the accumulated changes since the last commit and commit them (split into logical commits if that makes sense), and push only if asked to.
Read-only Git commands (git status, git diff, git log) are fine to run anytime without asking, since they don't change anything.