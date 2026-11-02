# NEON MAP — Change Log v0.9.10

## v0.9.10 — เปิดและพับแผนที่ได้จากหน้าแชทโดยตรง
- เพิ่มปุ่มกลม MAP ภายใน `#sheld` ซึ่งเป็นพื้นที่แชทของ SillyTavern จริง ไม่ต้องออกจากแชท
- ลากย้ายปุ่มได้ภายในหน้าแชท และจำตำแหน่งที่ลากไว้บนอุปกรณ์นั้น
- กด MAP เพื่อเปิดแผนที่ซ้อนบนหน้าแชท กด X มุมขวาบนเพื่อพับกลับ
- แก้การตรวจปุ่มพร้อมใช้: ไม่ลบปุ่มสำรองเพียงเพราะ HTML ของปุ่มหลักถูกสร้างแล้ว
- วางหน้าต่างแผนที่เป็น overlay ที่รับคลิกเฉพาะในหน้าต่างจริง ไม่ขัดขวางการแชทเมื่อพับไว้
- ปุ่ม MAP ! จะแจ้งข้อผิดพลาดหาก engine ไม่พร้อม
- ไม่มีการเรียกบริการสร้างภาพแบบเสียเงินเพิ่มเติม ไม่มีการฉีด prompt หรือเพิ่ม token ในการโรลเพลย์
- ยังต้องทดสอบบนเซิร์ฟเวอร์ SillyTavern จริงของผู้ใช้อีกครั้ง

# v0.9.9 — แก้ปุ่มลอยไม่ปรากฏและเพิ่มตัวตรวจสอบการโหลด

- เพิ่ม `bootstrap.js` เป็นไฟล์เริ่มต้นใหม่ แสดงปุ่ม MAP ทันทีที่ส่วนขยายเริ่มโหลด (ก่อนระบบแผนที่)
- ถ้าโหลดโค้ดหลักผิดพลาด จะเห็น `MAP !` กดดูข้อความผิดพลาดได้
- ยกระดับลำดับชั้นปุ่มและหน้าต่าง (z-index) เพื่อไม่ถูกหน้า SillyTavern บัง
- ระบบแชทหรือ Lorebook อ่านไม่สำเร็จจะไม่ทำให้ปุ่ม MAP หาย
- หากยังไม่เห็น MAP หรือ MAP ! ให้ตรวจว่า SillyTavern ติดตั้งและเปิดใช้ v0.9.9 จริงหรือไม่
- รักษาการยืนยันก่อนใช้เครดิต Pollinations ตามเดิม; Local Pixel Art ไม่ใช้เครดิต

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