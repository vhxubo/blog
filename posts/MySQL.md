# MySQL [#52](https://github.com/vhxubo/blog/issues/52)

## Windows  下设置 root 密码

默认没有密码

```
mysql -u root
mysql > ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';
mysql -u root -p
```