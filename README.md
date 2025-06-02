# Mã nguồn room tự động của De Paul

Cách mở room tự động bằng mã nguồn:
1. Đọc kĩ lưu ý phía dưới

2. Chính sửa mã nguồn cho phù hợp với cá nhân (mật khẩu, tên room, ...)
3. Truy cập https://www.haxball.com/headless
4. Mở bộ dụng cụ cho lập trình viên (nếu là Chrome, ấn F12)
5. Dán mã nguồn, enter và hoàn thành bài kiểm tra chống lại robot

## Lưu ý (phải đọc)
- **ĐẢM BẢO BẢN THÂN ĐÃ THAY MẬT KHẨU MẶC ĐỊNH BẰNG MẬT KHẨU KHÁC AN TOÀN HƠN**

Dành cho ai không biết code, thay 2 dòng đầu bằng
```javascript
const SUPER_ADMIN_PASSWORD = "MẬT KHẨU SIÊU CẤP ADMIN CỦA MÀY Ở ĐÂY";
const ADMIN_PASSWORD = "MẬT KHẨU ADMIN CỦA MÀY Ở ĐÂY";
```

- Tuyệt đối ko can thiệp room dưới mọi hình thức (thay người thủ công, ...)
- Room hiện tại chx đc thiết kế tốt với mô hình chạy liên tục 24/7, nên hãy đóng room sau 1 khoảng thời gian dài mở
- Có thể báo cáo lỗi bẳng cách truy cập https://github.com/shelld3v/haxball-host/issues, gửi báo cáo KÈM ảnh chụp màn hình ghi lại lỗi trên console, thêm nhiều thông tin nhất có thể (nếu có)

## Các câu lệnh:

### Các câu lệnh dành cho người chơi:

- `!help` - Hiển thị các lệnh có thể sử dụng.
- `!discord` - Hiển thị link server Discord.
- `!bye` - Rời khỏi phòng.
- `!stat` - Hiển thị thống kê trong tháng của người chơi.
- `!rank` - Hiển thị bảng xếp hạng tháng.**
- `!kickafk` - Bắt đầu theo dõi và kick nếu phát hiện người chơi AFK trên sân.
- `!spec` - Di chuyển ra Spectators.
- `!afk` - Chuyển sang chế độ AFK.
- `!afks` - Xem danh sách người chơi AFK.
- `!surrender` - Đầu hàng (tối thiểu sau 2 phút). Nếu là đội trưởng thì sẽ được đầu hàng ngay lập tức còn không sẽ yêu cầu ít nhất 3 phiếu đầu hàng để dừng trận đấu.
- `!predict` - Dự đoán tỉ số và nhận thưởng một suất đá chính ở trận sau (hạn trong 1 phút đầu trận và trước khi có bàn thắng).
  
*Cách dùng: `!predict <số bàn của RED>-<số bàn của BLUE>` (VD: `predict 3-2`)*
- `!captains` - Hiển thị đội trưởng của 2 đội. Dành riêng cho room pick.
- `!adjustsize` - Chỉnh kích thước cầu thủ.
  
*Cách dùng: `!adjustsize <số đơn vị> (VD: !adjustsize -2)`. Dùng `!adjustsize 0` để đặt lại về mặc định*
- `!msgcolor` (*tạm thời bị vô hiệu hoá, nếu biết code có thể tự bật lại*) - Cài đặt màu sắc tin nhắn
  
*Cách dùng: `!msgcolor <mã màu>` hoặc `!msgcolor normal` để đặt lại về mặc định*

### Các câu lệnh dành riêng cho đội trưởng (room pick):
- `!sub` - Thay người.
  
*Cách dùng: `!sub <người chơi cần thay ra> <người chơi cần thay vào>`. Bỏ trống vị trí thay vào để máy tính thay vào cầu thủ có thống kê tốt nhất trong room (VD: `!sub @tsyy @De_Paul` để thay `De Paul` vào cho `tsyy`; hoặc `!sub tsyy` để thay cầu thủ xuất sắc nhất theo thống kê ở Spectators vào cho `tsyy`)*
- `!pause` - Tạm dừng game để thực hiện thay người. Chỉ khả dụng trước khi 2 đội phát bóng (kickoff).
- `!resume` - Tiếp tục trận đấu (sau khi sử dụng `!pause`).
- `!leavecap` - Nhường băng đội trưởng cho người chơi khác
*Cách dùng: `!leavecap <người chơi>` (VD: `!leavecap @De_Paul` hoặc `!leavecap paul` để nhường vị trí đội trưởng cho De Paul)*

### Các câu lệnh dành riêng cho admin:
- `!login` - Đăng nhập.
  
*Cách dùng: `!login <mật khẩu>`*
- `!yellow` - Phạt thẻ vàng người chơi. Nhận 2 thẻ vàng người chơi sẽ bị ban.
  
*Cách dùng: `!yellow <người chơi> <lí do nếu có>` (VD: `!yellow @De_Paul Óc` hoặc `!yellow paul`)*
- `!clearyellow` - Xóa thẻ vàng người chơi.
  
*Cách dùng: `!clearyellow <người chơi>` (VD: `!clearyellow @De_Paul`)*
- `!mute` - Cấm chat một người chơi. Mọi lượt cấm chat sẽ được xóa sau khi đóng room.
  
*Cách dùng: `!mute <người chơi> <thời hạn cấm chat (đơn vị phút)> <lí do nếu có>`. Đặt thời hạn là 0 nếu muốn cấm chat vĩnh viễn. (VD: `!mute @De_Paul 5 Toxic` hay `!mute paul 0`)*
- `!unmute` - Bỏ cấm chat một người chơi.
  
*Cách dùng: `!unmute <người chơi>` (VD: `!unmute @De_Paul` hay `!unmute paul`)
- `!ban` - Ban người chơi.
  
*Cách dùng: `!ban <người chơi> <thời hạn ban (đơn vị giờ)> <lí do nếu có>`. Đặt thời hạn là 0 nếu muốn ban vĩnh viễn. (VD: `!ban @De_Paul Phá room` hay `!ban paul 0`)*
- `!bans` - Xem danh sách người chơi bị ban, gồm ID, tên, và lí do bị ban.
- `!unban` - Xóa lượt ban một người chơi cụ thể.
  
*Cách dùng: `!unban <ID>`. ID của người chơi bị ban có thể được tìm thấy thông qua `!bans` (VD: `!unban 245`)*
- `!clearmutes` - Xóa hết các lượt cấm chat.
- `!clearbans` - Xóa hết các lượt ban.
- `!lock` - Khóa khung chat (chỉ admin mới có thể nhắn).
- `!unlock` - Bỏ khóa khung chat.
- `!assigncap` - Chỉ định đội trưởng. Dành riêng cho room pick.
  
*Cách dùng: `!assigncap <red|blue> <người chơi>` (VD: `!assigncap blue @De_Paul` hoặc `!assigncap red paul`)*

## Một số câu hỏi thường gặp

### Lỗi "Connection error"
Hiện tại haxball đang có lỗi người chơi khi bị kick sẽ báo lỗi "Connection error" thay vì tin nhắn bị kick kèm lí do. Xem xét một trong các lí do sau:
- Tên người chơi không hợp lệ: tên người chơi trống hoặc chỉ có dấu cách.
- Tên trùng với một người chơi khác trong room, hãy thử đổi tên.

### Mất thống kê sau khi đổi máy/xóa dữ liệu web
Để đề phòng trường hợp này, hãy lưu **privateKey** vào đâu đó đề phòng mất nó. Bằng cách:
- Truy cập https://www.haxball.com/playerauth, copy **privateKey** ở dòng cuối cùxng, có dạng `idkey.xxxxxx`
- Lưu giá trị này vào đâu đó để backup, VD như 1 file text
- Khi mất dữ liệu, hãy truy cập lại https://www.haxball.com/playerauth, chọn **Change key** và điền key đã lưu từ trước

### Tại sao tôi không được pick dù ở vị trí cao nhất
Nếu một người chơi được thay vào trong 30 giây cuối trận hoặc trong khoảng thời gian bù giờ thì người chơi đó vẫn được pick trận tiếp theo, khi máy tính đã chọn được người pick cho trận sau thì những ng bị thay vô muộn sau đó sẽ không được hưởng đặc quyền này

