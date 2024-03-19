NestJs nó sẻ tổ chức hoạt động theo các module 
Ví dụ như : 
- Product Modules sẻ bao gồm : 
+/ Module 
+/ Controler 
+/ Categories Modules . 
- Category Modules sẻ bao gồm : 
+/ Module 
+/ Controler 
+/ Categories Modules . 

Ví dụ quản lý một api user sẻ có :
User.module.ts là tập hợp các component (userController, userService,         UserProvider, v.v.) được đóng gói lại với nhau.
User.controller.ts là nơi sử lý các request , viết API , định nghĩa route 
 