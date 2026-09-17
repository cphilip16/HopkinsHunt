# AGENTS.md

Welcome! This document defines the rules, conventions, and workflows for AI agents and human contributors working within this repository.

---

## 1. Core Git & Collaboration Workflow

Because multiple contributors are actively collaborating on this repository, strict adherence to branch isolation and review standards is required.

### ⛔ Never Push Directly to `main`
- **Direct commits or pushes to the `main` branch are strictly prohibited.**
- No agent or contributor should ever run `git push origin main` or commit directly while on `main`.

### 🌿 Feature Branch Workflow
- **Always create a separate branch** for any change, fix, or feature.
- **Naming Conventions**:
  - `feat/<feature-name>` for new features
  - `fix/<issue-name>` for bug fixes
  - `chore/<task-name>` for maintenance, dependencies, or refactoring
  - `docs/<topic>` for documentation updates

### 🔀 Pull Requests & Merging
- All changes must be merged into `main` **exclusively via Pull Requests (PRs)**.
- Ensure your branch is rebased on or up to date with `main` before opening or merging a PR.
- Every PR should include:
  - A clear summary of the changes made.
  - The problem or user story being addressed.
  - Verification steps or test results demonstrating the change works.
- Code should be reviewed and verified (CI checks passing) before merging.

---

## 2. Guidelines for AI Agents

When acting on tasks in this repository, agents must:

1. **Check Current Branch Before Modifying Files**:
   - Verify the current active branch using `git branch --show-current` or `git status`.
   - If on `main`, immediately checkout a new branch (`git checkout -b <branch-name>`) before writing any code.
2. **Atomic & Descriptive Commits**:
   - Write clear, imperative commit messages (e.g., `feat: add user authentication handler`).
   - Group related changes together rather than making massive omnibus commits.
3. **Verify Changes**:
   - Run existing unit tests, lint checks, or build commands prior to submitting PRs.
4. **Never Force-Push**:
   - Never use `git push --force` on shared branches or `main`.

---

## 3. General Development Practices

- **Documentation**: Keep documentation, docstrings, and READMEs updated alongside code changes.
- **Minimal Diffs**: Keep changes focused only on the requested task to minimize merge conflicts with other contributors.
- **Clean Workspace**: Avoid leaving temporary files, debug logs, or scratch artifacts in the tracked git tree.

