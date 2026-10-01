MUI, Ant Design, Radix: ready to use component

- đa dạng, dùng luôn
- nhược: khó custom vì dùng hệ thống style riêng

---

# Radix UI

https://www.radix-ui.com/themes/docs/overview/getting-started
npm install @radix-ui/themes

## Radix Primitives

- npm i @radix-ui/react-icons

---

# shadcn:

- cung cấp base, dùng tailwind - dễ custom
- dùng cái nào, tải cái đấy - k bị nặng (275 dòng vs 27k dòng)
- lấy khuôn từ Radix (chưa styles) về thêm Tailwind r đóng gói
  (class tailwind inline đc thêm vào utility)
  Config:
  npx shadcn@latest init

## cn

cn có:

- clsx giúp gom class, loại bỏ class null / undefined
- twMerge: Loại bỏ các class ghi đè lên nhau

## Property

- asChild: gộp thẻ Button thành thẻ a (bảo toàn Prop của Button)
  <Button asChild><a>Link</a></Button>
