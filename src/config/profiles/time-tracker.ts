// TIME TRACKER · profile empty-steps stub · demo-2026-strata · 2026-09-08
// The Time Tracker demo is a full application (Weekly Grid + Team View
// manager surfaces) surfaced as a chapter of the demo host. It uses
// noTour:true + defaultPage:'time-tracker' so the DemoSidebar/Spotlight/
// Banner overlay is skipped and the app renders directly.
//
// Source: config-evolution/time-tracker/src/TimeTracker.tsx@f9f83e1
// See src/features/time-tracker/ for the lifted app + docs at
// config-evolution/time-tracker/CLAUDE.md for the coaching-copy rules.

import type { StepBehavior } from '../../components/demo/DemoStepBanner'
import type { DemoStep } from '../demoProfiles'

export const TIME_TRACKER_STEPS: DemoStep[] = []
export const TIME_TRACKER_STEP_BEHAVIOR: Record<string, StepBehavior> = {}
export const TIME_TRACKER_STEP_MESSAGES: Record<string, string[]> = {}
export const TIME_TRACKER_SELF_INDICATED: string[] = []
