# Mindset

1. Đi từ bao quát đến chi tiết
2. Mô tả càng rõ càng tốt (thẻ gì, logic ntn)
3. Tách component (xuất hiện >= 2 -> tách)

# Plan threads.com

## Mô tả lộ trình làm dự án

### Lựa chọn công nghệ:

- Vite
- React
- JS
- Routing: React Router
- Form: React Hook Form
- Validation: Yup
- i18n (đa ngôn ngữ): React i18next
- CSS: Tailwind CSS
- UI Component: Shadcn
- State management: Redux Toolkit / RTK Query
- HTTP request: Axios
- Font icon: Fontawesome, Lucide icons (Shadcn), Hero icons (Tailwind)
- Font family: system-ui

### Phân tích cấu trúc:

#### Layouts:

- default layout, auth layout, no layout

- Default layout:

* Navigation
* Add thread button

- Auth layout:

* Wrapper có background-image

- No layout

#### Pages

a. default layout:

- Home page:
    - Có nhiều pages, các page xếp hàng ngang
    - Mỗi page có state trong store
    - Khi có 1 page trong Home page thì click tên user / thread thì chuyển trang. Nhưng nếu có nhiều page thì chỉ thay đổi nội dung của page đó
- For you page:
    - Danh sách bài thread
    - Modal đăng bài thread
- Post detail page:
    - Nội dung bài thread và danh sách comment
    - Modal đăng bài thread
- Following page:
    - Danh sách bài thread của những user đã follow
- Ghost thread page:
    - Danh sách bài thread đã lưu trữ quá 24h
- Search page:
    - Input on change hiện danh sách kết quả bên dưới
    - Filter
    - Follow suggestion
- Activity page:
    - Danh sách bài thread đc gợi ý
- Profile page
    - Thông tin của user (nếu user chính là mik thì hiện các nút action)
- Insight page
    - Card và Chart của Shadcn (views, interactions, followers: by location, by age, by gender)
- Setting page
    - Dùng Sidebar của Shadcn
    - Có 4 item trong Sidebar
- Saved page
    - Danh sách bài thread đã lưu

b. auth layout:

- Login page
    - Form dùng RHF có 2 trường: email/username/phone và password
    - Có link tới trang "Quên mật khẩu"
    - Có nút đăng ký bằng Instagram
- Register page
    - Nếu API có thì làm trang này
- Forgot password page
    - Nếu API có thì làm trang này
- Reset password page
    - Nếu API có thì làm trang này

c. No layout:

- Not found page
    - Hiển thị thông báo và nút "Back" quay lại trang chủ
- Embed thread page - Xuất 1 khối code HTML và 1 thẻ script chứa logic nhúng iframe chưa thread vào khối code HTML

### Thời gian

- Có 26 ngày, mỗi ngày khoảng 2-4 tiếng

---

### Note

- Cấu trúc: 2:04
- blockquote + script đổi thành iframe + select -> gen ra
- kéo thả: dndkit.com
- có thư viện / Component trên shadcn chưa? Có r thì dùng lun thay vì code chay (tốn tg học nhưng xử lý mượt)

---

## Yêu cầu
1. Dựa vào mô tả trên, làm chi tiết từng mô tả vs code triển khai
2. Đưa ra kế hoạch, chia từng gian đoạn dựa trên thời gian trong mô tả để hoàn thành dự án đúng thời hạn