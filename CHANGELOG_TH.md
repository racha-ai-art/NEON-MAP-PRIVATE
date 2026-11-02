# NEON MAP — Change Log (Private v0.9.7)

## v0.9.7
- เพิ่มรายละเอียดใน Local Pixel Art และการเลือกโทนจากคำใบ้ World / Character / Lorebook แบบใช้โค้ดในเบราว์เซอร์
- เพิ่มคำเตือนโหมดเสียเงินเมื่อเลือก Pollinations, เชื่อม wallet และกดสร้างภาพ
- ยืนยันการสร้างภาพแบบเสียเงินอีกครั้งก่อนเรียก API

## v0.9.6
- เพิ่ม Local Pixel Art (Canvas/SVG) แบบไม่ใช้ API ภาพ
- รองรับแคชภาพในเบราว์เซอร์และเรนเดอร์เมื่อเปลี่ยนสถานที่

## v0.9.5
- ปรับ ID สถานที่ให้คงที่และกู้หมุดที่เคยบันทึก
- แก้ข้อมูลสถานที่ผิดบริเวณ, สถานที่ GM และการป้องกันข้อมูลลับ
- เพิ่มความเสถียรของการ์ดสถานที่และรายการหมุด

## การปรับเพื่อ GitHub (ไม่เปลี่ยนหมายเลขเวอร์ชัน)
- แยก `manifest.json`, `index.js` และ `style.css` สำหรับลงเป็น SillyTavern extension
- **ลบข้อมูลแชทจำลองและการปลอม `window.SillyTavern` จาก Standalone Demo**
- แก้สไตล์ HTML `hidden` ของข้อความเตือนค่าใช้จ่าย
- แก้การเชื่อมต่อ `saveRender` ของ Local Pixel และเพิ่ม fallback เมื่อ IndexedDB ใช้ไม่ได้ (ยังวาดภาพในเบราว์เซอร์ได้)
- ไม่มีข้อมูลแชทตัวอย่างหรือคีย์ API ถูกเพิ่มในชุดอัปโหลด

โปรดทดสอบกับ SillyTavern จริงก่อนใช้งานกับแชทสำคัญ

## 0.9.8 - Floating dock and resizable bottom map

- Turned MAP launcher into a draggable round bubble; position stored locally.
- Opening shows a bottom overlay; X collapses to bubble.
- Height adjustable by +, -, header handle; width and height via top-left corner.
- Mobile layout prioritizes map; Info toggles notes/settings.
- Auto-open disabled by default (optional setting); no model tokens or image credits added.
