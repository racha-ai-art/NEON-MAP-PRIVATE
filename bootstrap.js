/* NEON MAP v0.10.0: one floating launcher, one map visibility controller. */
const NM_VERSION = '0.10.0';

function startNeonMap() {
    // The host may evaluate an extension twice. Never install duplicate listeners.
    if (globalThis.__NEON_MAP_BOOTSTRAPPED) return;
    globalThis.__NEON_MAP_BOOTSTRAPPED = true;
    let pendingOpen = false;
    let loadError = '';

    // Refresh both assets together; previously cached CSS may still hide MAP.
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = new URL('./style.css?v=' + NM_VERSION, import.meta.url).href;
    css.id = 'neon-map-styles';
    document.head.append(css);
    for (const id of ['neon-map-startup-bubble', 'neon-map-chat-toggle', 'neon-map-options-entry']) {
        document.getElementById(id)?.remove();
    }

    const root = document.getElementById('neon-map-v3') || document.createElement('div');
    root.id = 'neon-map-v3';
    if (root.parentElement !== document.body) document.body.append(root);
    const launch = document.getElementById('nm-launch') || document.createElement('button');
    launch.id = 'nm-launch';
    launch.type = 'button';
    launch.title = 'เปิด NEON MAP · ลากเพื่อย้ายปุ่ม';
    launch.setAttribute('aria-label', 'เปิดแผนที่ NEON MAP');
    launch.setAttribute('aria-controls', 'nm-panel');
    launch.setAttribute('aria-expanded', 'false');
    launch.innerHTML = '<span class="nm-bubble-icon" aria-hidden="true">◈</span><span class="nm-bubble-label">MAP</span>';
    if (launch.parentElement !== root) root.prepend(launch);

    function openMap() {
        if (globalThis.__NEON_MAP_READY && typeof globalThis.__NEON_MAP_SET_OPEN === 'function') {
            pendingOpen = false;
            globalThis.__NEON_MAP_SET_OPEN(true);
            return;
        }
        if (loadError || globalThis.__NEON_MAP_ERROR) {
            alert('NEON MAP โหลดไม่สำเร็จ: ' + (loadError || globalThis.__NEON_MAP_ERROR) + '\nกรุณารีโหลดหน้า SillyTavern หลังอัปเดตส่วนขยาย');
            return;
        }
        pendingOpen = true;
        launch.setAttribute('aria-busy', 'true');
        launch.title = 'กำลังโหลด NEON MAP…';
    }
    launch.addEventListener('click', openMap);

    function mountSettings() {
        const host = document.getElementById('extensions_settings');
        if (!host || document.getElementById('neon-map-settings-entry')) return;
        const box = document.createElement('div');
        box.id = 'neon-map-settings-entry';
        box.className = 'extension_container';
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'menu_button';
        button.textContent = 'Open NEON MAP · ' + NM_VERSION;
        button.addEventListener('click', openMap);
        box.append(button);
        host.prepend(box);
    }
    mountSettings();
    // Watch direct host replacements, rather than every pin and streaming chat token.
    const observer = new MutationObserver(() => {
        if (root.parentElement !== document.body) document.body.append(root);
        mountSettings();
    });
    observer.observe(document.body, {childList: true});

    function engineReady() {
        launch.removeAttribute('aria-busy');
        launch.title = 'เปิด NEON MAP · ลากเพื่อย้ายปุ่ม';
        mountSettings();
        if (pendingOpen) openMap();
    }
    document.addEventListener('neon-map:ready', engineReady, {once: true});
    import('./gm-ui.js?v=' + NM_VERSION).then(() => {
        if (globalThis.__NEON_MAP_READY) engineReady();
        else if (globalThis.__NEON_MAP_ERROR) throw new Error(globalThis.__NEON_MAP_ERROR);
    }).catch(error => {
        loadError = String(error?.message || error);
        globalThis.__NEON_MAP_ERROR = loadError;
        launch.removeAttribute('aria-busy');
        launch.querySelector('.nm-bubble-label').textContent = 'MAP !';
        launch.title = 'แตะเพื่อดูข้อผิดพลาดของ NEON MAP';
        console.error('[NEON MAP] Load failed', error);
    });
}

if (document.body) startNeonMap();
else document.addEventListener('DOMContentLoaded', startNeonMap, {once: true});
