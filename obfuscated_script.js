// File: main_script.js
// Your secret code. Keep this file safe.

(function() {
    'use strict';
    console.log("Exness Customizer Pro: Main script loaded successfully.");

    // =================================================================================
    // --- SCRIPT 1: Exness Final Fix (For /pa/trading/accounts) ---
    // =================================================================================
    (function() {
        let styleInjected = false, buttonsModified = false, modsComplete = false;
        function replaceBalance() { /* ... function code ... */ }
        function switchActiveTab() { /* ... function code ... */ }
        function updateAccountTag() { /* ... function code ... */ }
        function updateActionButtons() { /* ... function code ... */ }
        function performChanges() {
            if (modsComplete || !window.location.href.includes('/pa/trading/accounts')) return;
            if (!styleInjected && document.head) {
                const style = document.createElement('style');
                style.id = 'exness-fix-style';
                style.innerHTML = ` .MuiTabs-indicator, [data-test="header-totals-amount"] { visibility: hidden !important; } `;
                document.head.appendChild(style);
                styleInjected = true;
            }
            if (styleInjected) {
                const allDone = replaceBalance() && switchActiveTab() && updateAccountTag() && updateActionButtons();
                if (allDone) {
                    modsComplete = true;
                    const styleToRemove = document.getElementById('exness-fix-style');
                    if (styleToRemove) styleToRemove.remove();
                }
            }
        }
        const observer1 = new MutationObserver(performChanges);
        observer1.observe(document.documentElement, { childList: true, subtree: true });
    })();

    // =================================================================================
    // --- SCRIPT 2: Exness Ultimate Customizer (For /webtrading) ---
    // =================================================================================
    (function() {
        if (!window.location.href.includes('/webtrading')) return;
        let isEnabled = true, commandId = null;
        function changeDemoToReal() { /* ... function code ... */ }
        function replaceTopUpButton() { /* ... function code ... */ }
        function rearrangeDemoMenu() { /* ... function code ... */ }
        const observer2 = new MutationObserver(() => {
            if (isEnabled) {
                changeDemoToReal();
                replaceTopUpButton();
                rearrangeDemoMenu();
            }
        });
        function toggleScriptState() { /* ... function code ... */ }
        function registerMenuCommand() { /* ... function code ... */ }
        async function initialize() {
            isEnabled = await GM_getValue('scriptEnabled_webtrading', true);
            registerMenuCommand();
            observer2.observe(document.body, { childList: true, subtree: true });
            if (isEnabled) {
                setTimeout(() => {
                    changeDemoToReal();
                    replaceTopUpButton();
                    rearrangeDemoMenu();
                }, 500);
            }
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initialize);
        } else {
            initialize();
        }
    })();
})();

// NOTE: I have shortened the function bodies above for clarity in this example.
// You should use your FULL, complete code in the main_script.js file.
