import React from "react";
import { versionsConfig } from "../versions-config";

// CSS-in-JS styles
const styles = {
    container: {
        padding: "12px 16px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(135deg, rgba(41, 109, 246, 0.05) 0%, rgba(41, 109, 246, 0.1) 100%)",
    } as React.CSSProperties,
    frameworkBadge: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 10px",
        borderRadius: "12px",
        fontSize: "11px",
        fontWeight: 600,
        textTransform: "uppercase" as const,
        letterSpacing: "0.5px",
        background: "linear-gradient(135deg, #296df6 0%, #1a4fd6 100%)",
        color: "white",
        marginBottom: "10px",
    } as React.CSSProperties,
    versionLabel: {
        fontSize: "12px",
        color: "rgba(48, 48, 48, 0.7)",
        marginBottom: "4px",
    } as React.CSSProperties,
    selectWrapper: {
        position: "relative" as const,
    } as React.CSSProperties,
    select: {
        width: "100%",
        padding: "8px 28px 8px 10px",
        border: "1px solid rgba(0, 0, 0, 0.15)",
        borderRadius: "6px",
        background: "white",
        fontSize: "13px",
        color: "rgba(48, 48, 48, 1)",
        cursor: "pointer",
        appearance: "none" as const,
        outline: "none",
        WebkitAppearance: "none" as const,
        MozAppearance: "none" as const,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M2 4l4 4 4-4'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 8px center",
        backgroundSize: "12px",
    } as React.CSSProperties,
};

/**
 * Version Switcher Component
 * 
 * Displays a framework badge and version dropdown in the Storybook toolbar.
 * Clicking on a version navigates to the corresponding Storybook.
 */
export const VersionSwitcher: React.FC = () => {
    const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const url = event.target.value;
        if (url && url !== "#") {
            window.location.href = url;
        }
    };

    const currentVersion = versionsConfig.versions.find(v => v.current);

    return (
        <div style={styles.container}>
            {/* Framework Badge */}
            <div style={styles.frameworkBadge}>
                <span>{versionsConfig.frameworkIcon}</span>
                <span>{versionsConfig.frameworkLabel}</span>
            </div>

            {/* Version Switcher */}
            <div style={styles.versionLabel}>Version</div>
            <div style={styles.selectWrapper}>
                <select
                    style={styles.select}
                    value={currentVersion?.url || "#"}
                    onChange={handleVersionChange}
                >
                    {versionsConfig.versions.map((version, index) => (
                        <option key={index} value={version.url}>
                            {version.label}
                            {version.current ? " ✓" : ""}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default VersionSwitcher;
