# MySQL [#52](https://github.com/vhxubo/blog/issues/52)

## Windows  下设置 root 密码

默认没有密码

```
mysql -u root
mysql > ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';
mysql -u root -p
```

修改密码格式
> https://www.itread01.com/content/1542710053.html

```
mysql > ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;
mysql > ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
```