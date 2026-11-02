# วิธีอัป NEON MAP v0.9.8 ไป GitHub แบบส่วนตัว และติดตั้งใน SillyTavern

> **สำคัญ:** ชุดนี้เตรียมไว้เป็นส่วนขยายสำหรับ GitHub แล้ว แต่ยังไม่ได้ทดสอบกับเซิร์ฟเวอร์ SillyTavern จริง การทดสอบที่ทำเป็นการจำลองบริบทในเบราว์เซอร์ แนะนำให้สำรองแชทก่อนติดตั้ง

## A. เตรียมไฟล์

1. ดาวน์โหลดไฟล์ `NEON_MAP_v0.9.7_GitHub_Ready.zip` แล้ว **แตกไฟล์ ZIP**.
2. ตรวจว่ามี `manifest.json`, `index.js`, `style.css`, `README.md`, `INSTALL_PRIVATE_TH.md`, `CHANGELOG_TH.md` และ `.gitignore` อยู่ในโฟลเดอร์เดียวกัน.
3. **ห้ามอัปเฉพาะ ZIP** ถ้าต้องการติดตั้งผ่าน GitHub: GitHub ต้องมีไฟล์ `manifest.json` อยู่ที่รากของ repo.

## B. สร้าง Private repository บน GitHub

1. ลงชื่อเข้าใช้ [github.com](https://github.com/) แล้วกดปุ่ม **+** ด้านขวาบน → **New repository** (หรือเปิด [github.com/new](https://github.com/new)).
2. ตั้งชื่อ เช่น `NEON-MAP-PRIVATE`.
3. ใน **Visibility** เลือก **Private** (อย่าเลือก Public).
4. จะเลือกสร้าง README เริ่มต้นหรือไม่ก็ได้; ชุดไฟล์นี้มี README มาแล้ว การสร้าง repo เปล่าจะง่ายกว่า.
5. กด **Create repository**.
6. เข้า repo → **Add file** → **Upload files** → ลากไฟล์ทั้งหมดจากโฟลเดอร์ที่แตก ZIP มาใส่ **ที่รากของ repo** (GitHub เว็บอาจซ่อนไฟล์ `.gitignore` บางกรณี; อัปเฉพาะไฟล์หลักก็ใช้ได้).
7. เลื่อนลง ตั้ง Commit message เช่น `Add NEON MAP v0.9.8`, กด **Commit changes** / **Propose changes** ตามหน้าจอ.
8. ตรวจในหน้าแรกของ repo ว่ามี `manifest.json` และ `index.js` โดยตรง ไม่ใช่อยู่ในโฟลเดอร์ซ้อนสองชั้น.

ตัวอย่างโครงสร้างที่ **ถูกต้อง**:

```text
NEON-MAP-PRIVATE/
├── manifest.json
├── index.js
├── style.css
├── README.md
├── INSTALL_PRIVATE_TH.md
├── CHANGELOG_TH.md
└── .gitignore
```

## C. ใช้คนเดียว: วิธีติดตั้ง Private repo ที่แนะนำ

GitHub **Private repository** ต้องมีสิทธิ์เข้าถึง การนำ URL ไปวางที่ **Extensions → Install Extension** ของ SillyTavern โดยตรงอาจล้มเหลวถ้ากระบวนการ Git ของ SillyTavern ยังไม่มี credentials. ดังนั้นวิธีเสถียรกว่าคือ **clone ด้วยเครื่องมือ Git ที่ล็อกอินอยู่ แล้วติดตั้งจากโฟลเดอร์**:

1. ติดตั้ง [GitHub Desktop](https://desktop.github.com/) และล็อกอินบัญชี GitHub เจ้าของ repo (หรือใช้ `git clone` ที่ตั้งค่าการยืนยันตัวตนไว้แล้ว).
2. ใน GitHub Desktop เลือก **File → Clone repository** → เลือก Private repo `NEON-MAP-PRIVATE` → **Clone**.
3. ปิด SillyTavern ก่อนคัดลอก แล้วนำ **โฟลเดอร์ repo ทั้งโฟลเดอร์** ที่ clone มาไปไว้ที่:
   - **เฉพาะบัญชี SillyTavern ของคุณ:** `<SillyTavern>/data/<user-handle>/extensions/NEON-MAP-PRIVATE/`
   - **ทุกบัญชีที่ใช้ SillyTavern ตัวเดียวกัน:** `<SillyTavern>/public/scripts/extensions/third-party/NEON-MAP-PRIVATE/`
   - ถ้าไม่ได้เปิดระบบหลายผู้ใช้ ค่า `<user-handle>` มักเป็น `default-user`.
4. ภายในโฟลเดอร์ปลายทางต้องเห็น `manifest.json` โดยตรง.
5. เปิด SillyTavern ใหม่ → เปิด **Extensions → Manage extensions** → ตรวจว่า **NEON MAP (Private)** ปรากฏและเปิดใช้งานอยู่.
6. เปิดแชทตัวละคร แล้วกดปุ่มลอย **MAP**.

**กรณีอยากติดตั้งด้วย URL:** ถ้า Git บนเครื่อง/เซิร์ฟเวอร์ที่รัน SillyTavern รับรองสิทธิ์เข้า Private repo ได้อยู่แล้ว ให้ลอง **Extensions → Install Extension** และวาง `https://github.com/USERNAME/NEON-MAP-PRIVATE` (แทนชื่อผู้ใช้จริง); เลือก install for current user ถ้ามีตัวเลือก. ถ้าขึ้น not found/authentication failed ให้ใช้วิธี Clone + Copy ข้างบนแทน อย่าใส่ GitHub token ลงใน URL ที่แชร์หรือไฟล์ README.

## D. ตั้งค่าให้ไม่มีค่าเครดิต

1. เปิด NEON MAP → ส่วน **MAP IMAGE / PIXEL ART**.
2. เปิด **เลเยอร์ภาพประกอบแผนที่**.
3. เลือก Provider: **Local Pixel Art (ฟรี / offline)**.
4. เปิด **เจนอัตโนมัติ** ได้ เพราะ Local Pixel ใช้ CPU/Canvas ในเบราว์เซอร์ ไม่เรียก API สร้างภาพ.
5. ถ้าจะป้องกันความผิดพลาด ให้หลีกเลี่ยงการเลือก **Pollinations.ai** ซึ่งมีเครดิตและมีหน้าต่างยืนยัน.

### สถานะค่าใช้จ่าย

| โหมด | ค่าเครดิต/การแจ้งเตือน |
|---|---|
| Off / แผนที่ Local | ไม่มีค่า API ภาพ |
| Local Pixel Art | ไม่เสียเครดิต, ไม่เรียก API ภาพ |
| AI Horde | บริการชุมชนโดยทั่วไปฟรี แต่มีคิว/ข้อตกลงของผู้ให้บริการ |
| Pollinations.ai | อาจมีค่าใช้จ่ายจริง; มีข้อความเตือนและ popup ยืนยันหลายชั้น ก่อนส่งงานแบบเสียเงิน |

## E. อัปเดตทีหลัง

- ถ้า clone ผ่าน GitHub Desktop ให้กด **Fetch origin** → **Pull origin** แล้วคัดลอกโฟลเดอร์ส่วนขยายที่อัปเดตไปทับโฟลเดอร์ SillyTavern จากนั้นรีสตาร์ต.
- ถ้าติดตั้งแบบ Git URL ผ่าน SillyTavern ให้ใช้คำสั่งอัปเดตส่วนขยายของ SillyTavern แต่ Private repo ต้องยังยืนยันตัวตนได้.
- ก่อนเปลี่ยนรุ่นใหญ่ ให้ Export JSON ของ NEON MAP และสำรองแชท.

## F. ถ้าใช้มือถือ Android

- อัปโหลดไฟล์ไป Private GitHub ผ่านเว็บบนมือถือได้ แต่ **การแตกไฟล์/ลากอัปหลายไฟล์และ Clone ผ่าน GitHub Desktop** สะดวกกว่าบนคอมพิวเตอร์.
- ถ้าคุณเปิด SillyTavern บนคอม/เซิร์ฟเวอร์ แต่เล่นผ่านมือถือ ให้ติดตั้งโฟลเดอร์ส่วนขยายบน **เครื่องที่รันเซิร์ฟเวอร์ SillyTavern** ไม่ใช่แค่โทรศัพท์.
- ถ้ารัน SillyTavern ใน Termux ให้ใช้ Git ที่ล็อกอินได้บน Termux แล้ว clone/copy ไปยังโฟลเดอร์ user extension ของอินสแตนซ์นั้น.

## ปัญหาที่พบบ่อย

- **ไม่เห็น extension:** ตรวจ `manifest.json` อยู่รากโฟลเดอร์, ตรวจโฟลเดอร์ปลายทาง, รีสตาร์ต/รีโหลดหน้า, เปิด Manage extensions.
- **Private repo clone ไม่สำเร็จ:** ใช้ GitHub Desktop หรือตั้ง Git credentials แบบปลอดภัยก่อน; ห้ามฝัง token ลงในไฟล์/URL.
- **ไม่มี MAP:** ต้องเปิดแชทตัวละครที่มี `chatId` ก่อน, ตรวจ Console ของเบราว์เซอร์ว่ามี JavaScript error หรือไม่.
- **Lorebook ไม่มีบนแผนที่:** ตรวจว่าได้ผูก Lorebook กับแชท/ตัวละครแล้ว และข้อมูลได้รับการเปิดเผยในฉาก; แผนที่อาจเป็นผังประมาณการ.
- **Local Pixel ไม่แสดง:** ตรวจว่าเปิดเลเยอร์และเลือก Provider Local Pixel, ตรวจว่าเบราว์เซอร์รองรับ Canvas และ IndexedDB, เปิด Console ดู error.

### แหล่งอ้างอิง
- SillyTavern official: https://docs.sillytavern.app/for-contributors/writing-extensions/
- SillyTavern extensions: https://docs.sillytavern.app/extensions/
- GitHub create repo: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository
- GitHub upload files: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository


## v0.9.8 UI controls

- Floating round MAP bubble: drag to move, tap to open. The saved position stays in your browser.
- Bottom map sheet: header minus/expand buttons adjust height. Drag the top strip to resize height; top-left corner adjusts height and width.
- Mobile: Info toggles between the atlas and notes/settings. Close X returns to the floating bubble.
- All UI layout settings stay in local browser storage; no new prompt tokens or image credits.
