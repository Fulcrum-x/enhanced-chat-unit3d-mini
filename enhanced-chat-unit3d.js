// ==UserScript==
// @name         Enhanced Chat Unit3D Mini
// @version      1.0.0
// @description  Chat functionalities: Reply, Message and Gift buttons. BBCode buttons. Toggle menu. Simplified fork of Enhanced Chat Unit3D 2.1.6 by ZukoXZoku that respects the users selected style sheet.
// @icon         data:image/png;base64,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
// @match        https://aither.cc/
// @grant        GM_addStyle
// @license      MIT
// ==/UserScript==

(function () {
  "use strict";

  if (window.__U3D_ENHANCED_CHAT_INIT__) return;
  window.__U3D_ENHANCED_CHAT_INIT__ = true;

  const VERSION = "1.0.0";

  GM_addStyle(`
    /* Colors, borders and fonts come from the site's panelV2 / form__* classes. */
    .u3d-chat-header { position: relative; }
    html:not(.u3d-panel-actions) .u3d-chat-header .panel__action,
    html:not(.u3d-bbcodes) #bbCodesPanelShell,
    html:not(.u3d-reply) .u3d-action-btn--reply,
    html:not(.u3d-msg-gift) .u3d-action-btn--dm,
    html:not(.u3d-msg-gift) .u3d-action-btn--gift { display: none !important; }

    .u3d-settings-anchor { margin-right: 5px; z-index: 1; padding: 7px; }
    #settingsButton {
      cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
      font-size: 16px; width: 28px; height: 28px; margin: 0; padding: 0;
    }
    #settingsPanel {
      display: none; inset: auto; margin: 0; padding: 16px; z-index: 10011 !important;
      width: 360px; max-width: calc(100vw - 16px); box-sizing: border-box; font-size: 14px; font-family: inherit;
    }
    #settingsPanel.open { display: block; }
    #settingsPanel .title { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
    #settingsPanel .title .ver { font-size: 12px; white-space: nowrap; }
    #settingsPanel .section { min-width: 0; padding: 10px; margin: 14px 0 0; }
    #settingsPanel .row { display: flex; align-items: center; justify-content: space-between; padding: 6px 0; gap: 10px; }
    #settingsPanel .row .label { min-width: 0; margin: 0; font-weight: inherit; cursor: pointer; }
    #settingsPanel .row .form__checkbox { flex: 0 0 auto; margin: 0; }

    #bbCodesPanelShell { position: relative; display: inline-flex; width: 100%; }
    #bbCodesPanel {
      position: relative; z-index: 1; display: flex; flex-wrap: wrap; gap: 6px; width: 100%; margin: 10px 0 0; padding: 6px;
    }
    #bbCodesPanelShell .bbcode-button, #bbCodeDropdownMenu .bbcode-button {
      cursor: pointer; padding: 6px 10px 2px; margin: 0; font-size: inherit;
      display: inline-flex; align-items: center; justify-content: center; min-width: 34px; min-height: 30px;
    }
    .u3d-bb-more { position: relative; }
    #bbCodesPanelShell #bbCodeDropdown { padding: 8px 10px; }
    #bbCodeDropdown.open { outline: 1px solid currentColor; outline-offset: -1px; }
    #bbCodeDropdown i { transition: transform 0.2s ease; }
    #bbCodeDropdown.open i { transform: rotate(90deg); }
    #bbCodeDropdownMenu {
      display: none; inset: auto; margin: 0; padding: 10px; z-index: 10015 !important; box-sizing: border-box;
      width: 366px; min-width: 0; max-width: calc(100vw - 16px); max-height: calc(100vh - 16px); font-family: inherit;
    }
    #bbCodeDropdownMenu.open { display: block; }
    #bbCodeDropdownMenu .grid {
      display: grid; grid-template-columns: repeat(auto-fit, 36px); gap: 8px; align-items: center; justify-items: center;
    }
    #bbCodeDropdownMenu .bbcode-button { width: 36px; height: 32px; padding: 0; }
    /* Site themes may force relative positioning and clipping on panels; popups must stay fixed. */
    html body #bbCodeDropdownMenu, html body #settingsPanel { position: fixed !important; overflow: auto !important; }

    .u3d-action-bar { display: inline-flex; gap: 6px; margin-left: 6px; align-items: center; vertical-align: middle; }
    .u3d-action-bar .u3d-action-btn {
      cursor: pointer; width: 28px; height: 28px; margin: 0; padding: 0;
      display: inline-flex; align-items: center; justify-content: center;
    }
    html.u3d-actions-hover .u3d-action-bar { opacity: 0; pointer-events: none; transition: opacity .15s ease; }
    html.u3d-actions-hover .chatbox-message:hover .u3d-action-bar,
    html.u3d-actions-hover .message:hover .u3d-action-bar { opacity: 1; pointer-events: auto; }

    .chatbox-message__menu { margin: 1px 10px 0 0; padding: 0; display: inline; }
    .chatbox-message__delete-button { margin: 5px; font-size: inherit !important; }
  `);

  const SELECTORS = {
    chatbox: ["#chatbox__messages-create", "#chatbox__message", 'textarea[name="message"]', "textarea#message"],
    messages: [".chatroom__messages", ".chatbox__messages", ".chatroom-messages"],
    header: ["#chatbox_header", ".chatbox__header", ".chatroom__header"]
  };
  const MESSAGE_SELECTOR = ".chatbox-message, .message";

  // key: localStorage key, cls: <html> class applied while enabled
  const SETTINGS = [
    { id: "toggleBBCodes", key: "toggleBBCodes", cls: "u3d-bbcodes", def: true, label: "BBCodes" },
    {
      id: "toggleMessageGift",
      key: "toggleMessageGift",
      cls: "u3d-msg-gift",
      def: true,
      label: "Direct Message - Gift buttons"
    },
    { id: "toggleReply", key: "toggleReply", cls: "u3d-reply", def: true, label: "Reply button" },
    { id: "togglePanel", key: "togglePanel", cls: "u3d-panel-actions", def: false, label: "Show top Panel buttons" },
    {
      id: "actionsHover",
      key: "u3dActionsHover",
      cls: "u3d-actions-hover",
      def: false,
      label: "Show action buttons on hover"
    }
  ];

  const BB_MAIN = [
    ["[img][/img]", "Image", "fa-solid fa-image"],
    ["[url][/url]", "Link", "fa-solid fa-link"],
    ["[b][/b]", "Bold", "fa-solid fa-bold"],
    ["[i][/i]", "Italic", "fa-solid fa-italic"],
    ["[u][/u]", "Underline", "fa-solid fa-underline"]
  ];
  const BB_MORE = [
    ["[code][/code]", "Code", "fa-solid fa-code"],
    ["[spoiler][/spoiler]", "Spoiler", "fa-solid fa-eye-slash"],
    ["[quote][/quote]", "Quote", "fa-solid fa-quote-left"],
    ["color", "Text color", "fa-solid fa-palette"],
    ["[youtube][/youtube]", "YouTube", "fa-brands fa-youtube"],
    ["[s][/s]", "Strike", "fa-solid fa-strikethrough"],
    ["[left][/left]", "Align left", "fa-solid fa-align-left"],
    ["[center][/center]", "Align center", "fa-solid fa-align-center"],
    ["[right][/right]", "Align right", "fa-solid fa-align-right"],
    ["size", "Text size", "fa-solid fa-text-height"],
    ["list-ul", "Unordered List", "fa-solid fa-list-ul"],
    ["list-ol", "Ordered List", "fa-solid fa-list-ol"],
    ["list-item", "[*]", "fa-solid fa-asterisk"],
    ["hr", "Horizontal Line", "fa-solid fa-minus"],
    ["/msg", "/msg username message", "fa-solid fa-envelope"],
    ["/gift", "/gift username number message", "fa-solid fa-gift"]
  ];

  const BTN_CLASS = "form__button form__button--text";
  const bbButton = ([code, title, icon]) =>
    `<span class="bbcode-button ${BTN_CLASS}" data-bb="${code}" title="${title}"><i class="${icon}"></i></span>`;

  const BBCODES_PANEL_HTML = `
    <div id="bbCodesPanel">
      ${BB_MAIN.map(bbButton).join("")}
      <div class="u3d-bb-more">
        <span id="bbCodeDropdown" class="bbcode-button ${BTN_CLASS}" title="More"><i class="fa-solid fa-angle-right"></i></span>
        <div id="bbCodeDropdownMenu" class="panelV2"><div class="grid">${BB_MORE.map(bbButton).join("")}</div></div>
      </div>
    </div>`;

  const ACTION_BAR_HTML = `
    <span class="u3d-action-btn u3d-action-btn--reply ${BTN_CLASS}" title="Reply"><i class="fa-solid fa-reply"></i></span>
    <span class="u3d-action-btn u3d-action-btn--dm ${BTN_CLASS}" title="Direct Message"><i class="fa-solid fa-envelope"></i></span>
    <span class="u3d-action-btn u3d-action-btn--gift ${BTN_CLASS}" title="Gift"><i class="fa-solid fa-gift"></i></span>`;

  let closeBBCodeMenu = () => {};

  const loadSetting = (s) => {
    const v = localStorage.getItem(s.key);
    return v === null ? s.def : v === "true";
  };
  const saveSetting = (s, value) => localStorage.setItem(s.key, String(value));

  function waitForAny(selectors, interval = 300, timeout = 20000) {
    return new Promise((resolve, reject) => {
      const start = Date.now();
      const tick = () => {
        for (const sel of selectors) {
          const el = document.querySelector(sel);
          if (el) return resolve(el);
        }
        if (Date.now() - start > timeout) return reject(new Error(`Timeout: ${selectors.join(", ")}`));
        setTimeout(tick, interval);
      };
      tick();
    });
  }

  // Text insertion
  function insertText(chatbox, text, start = chatbox.selectionStart, end = chatbox.selectionEnd) {
    chatbox.setRangeText(text, start, end, "end");
    chatbox.focus();
    chatbox.dispatchEvent(new Event("input", { bubbles: true }));
  }

  function wrapSelection(chatbox, open, close, suffix = " ") {
    const selected = chatbox.value.slice(chatbox.selectionStart, chatbox.selectionEnd);
    insertText(chatbox, open + selected + close + suffix);
  }

  const splitBB = (code) => [code.slice(0, code.indexOf("]") + 1), code.slice(code.lastIndexOf("["))];

  function insertFromClipboard(chatbox, code, suffix) {
    const [open, close] = splitBB(code);
    navigator.clipboard
      .readText()
      .then((text) => insertText(chatbox, open + (text || "").trim() + close + suffix))
      .catch(() => insertText(chatbox, open + close + suffix));
  }

  function wrapWithArg(chatbox, tag, promptText, defaultVal) {
    const arg = prompt(promptText, defaultVal);
    if (arg !== null) wrapSelection(chatbox, `[${tag}=${arg}]`, `[/${tag}]`);
  }

  const YT_ID = /^[A-Za-z0-9_-]{11}$/;
  function parseYouTubeId(input) {
    const s = (input || "").trim();
    if (!s) return null;
    if (YT_ID.test(s)) return s;
    try {
      const u = new URL(/^https?:\/\//i.test(s) ? s : "https://" + s);
      const parts = u.pathname.split("/").filter(Boolean);
      const candidates = [];
      if (/youtu\.be$/.test(u.hostname)) candidates.push(parts[0]);
      candidates.push(u.searchParams.get("v"));
      if (["shorts", "embed", "v", "live", "watch"].includes(parts[0])) candidates.push(parts[1]);
      return candidates.find((c) => c && YT_ID.test(c)) || null;
    } catch {
      return null;
    }
  }

  function insertYouTube(chatbox, code) {
    const [open, close] = splitBB(code);
    const insertId = (id) => {
      if (id) insertText(chatbox, open + id + close + "\n");
    };
    const askManual = () => insertId(parseYouTubeId(prompt("Paste YouTube link or 11-char video ID:")));
    const fromSelection = parseYouTubeId(chatbox.value.slice(chatbox.selectionStart, chatbox.selectionEnd));
    if (fromSelection) return insertId(fromSelection);
    navigator.clipboard
      .readText()
      .then((clip) => {
        const id = parseYouTubeId(clip);
        if (id) insertId(id);
        else askManual();
      })
      .catch(askManual);
  }

  function insertBB(chatbox, code) {
    switch (code) {
      case "[img][/img]":
        return insertFromClipboard(chatbox, code, "\n");
      case "[url][/url]":
        return insertFromClipboard(chatbox, code, " ");
      case "[youtube][/youtube]":
        return insertYouTube(chatbox, code);
      case "/msg":
      case "/gift":
        return insertText(chatbox, code + " ");
      case "color":
        return wrapWithArg(chatbox, "color", "Color (name or #rrggbb):", "#ff0000");
      case "size":
        return wrapWithArg(chatbox, "size", "Text size (e.g., 12, 14, 18):", "14");
      case "list-ul":
        return insertText(chatbox, "[list]\n[*] Item 1\n[*] Item 2\n[/list]\n");
      case "list-ol":
        return insertText(chatbox, "[list=1]\n[*] Item 1\n[*] Item 2\n[/list]\n");
      case "list-item":
        return insertText(chatbox, "[*] Item\n");
      case "hr":
        return insertText(chatbox, "[hr]\n");
      default:
        return wrapSelection(chatbox, ...splitBB(code));
    }
  }

  // Message actions
  const cleanName = (s) =>
    (s || "")
      .replace(/\bUnknown\b/gi, "")
      .replace(/\s+/g, " ")
      .trim();

  function getMessageUser(msg) {
    const link =
      msg.querySelector(".user-tag__link") ||
      msg.querySelector('a[href*="/users/"], a[href*="/user/"], a[href*="/profile/"]');
    const profileUrl = link?.href || "";
    let name = cleanName((msg.querySelector(".user-tag__name") || link)?.textContent);
    if (!name && profileUrl) {
      try {
        name = cleanName(decodeURIComponent(new URL(profileUrl).pathname.split("/").filter(Boolean).pop() || ""));
      } catch {}
    }
    return { name, profileUrl };
  }

  function quoteMessage(chatbox, name, profileUrl, text) {
    const label = profileUrl ? `[url=${profileUrl}]${name}[/url]` : name;
    const body = text.replace(/\s+/g, " ").trim();
    insertText(chatbox, `[b]${label} :[/b][color=#999999] "[i]${body}[/i]"[/color]\n\n`);
  }

  function addActionBar(message) {
    const header = message.querySelector(".chatbox-message__header, .message-header");
    if (!header || header.querySelector(".u3d-action-bar")) return;
    const bar = document.createElement("div");
    bar.className = "u3d-action-bar";
    bar.innerHTML = ACTION_BAR_HTML;
    header.appendChild(bar);
  }

  function setupActionBars(chatbox, messages) {
    messages.querySelectorAll(MESSAGE_SELECTOR).forEach(addActionBar);
    new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (!(node instanceof Element)) continue;
          if (node.matches(MESSAGE_SELECTOR)) addActionBar(node);
          node.querySelectorAll(MESSAGE_SELECTOR).forEach(addActionBar);
        }
      }
    }).observe(messages, { childList: true, subtree: true });

    messages.addEventListener("click", (e) => {
      const btn = e.target.closest(".u3d-action-btn");
      if (!btn) return;
      const msg = btn.closest(MESSAGE_SELECTOR);
      const { name, profileUrl } = getMessageUser(msg);
      if (!name) return;
      if (btn.classList.contains("u3d-action-btn--reply")) {
        const text = msg.querySelector(".chatbox-message__content, .message-content")?.innerText || "";
        quoteMessage(chatbox, name, profileUrl, text);
      } else {
        const cmd = btn.classList.contains("u3d-action-btn--dm") ? "/msg" : "/gift";
        insertText(chatbox, `${cmd} ${name}`, 0, chatbox.value.length);
      }
    });
  }

  // Popups
  function setupFloatingPanel(button, menu, resizeTargets, alignEnd = false) {
    // Lives on <body> so panel overflow clipping and stacking cannot trap it.
    document.body.appendChild(menu);
    const isOpen = () => menu.classList.contains("open");

    const position = (event) => {
      if (!isOpen() || event?.target === menu) return;
      const gap = 8,
        margin = 8;
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;
      const anchor = button.getBoundingClientRect();
      if (anchor.bottom <= 0 || anchor.top >= height || anchor.right <= 0 || anchor.left >= width) {
        toggle(false);
        return;
      }

      // Measure at full size before picking the side with more room.
      menu.style.maxWidth = `${Math.max(0, width - margin * 2)}px`;
      menu.style.maxHeight = `${Math.max(0, height - margin * 2)}px`;
      const below = Math.max(0, height - anchor.bottom - gap - margin);
      const above = Math.max(0, anchor.top - gap - margin);
      const openBelow = menu.getBoundingClientRect().height <= below || below >= above;
      menu.style.maxHeight = `${openBelow ? below : above}px`;

      const bounds = menu.getBoundingClientRect();
      const left = alignEnd ? anchor.right - bounds.width : anchor.left;
      menu.style.left = `${Math.max(margin, Math.min(left, width - bounds.width - margin))}px`;
      menu.style.top = `${Math.max(margin, openBelow ? anchor.bottom + gap : anchor.top - gap - bounds.height)}px`;
    };

    const observer = new ResizeObserver(position);
    const toggle = (force) => {
      const open = typeof force === "boolean" ? force : !isOpen();
      if (open === isOpen()) return;
      menu.classList.toggle("open", open);
      button.classList.toggle("open", open);
      if (open) {
        window.addEventListener("resize", position);
        document.addEventListener("scroll", position, true);
        for (const target of resizeTargets) observer.observe(target);
        observer.observe(menu);
        position();
      } else {
        window.removeEventListener("resize", position);
        document.removeEventListener("scroll", position, true);
        observer.disconnect();
      }
    };

    const close = () => toggle(false);
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle();
    });
    menu.addEventListener("click", (e) => e.stopPropagation());
    document.addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
    return close;
  }

  function setupBBCodes(chatbox) {
    const shell = document.createElement("div");
    shell.id = "bbCodesPanelShell";
    shell.innerHTML = BBCODES_PANEL_HTML;
    chatbox.after(shell);

    // Bind before the More menu is moved out of the shell.
    shell.querySelectorAll("[data-bb]").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        insertBB(chatbox, btn.dataset.bb);
      })
    );
    closeBBCodeMenu = setupFloatingPanel(
      shell.querySelector("#bbCodeDropdown"),
      shell.querySelector("#bbCodeDropdownMenu"),
      [shell, chatbox]
    );
  }

  // Settings
  function settingsPanelHTML() {
    const rows = SETTINGS.map(
      (s) => `
          <div class="row">
            <label class="label" for="${s.id}">${s.label}</label>
            <input type="checkbox" id="${s.id}" class="form__checkbox">
          </div>`
    ).join("");
    return `
      <div id="settingsPanel" class="panelV2">
        <div class="title">
          <div>Unit3D Chatbox Enhanced</div>
          <div class="ver">Version ${VERSION}</div>
        </div>
        <fieldset class="section form__fieldset">
          <legend class="form__legend">Settings</legend>${rows}
        </fieldset>
      </div>`;
  }

  function applySettings() {
    for (const s of SETTINGS) {
      const on = loadSetting(s);
      document.documentElement.classList.toggle(s.cls, on);
      const box = document.getElementById(s.id);
      if (box) box.checked = on;
    }
    if (!document.documentElement.classList.contains("u3d-bbcodes")) closeBBCodeMenu();
  }

  function setupSettingsPanel(header) {
    if (!header) {
      console.error("Enhanced Chat: chat header not found, settings button skipped.");
      return;
    }
    header.classList.add("u3d-chat-header");

    const anchor = document.createElement("div");
    anchor.id = "u3dSettingsAnchor";
    anchor.className = "u3d-settings-anchor";
    anchor.innerHTML = `<div id="settingsButton" class="${BTN_CLASS}"><i class="fa-solid fa-gear"></i></div>${settingsPanelHTML()}`;
    header.appendChild(anchor);

    for (const s of SETTINGS) {
      document.getElementById(s.id).addEventListener("change", (e) => {
        saveSetting(s, e.target.checked);
        applySettings();
      });
    }
    setupFloatingPanel(
      document.getElementById("settingsButton"),
      document.getElementById("settingsPanel"),
      [header],
      true
    );
  }

  async function init() {
    try {
      const chatbox = await waitForAny(SELECTORS.chatbox);
      const messages = await waitForAny(SELECTORS.messages);
      const header = await waitForAny(SELECTORS.header).catch(() => null);
      setupActionBars(chatbox, messages);
      setupBBCodes(chatbox);
      setupSettingsPanel(header);
      applySettings();
    } catch (error) {
      console.error("Enhanced Chat setup failed:", error);
    }
  }

  init();
})();
