import { createContext, useState, useEffect, type ReactNode } from 'react';
import { DEMO_PROFILES, type DemoProfile, type DemoProfileId } from '../config/demoProfiles';

export interface DemoProfileContextType {
    activeProfile: DemoProfile;
    profiles: DemoProfile[];
    switchProfile: (id: DemoProfileId) => void;
}

// Exported so the hook (in useDemoProfile.ts) can subscribe. Splitting the
// hook into its own module keeps this file as a pure component file, which
// is what Vite's Fast Refresh requires — otherwise every save here triggers
// a full page reload and resets demo state mid-session.
export const DemoProfileContext = createContext<DemoProfileContextType | undefined>(undefined);

export function DemoProfileProvider({ children }: { children: ReactNode }) {
    // TT.48.1 · Diego 2026-09-08 · flipped default to 'time-tracker' so fresh
    // sessions land on the Wurkwel demo (current focus). Bumped the version
    // marker so existing browsers with an older saved profile also reset once ·
    // avoids Diego + stakeholders having to clear localStorage manually.
    const DEFAULT_PROFILE_VERSION = '2026-09-08-tt'
    const [activeProfileId, setActiveProfileId] = useState<DemoProfileId>(() => {
        const savedVersion = localStorage.getItem('demo-profile-version')
        const savedProfile = localStorage.getItem('demo-profile') as DemoProfileId | null
        if (savedVersion === DEFAULT_PROFILE_VERSION && savedProfile) return savedProfile
        return 'time-tracker'
    })

    useEffect(() => {
        localStorage.setItem('demo-profile-version', DEFAULT_PROFILE_VERSION)
    }, [])

    useEffect(() => {
        localStorage.setItem('demo-profile', activeProfileId);
    }, [activeProfileId]);

    const activeProfile = DEMO_PROFILES.find(p => p.id === activeProfileId) || DEMO_PROFILES[0];

    const switchProfile = (id: DemoProfileId) => {
        setActiveProfileId(id);
    };

    return (
        <DemoProfileContext.Provider value={{ activeProfile, profiles: DEMO_PROFILES, switchProfile }}>
            {children}
        </DemoProfileContext.Provider>
    );
}
